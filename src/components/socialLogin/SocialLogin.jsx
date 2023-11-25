import GoogleIcon from "@mui/icons-material/Google";
import {  useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@mui/material";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const SocialLogin = () => {

  const axiosPublic = useAxiosPublic()

    const navigate = useNavigate();
  const location = useLocation();

  const {googleLogin} = useAuth()

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(res=>{
          const userInfo = {
            name: res.user?.displayName,
            email: res.user?.email,
            photo: res.user?.photoURL
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
            console.log(res.data)
            toast.success("User logged in Successfully.");
            navigate(location?.state ? location.state : "/");
        })
          
          console.log(res.user)
        })
        .catch(error=>{
          toast.error(`${error.message}`);
          console.log(error.message)
        })
      }

    return (
        <div>
            <Button
              onClick={handleGoogleLogin}
              variant="outlined"
              color="secondary"
              startIcon={<GoogleIcon />}
            >
              Google Login
            </Button>
            <Toaster />
        </div>
    );
};

export default SocialLogin;