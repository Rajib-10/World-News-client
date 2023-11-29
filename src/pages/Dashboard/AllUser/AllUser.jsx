import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Button } from "@mui/material";


const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Make Admin Him/Her",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is admin now`,
              showConfirmButton: false,
              timer: 1000
            });
          }
          console.log(res.data);
        });
      }
    });
  };

  return (
    <div className="text-3xl font-medium lg:text-right text-[#7B1FA2] ">
      Total Users: {allUsers?.length}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Photo
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((user) => (
              <tr
                key={user._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" w-12 h-12">
                        <img
                          className="rounded-full w-full h-full object-cover"
                          src={user.photo}
                          alt="user photo"
                        />
                      </div>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{user?.name}</td>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <Button
                      onClick={() => handleMakeAdmin(user)}
                      variant="outlined"
                    >
                      Make Admin
                    </Button>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(user?._id)}
                    className="text-3xl bg-red-700 rounded-full"
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default AllUser;
