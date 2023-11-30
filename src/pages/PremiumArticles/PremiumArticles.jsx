import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import PremiumCard from "./PremiumCard";
import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";

const PremiumArticles = () => {
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const { data: articles = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      const allArticle = res.data.filter((item) => item.isPremium === true);
      setLoading(false);
      return allArticle;
    },
  });

  return (
    <div className="my-10">
      <h1 className="text-3xl text-center text-[#7B1FA2]">Premium Articles</h1>
      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles?.map((article) => (
            <PremiumCard key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PremiumArticles;
