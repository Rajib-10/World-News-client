// ImageSlider.js

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BallTriangle } from "react-loader-spinner";
import "./ImageSlider.css";
import { Zoom } from "react-awesome-reveal";

const ImageSlider = () => {
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const { data: topViews = [] } = useQuery({
    queryKey: ["topViews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles/top-views");
      setLoading(false);
      return res.data;
    },
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[30vh]">
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
        <Zoom>
          <Slider className="w-[95%] mx-auto" {...settings}>
          {topViews?.map((item) => (
            <div key={item._id} className="slide h-[80vh]">
              <div className="overlay"></div>
              <img className="w-full h-full object-center" src={item.image} alt="Slide" />
              <div className="text-overlay">
                <h2 className="text-4xl font-bold">
                  {item.title.slice(0, 30)}
                </h2>
                <h2 className="text-4xl font-bold">{item.title.slice(31)}</h2>
                <p className="text-2xl font-bold">{item.publisher}</p>
              </div>
            </div>
          ))}
        </Slider>
        </Zoom>
      )}
    </>
  );
};

export default ImageSlider;
