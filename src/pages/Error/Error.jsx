import { Button } from '@mui/material';
import errorGif from '../../../src/assets/404.gif'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <>
            
            <div className='flex justify-center items-center my-10'>
            <img className='max-h-[500px]' src={errorGif} alt="" />
            </div>
           <div className='text-center'>
           <Link to='/'>
            <Button  variant='contained' color='secondary' >Back Home</Button>
            </Link>
            
           </div>
        </>
    );
};

export default Error;