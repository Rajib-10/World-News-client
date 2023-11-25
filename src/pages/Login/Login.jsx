import { Button, TextField } from "@mui/material";
import login from "../../../src/assets/login.json";
import Lottie from "lottie-react";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log( email, password);
  };

  return (
    <div>
      <h1 className="text-center text-3xl my-5 font-semibold text-[#7B1FA2]">
        Login Now
      </h1>

      <div className="flex justify-center items-center">
        <div className="w-1/2  border-2 p-8">
          <form style={{ width: "70%" }} onSubmit={handleSubmit}>
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
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<GoogleIcon />}
            >
              Google Login
            </Button>
            <p className="pt-4 font-medium">Do not have an account? <Link to='/register'><small className="text-[#7B1FA2]">Sing Up</small></Link></p>
          </div>
        </div>
        <div className="w-1/2">
          <Lottie className="h-[70vh]" animationData={login} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
