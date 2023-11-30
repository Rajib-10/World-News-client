import { useEffect, useState } from "react";
import AllPublisher from "../../components/Home/AllPublisher/AllPublisher";
import Contact from "../../components/Home/Contact/Contact";
import CountingAllUsers from "../../components/Home/CountingAllUsers/CountingAllUsers";
import MapComponent from "../../components/Home/MapComponent/MapComponent";
import Plans from "../../components/Home/Plans/Plans";
import Reviews from "../../components/Home/Reviews/Reviews";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import useAuth from "../../Hook/useAuth"
import { Link } from "react-router-dom";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  


const Home = () => {

    const {user} = useAuth()

      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      useEffect(() => {
    
        const timerId = setTimeout(() => {
          handleOpen();
        }, 10000);
    
        return () => clearTimeout(timerId);
    
        // setTimeout(() => {
        //   handleOpen();
      
        //   // Close the modal after another 10 seconds
        //   setTimeout(() => {
        //     handleClose();
        //   }, 10000);
        // }, 10000);
    
    
      }, []);


    return (
        <div>
            <ImageSlider />
            <AllPublisher />
            <CountingAllUsers />
            <Plans />
            <Reviews />
            <Contact />
            
            <MapComponent  />

            
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box
         sx={style}>
        <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: 'absolute',
              top: '10px',
              right: '30px',
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className="text-2xl font-bold text-[#7B1FA2]">Hey Dear {user?.displayName}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Hurry! Limited-time offer. Subscribe now for exclusive benefits.
          </Typography>
          <Link to='/Subscription'>
          <Button onClick={handleClose} variant='contained' color='secondary'>Subscription</Button>
          </Link>
          
        </Box>
      </Modal>
      
           
        </div>
    );
};

export default Home;