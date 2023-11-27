import { Button, TextField } from "@mui/material";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = "6ca08b587b375113f32a2be549ed3bf0";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPublisher = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.Name.value;
    const photo = form.photo.files[0];

    const formData = new FormData();
    formData.append("image", photo);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data);
    if (res.data.success) {
      const publisherData = {
        name,
        image: res.data.data.display_url,
      };
      const publisherResponse = await axiosSecure.post(
        "/publishers",
        publisherData
      );
      console.log(publisherResponse.data);
      if (publisherResponse.data.insertedId) {
        form.reset();
        Swal.fire({
          title: "Publisher added successfully.",
          showClass: {
            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
          },
          hideClass: {
            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
          },
        });
      }
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-[#7B1FA2]">
        Add Publisher
      </h1>

      <div className="flex justify-center">
      <form  style={{ width: "70%" }} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="Name"
          label="Publisher Name"
          type="text"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />

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

export default AddPublisher;
