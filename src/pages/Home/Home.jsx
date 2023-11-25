import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            this is home page.
            <Link to='/login'>
            <Button variant="contained">hello</Button>
            </Link>
        </div>
    );
};

export default Home;