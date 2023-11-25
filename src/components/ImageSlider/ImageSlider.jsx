
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; // Create this file for styling

const ImageSlider = () => {
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
      <div>
        <img  className='w-full h-[70vh] object-cover' src="https://i.ibb.co/nn6jtgQ/painting.jpg" alt="Slide 1" />
        <div className="text-overlay">
          <h2>Slide 1 Title</h2>
          <p>Slide 1 Description</p>
        </div>
      </div>
      <div className="slide">
        <img  className='w-full mx-auto h-[70vh] object-cover' src="https://i.ibb.co/YWWnRV1/organization.jpg" alt="Slide 2" />
        <div className="text-overlay">
          <h2>Slide 2 Title</h2>
          <p>Slide 2 Description</p>
        </div>
      </div>
      <div className="slide">
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
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;
