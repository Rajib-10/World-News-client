import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure"
import AllArticleCard from "./AllArticleCard";

const AllArticle = () => {
    const axiosSecure = useAxiosSecure()

    const {data: articles=[],refetch} = useQuery({
        queryKey: ['articles'],
        queryFn: async ()=>{
            const res = await axiosSecure.get("/articles")
            return res.data
        }
    })

    return (
        <div>
            <h1 className="mb-10 text-center text-3xl font-semibold text-[#7B1FA2]">Total Articles-{articles.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    articles?.map(article=> <AllArticleCard key={article._id} article={article} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default AllArticle;