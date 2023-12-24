import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import AllCard from "./AllCard";
import PremiumCards from "./PremiumCards";
import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import Marquee from "react-fast-marquee";
import { Slide } from "react-awesome-reveal";



const AllArticles = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const axiosPublic = useAxiosPublic();
  
  const { data: articles = [], refetch } = useQuery({
    queryKey: ["articles", loading],
    queryFn: async () => {
      const res = await axiosPublic.get(`/articles?search=${search}`);

      
      setLoading(false);
     
      return res.data;
    },
  });

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className="my-10">

<div className="marquee-container hidden md:block">
  <Marquee speed="120">
    <p className="marquee-item mx-4">
      🚨 <span className="text-xl font-medium text-red-500">Breaking News:</span> Scientists Make Groundbreaking Discovery in Space Exploration!
    </p>
    <p className="marquee-item mx-4">
      🏀 <span className="text-green-500 text-xl font-medium">Sports Update:</span> Exciting Match Results. Thrilling Overtime Victory!
    </p>
    <p className="marquee-item mx-4">
      🌍 <span className="text-blue-500 text-xl font-medium">World Affairs:</span> Leaders Gather for Summit to Address Global Climate Crisis.
    </p>
    <p className="marquee-item mx-4">
      🎬 <span className="text-purple-500 text-xl font-medium">Entertainment Buzz:</span> Highly Anticipated Movie Release Breaks Box Office Records!
    </p>
  </Marquee>
</div>



      <div className="flex justify-between my-6 flex-col md:flex-row">
        <Slide direction="left">
        <h1 className="text-3xl text-center text-[#7B1FA2] px-10">
          All Articles
        </h1>
        </Slide>

        <Slide direction="right">
        <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            required
          />
          <button
            onClick={handleSearch}
            className="!absolute right-1 top-1 z-10 select-none rounded bg-[#7B1FA2] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Search
          </button>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Search by title
          </label>
        </div>
        </Slide>
      </div>
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
          {articles?.map((article) =>
            article.status === "approved" && article.isPremium === true ? (
              <PremiumCards key={article._id} article={article} />
            ) : (
              article.status === "approved" &&
              article.isPremium !== true && (
                <AllCard key={article._id} article={article} />
              )
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AllArticles;
