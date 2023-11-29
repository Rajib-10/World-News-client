/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const PremiumCards = ({article}) => {
    const axiosPublic = useAxiosPublic();
    const { title, image, publisher, description, _id } = article || {};
  
    const handleView = (id) => {
      axiosPublic.patch(`/articles/views/${id}`)
      
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          console.log("update views");
        }
      });
    };
    return (
        <div>
      <div className="group relative flex flex-col text-gray-700 bg-blue-50 shadow-md  rounded-xl bg-clip-border">
        
      <h1 className="text-violet-700 text-xl font-bold absolute  right-3 -top-2">
            premium
          </h1>
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-[250px] rounded-xl bg-clip-border">
        
          <img src={image} className="object-cover w-full h-full group-hover:scale-105" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {title.slice(0,20)}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {publisher}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {description.slice(0,100)}
          </p>
        </div>
        <div className="p-6 pt-0">
        <Link to={`/articleDetails/${_id}`}>
            
            <button
              onClick={()=>handleView(_id)}
              className="block bg-[#9458AE] text-white w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default PremiumCards;