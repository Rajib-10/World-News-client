import { Button, TextField } from "@mui/material";
import login from "../../../src/assets/login.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../../components/socialLogin/SocialLogin";
const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {signInUser} = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("User logged in Successfully.");
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        console.log(error.message);
      });
  };

 

  return (
    <div>
      <h1 className="text-center text-3xl my-5 font-semibold text-[#7B1FA2]">
        Login Now
      </h1>

      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="md:w-1/2   p-8">
          <form className="w-[90%] lg:w-[70%]" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="email"
              label="Your email"
              type="email"
              variant="outlined"
              sx={{ margin: "20px" }}
            />
            <br />
            <TextField
              fullWidth
              name="password"
              label="Your password"
              type="password"
              variant="outlined"
              sx={{ margin: "0 20px 20px" }}
            />
            <br />
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              sx={{ marginLeft: "20px" }}
            >
              Submit
            </Button>
          </form>
          <hr className="my-5" />

          <div className="px-4">
            <SocialLogin />
            <p className="pt-4 font-medium">Do not have an account? <Link to='/register'><small className="text-[#7B1FA2]">Sing Up</small></Link></p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Lottie className="h-[70vh]" animationData={login} loop={true} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
