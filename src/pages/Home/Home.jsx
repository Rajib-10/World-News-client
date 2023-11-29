import AllPublisher from "../../components/Home/AllPublisher/AllPublisher";
import Contact from "../../components/Home/Contact/Contact";
import CountingAllUsers from "../../components/Home/CountingAllUsers/CountingAllUsers";
import MapComponent from "../../components/Home/MapComponent/MapComponent";
import Plans from "../../components/Home/Plans/Plans";
import Reviews from "../../components/Home/Reviews/Reviews";
import ImageSlider from "../../components/ImageSlider/ImageSlider";




const Home = () => {
    return (
        <div>
            <ImageSlider />
            <AllPublisher />
            <CountingAllUsers />
            <Plans />
            <Reviews />
            <Contact />
            
            <MapComponent  />
           
        </div>
    );
};

export default Home;