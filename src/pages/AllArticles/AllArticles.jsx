import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import AllCard from "./AllCard";


const AllArticles = () => {
    const axiosPublic = useAxiosPublic()
    const {data: articles=[]} = useQuery({
        queryKey: ['articles'],
        queryFn: async ()=>{
            const res = await axiosPublic.get("/articles")
            const allArticle = res.data.filter(item=> item.status==='approved')
            return allArticle
        }
    })

    return (
        <div className="my-10">
            <h1 className="text-3xl text-center text-[#7B1FA2]">All Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    articles?.map(article=> <AllCard key={article._id} article={article} />)
                }
            </div>
        </div>
    );
};

export default AllArticles;