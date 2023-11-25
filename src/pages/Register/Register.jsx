import { Button, TextField } from "@mui/material";
import signup from "../../../src/assets/signup.json";
import Lottie from "lottie-react";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";


const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.name.value
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);
  };

  return (
    <div>
      <h1 className="text-center text-3xl my-5 font-semibold text-[#7B1FA2]">
        Register Now
      </h1>

      <div className="flex flex-row-reverse justify-center items-center">
        <div className="w-1/2  p-8">
          <form style={{ width: "70%" }} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="photo"
              label="Photo URL"
              type="text"
              variant="outlined"
              sx={{ margin: "10px" }}
            />
            <br />
            <TextField
              fullWidth
              name="name"
              label="Your Name"
              type="text"
              variant="outlined"
              sx={{ margin: "10px" }}
            />
            <br />
            <TextField
              fullWidth
              name="email"
              label="Your email"
              type="email"
              variant="outlined"
              sx={{ margin: "10px" }}
            />
            <br />
            <TextField
              fullWidth
              name="password"
              label="Your password"
              type="password"
              variant="outlined"
              sx={{ margin: "10px" }}
            />
            <br />
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              sx={{ marginLeft: "10px" }}
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
            <p className="pt-4 font-medium">Already have an account? <Link to='/login'><small className="text-[#7B1FA2]">Sing In</small></Link></p>
          </div>
        </div>
        <div className="w-1/2">
          <Lottie className="h-[70vh]" animationData={signup} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Register;