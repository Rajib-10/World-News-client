/* eslint-disable react/prop-types */


import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hook/useAuth"
import { BallTriangle } from "react-loader-spinner";



const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#7B1FA2"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivateRouter;