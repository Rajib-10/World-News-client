
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; 
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hook/useAxiosPublic';

const ImageSlider = () => {

  const axiosPublic = useAxiosPublic();
const { data: topViews = [] } = useQuery({
  queryKey: ["topViews"],
  queryFn: async () => {
    
      const res = await axiosPublic.get("/articles/top-views");
      return  res.data
      
    
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
    <Slider className='w-[95%] mx-auto' {...settings}>
      {/* <div>
        <img  className='w-full h-[70vh] object-cover' src="https://i.ibb.co/nn6jtgQ/painting.jpg" alt="Slide 1" />
        <div className="text-overlay">
          <h2>Slide 1 Title</h2>
          <p>Slide 1 Description</p>
        </div>
      </div> */}
      {
        topViews?.map(item=><div key={item._id} className="slide">
        <img  className='w-full mx-auto h-[80vh] object-cover ' src={item.image} alt="Slide 2" />
        <div className="text-overlay ">
          <h2 className='text-4xl font-bold'>{item.title}</h2>
          <p className='text-2xl font-bold'>{item.publisher}</p>
        </div>
      </div>)
      }
      {/* <div className="slide">
        <img  className='w-full mx-auto h-[70vh] object-cover' src="https://i.ibb.co/YWWnRV1/organization.jpg" alt="Slide 2" />
        <div className="text-overlay">
          <h2>Slide 2 Title</h2>
          <p>Slide 2 Description</p>
        </div>
      </div>
      <div className="slide">
        <img  className='w-full mx-auto h-[70vh] object-cover' src="https://i.ibb.co/5Fk2rsd/roofting.jpg" alt="Slide 2" />
        <div className="text-overlay">
          <h2>Slide 2 Title</h2>
          <p>Slide 2 Description</p>
        </div>
      </div>
      <div className="slide">
        <img className='w-full mx-auto h-[70vh] object-cover' src="https://i.ibb.co/82Fc0Dw/window.jpg" alt="Slide 2" />
        <div className="text-overlay">
          <h2>Slide 2 Title</h2>
          <p>Slide 2 Description</p>
        </div>
      </div>
      <div className="slide">
        <img  className='w-full mx-auto h-[70vh] object-cover' src="https://i.ibb.co/5Fk2rsd/roofting.jpg" alt="Slide 2" />
        <div className="text-overlay">
          <h2>Slide 2 Title</h2>
          <p>Slide 2 Description</p>
        </div>
      </div> */}
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;
