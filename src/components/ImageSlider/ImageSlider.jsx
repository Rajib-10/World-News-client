import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";

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
        <Slider className="w-[95%] mx-auto" {...settings}>
          {loading}

          {topViews?.map((item) => (
            <div key={item._id} className="slide">
              <img
                className="w-full mx-auto h-[80vh] object-cover "
                src={item.image}
                alt="Slide 2"
              />
              <div className="text-overlay ">
                <h2 className="text-4xl font-bold">{item.title}</h2>
                <p className="text-2xl font-bold">{item.publisher}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default ImageSlider;
