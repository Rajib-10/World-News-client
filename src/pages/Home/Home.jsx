
import AllPublisher from "../../components/Home/AllPublisher/AllPublisher";
import Contact from "../../components/Home/Contact/Contact";
import CountingAllUsers from "../../components/Home/CountingAllUsers/CountingAllUsers";
import MapComponent from "../../components/Home/MapComponent/MapComponent";
import Plans from "../../components/Home/Plans/Plans";
import Reviews from "../../components/Home/Reviews/Reviews";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import NewsVideos from "../../components/Home/NewsVideos/NewsVideos";
import SocialIcons from "../../components/Home/SocialIcons/SocialIcons";
import SubscriptionModal from "../../components/Home/SubscriptionModal/SubscriptionModal";




const Home = () => {


  return (
    <div>
      <ImageSlider />
      <AllPublisher />
      <CountingAllUsers />
      <NewsVideos />
      
      <Plans />
      
      <Reviews />
      <Contact />
      <MapComponent />
     <SocialIcons />
      <SubscriptionModal />
      


      
    </div>
  );
};

export default Home;
