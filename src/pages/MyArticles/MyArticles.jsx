import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import { Button } from "@mui/base";
import { Tooltip } from "@mui/material";
import { TbListDetails } from "react-icons/tb";
import { GrUpgrade } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Flip, Slide} from "react-awesome-reveal";

const MyArticles = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: articles = [], refetch } = useQuery({
    queryKey: ["articles", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      const allArticle = res.data.filter((item) => item.email === user.email);
      return allArticle;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/articles/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Article has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="my-10">
     <Flip> <h1 className="text-3xl text-center text-[#7B1FA2]">My Articles</h1></Flip>
     
     {
      articles.length > 0 ?  <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Serial No.
            </th>

            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              isPremium
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
         {articles?.map((item, idx) => (
            <tr
              key={item?._id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4">{idx + 1}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item?.title}
              </th>
              <td className="px-6 py-4">
                {item?.status === "declined" ? (
                  <div>
                    <h1 className="font-medium">{item?.status}</h1>
                    <p className="text-red-500">{item?.message}</p>
                  </div>
                ) : (
                  "Approved"
                )}
              </td>
              <td className="px-6 py-4">{item?.isPremium ? "Yes" : "No"}</td>
              <td className="px-6 py-4">
                <Link to={`/articleDetails/${item._id}`}>
                  <Tooltip title="Article Details">
                    <Button>
                      <TbListDetails className="text-4xl" />
                    </Button>
                  </Tooltip>
                </Link>
              </td>
              <td className="px-6 py-4">
                <Link to={`/updateArticle/${item._id}`}>
                  <Tooltip title="Update">
                    <Button>
                      <GrUpgrade className="text-4xl" />
                    </Button>
                  </Tooltip>
                </Link>
              </td>
              <td className="px-6 py-4">
                <Tooltip title="Delete">
                  <Button onClick={() => handleDelete(item._id)}>
                    <TiDelete className="text-4xl" />
                  </Button>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
    : 
    <Slide direction="right">
      <div className="text 2xl text-red-600 font-medium flex justify-center items-center h-[70vh]">
      <h1>Hey <span className="text-3xl font-bold" >{user?.displayName}</span>, you did not added any articles yet!!</h1>
    </div>
    </Slide>
     }
    </div>
  );
};

export default MyArticles;
