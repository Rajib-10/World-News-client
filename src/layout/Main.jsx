import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../pages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;