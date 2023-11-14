import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxHeight: '80vh', // Set a maximum height for the modal content
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto', // Enables vertical scrolling if content overflows
};

const TransitionsModal = ({ open, handleClose, flyerData }) => {
    
   
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {flyerData && flyerData.map((course, index) => (
                           <div key={index} className="overflow-x-auto relative">
                           <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                   <tr>
                                       <th scope="col" className="py-3 px-6">
                                           {index + 1}
                                       </th>
                                       {/* Add more table headers here if needed */}
                                   </tr>
                               </thead>
                               <tbody>
                                   {/* Iterate through your data and create table rows */}
                                   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                       <td className="py-4 px-6">
                                       <a href={course.brochure}>  <span className=' text-lg hover:text-red-300'><span className='mr-5'></span>{course.class_name}</span></a>
                                       </td>
                                       {/* Add more table data cells here if needed */}
                                   </tr>
                                   {/* Repeat for more rows as needed */}
                               </tbody>
                           </table>
                       </div>
                       
                        ))}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default TransitionsModal;
