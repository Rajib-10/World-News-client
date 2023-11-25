import { Button, TextField } from "@mui/material";
import signup from "../../../src/assets/signup.json";
import Lottie from "lottie-react";
import { Link,  useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import useAxiosPublic from "../../Hook/useAxiosPublic";



const Register = () => {

  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
  

  const {createUser,updateUserProfile,userLogOut} = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const photo = form.photo.value
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      return toast.error("Invalid Email.")
  }
  if(password.length <6){
      return toast.error("password is less than 6 characters")
  }
  if(!/[A-Z]/.test(password)){
      return toast.error("password  don't have a capital letter")
  }
  if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
      return toast.error("password  don't have a special character")
  }
  
  createUser(email,password)
  .then(()=>{
    
      updateUserProfile(name,photo)
      .then(()=>{
        const userInfo = {name,email  }
      axiosPublic.post('/users',userInfo)
      .then(res=>{
          console.log(res.data)
          toast.success("User logged in Successfully.");
          userLogOut()
          navigate('/login')
          
      })
          
         
      })
      
  })
 .catch(error=>{
  toast.error(`${error.message}`) 
  console.log(error.message)
 })
}

 

  

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
           <SocialLogin />
            <p className="pt-4 font-medium">Already have an account? <Link to='/login'><small className="text-[#7B1FA2]">Sing In</small></Link></p>
          </div>
        </div>
        <div className="w-1/2">
          <Lottie className="h-[70vh]" animationData={signup} loop={true} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
