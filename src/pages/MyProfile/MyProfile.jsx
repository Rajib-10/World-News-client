import { Button } from "@mui/material";
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";


const MyProfile = () => {
    const {user} = useAuth()
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="group relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
    <img  className="w-full object-cover h-[320px] group-hover:scale-110" src={user?.photoURL} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {user?.displayName}
    </h4>
    <p className="block font-sans text-base antialiased font-medium leading-relaxed  ">
      {user?.email}
    </p>
    <div className="py-2">
       <Link to='/update-profile'>
       <Button variant="contained">Update</Button>
       </Link>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default MyProfile;