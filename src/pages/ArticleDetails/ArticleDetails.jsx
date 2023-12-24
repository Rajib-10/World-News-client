import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { Flip, Slide } from "react-awesome-reveal";

const ArticleDetails = () => {
  const { id } = useParams();

  const axiosPublic = useAxiosPublic();
  const { data: articleDetails = {} } = useQuery({
    queryKey: ["articleDetails", { id }],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      const article = res.data.find((item) => item._id === id);
      return article;
    },
  });

  return (
    <div className="my-10">
     <Flip>
     <h1 className="text-3xl text-center text-[#7B1FA2]">Article Details</h1>
     </Flip>
      <div className="flex justify-center w-60% mx-auto items-center">
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <Slide direction="right"><div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img className="w-[500px] h-[500px]  object-cover p-4 mx-auto rounded-xl"
              src={articleDetails?.image}
              alt="ui/ux review check"
            />
          </div>
          </Slide>
          
          <Slide><div className="p-6">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {articleDetails?.title}
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              {articleDetails?.description}
            </p>
          </div></Slide>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
