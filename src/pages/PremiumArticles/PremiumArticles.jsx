import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import PremiumCard from "./PremiumCard";


const PremiumArticles = () => {
    const axiosPublic = useAxiosPublic()
    const {data: articles=[]} = useQuery({
        queryKey: ['articles'],
        queryFn: async ()=>{
            const res = await axiosPublic.get("/articles")
            const allArticle = res.data.filter(item=> item.isPremium===true)
            return allArticle
        }
    })

    return (
        <div className="my-10">
            <h1 className="text-3xl text-center text-[#7B1FA2]">Premium Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    articles?.map(article=> <PremiumCard key={article._id} article={article} />)
                }
            </div>
        </div>
    );
};

export default PremiumArticles;