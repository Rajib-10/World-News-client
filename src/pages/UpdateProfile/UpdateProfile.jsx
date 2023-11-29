import { Button, TextField } from "@mui/material";
import update from "../../../src/assets/update.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const { user, updateUserProfile } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;

    updateUserProfile(name, photo)
      .then(() => {
        toast.success("User profile updated successfully");
        navigate("/profile");
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl my-5 font-semibold text-[#7B1FA2]">
        Update Profile
      </h1>

      <div className="flex flex-col md:flex-row-reverse justify-center items-center">
        <div className="lg:w-1/2  lg:p-8">
          <form className="w-full lg:w-[70%]" onSubmit={handleSubmit}>
            <TextField
              defaultValue={user?.photoURL}
              fullWidth
              name="photo"
              label="Photo URL"
              type="text"
              variant="outlined"
              sx={{ margin: "10px" }}
            />
            <br />
            <TextField
              defaultValue={user?.displayName}
              fullWidth
              name="name"
              label="Your Name"
              type="text"
              variant="outlined"
              sx={{ margin: "10px" }}
            />
            <br />
            <TextField
              defaultValue={user?.email}
              fullWidth
              name="email"
              label="Your email"
              type="email"
              variant="outlined"
              sx={{ margin: "10px" }}
              InputProps={{
                readOnly: true,
              }}
            />
            <br />
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              sx={{ marginLeft: "10px" }}
            >
              Update
            </Button>
          </form>
        </div>
        <div className="lg:w-1/2">
          <Lottie className="h-[70vh]" animationData={update} loop={true} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateProfile;
