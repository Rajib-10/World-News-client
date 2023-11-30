/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import useAdmin from "../../Hook/useAdmin";
import { BallTriangle } from "react-loader-spinner";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    const[isAdmin,isAdminLoading] = useAdmin()
    
    const location = useLocation()
    if(loading || isAdminLoading){
        return  <div className="flex justify-center items-center h-screen">
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
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{from: location}} replace ></Navigate>
};

export default AdminRoute;