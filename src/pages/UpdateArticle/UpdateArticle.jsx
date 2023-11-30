import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Select from "react-select";
import usePublisher from "../../Hook/usePublisher";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const image_hosting_key = '6ca08b587b375113f32a2be549ed3bf0';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateArticle = () => {
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const {id} = useParams()
  const { data: articleUpdate = {} } = useQuery({
    queryKey: ["articleUpdate", { id }],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      const article = res.data.find((item) => item._id === id);
      return article;
    },
  });

  

  const [publishers] = usePublisher();
  const [selectedPublisher, setSelectedPublisher] = useState(null);

  const [selectedTags, setSelectedTags] = useState([]);

  const tagOptions = [
    { value: "sports", label: "Sports" },
    { value: "politics", label: "Politics" },
    { value: "technology", label: "Technology" },
    { value: "entertainment", label: "Entertainment" },
    { value: "science", label: "Science" },
    { value: "health", label: "Health" },
    { value: "business", label: "Business" },
    { value: "lifestyle", label: "Lifestyle" },
  ];

  const publisherOptions = publishers.map((publisher) => ({
    value: publisher.name,
    label: publisher.name,
  }));

  const handlePublisherChange = (selectedOption) => {
    setSelectedPublisher(selectedOption);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const publisher = selectedPublisher ? selectedPublisher.value : null;
    const tags = selectedTags.map((tag) => tag.value);
    const photo = form.photo.files[0];
   
console.log(title,description,publisher,tags,photo)
   const formData = new FormData();
    formData.append('image', photo);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(res.data);
    if(res.data.success){
      const updateArticle = {title,description,publisher,tags,image: res.data.data.display_url}
      
     const response = await axiosSecure.patch(`/articles/${id}`,updateArticle )
      console.log(response.data)
      if(response.data.modifiedCount>0){
          form.reset()
          Swal.fire({
              title: " Article updated successfully.",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
      }
  }
   
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl text-center text-[#7B1FA2]">Update Article</h1>
      <div className="flex justify-center items-center h-[70vh]">
        <form className="w-[70%] md:w-[50%]" onSubmit={handleSubmit}>
          <TextField
            defaultValue={articleUpdate.title || ""}
            fullWidth
            name="title"
            label="Title"
            type="text"
            variant="outlined"
            sx={{ margin: "20px" }}
          />
          <br />
          
          <TextField
            fullWidth
            defaultValue={articleUpdate?.description || ""}
            name="description"
            label="Description"
            type="text"
            variant="outlined"
            sx={{ margin: "20px" }}
          />
          <br />

          <div className="ml-5 mb-5 flex gap-6">
            <label className="flex-1">
              Tags
              <Select
                isMulti
                options={tagOptions}
                value={selectedTags}
                onChange={(selectedOptions) => setSelectedTags(selectedOptions)}
              />
            </label>

            <label className="flex-1">
              Publisher
              <Select
                options={publisherOptions}
                value={selectedPublisher}
                onChange={handlePublisherChange}
              />
            </label>
          </div>

          <input
            
            type="file"
            name="photo"
            className="file-input file-input-bordered w-full max-w-xs ml-5"
          />

          <br />

          <Button
            color="secondary"
            variant="contained"
            type="submit"
            sx={{ margin: "20px" }}
          >
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateArticle;
