import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../pages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;