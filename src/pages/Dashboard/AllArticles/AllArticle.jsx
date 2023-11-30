import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure"
import AllArticleCard from "./AllArticleCard";
import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";

const AllArticle = () => {
    const axiosSecure = useAxiosSecure()
    const [loading,setLoading] = useState(true)

    const {data: articles=[],refetch} = useQuery({
        queryKey: ['articles'],
        queryFn: async ()=>{
            const res = await axiosSecure.get("/articles")
            setLoading(false)
            return res.data
        }
    })

    return (
        <div>
            <h1 className="mb-10 text-center text-3xl font-semibold text-[#7B1FA2]">Total Articles-{articles.length}</h1>

        { 
            loading ? 

            <div className="flex justify-center items-center h-[50vh]">
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

            :

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {
                articles?.map(article=> <AllArticleCard key={article._id} article={article} refetch={refetch} />)
            }
        </div>

        }
            
           
        </div>
    );
};

export default AllArticle;