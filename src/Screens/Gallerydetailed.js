import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GalleryData } from '../Components/Data';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding : "2px",
    width :"950px"
  },
  overlay: { // Added overlay styling to make the modal fullscreen
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
};

Modal.setAppElement('#root');

const GalleryDetailed = () => {

  const [data, setData] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  
  const openModal = (imageSrc) => {
    setIsOpen(true);
    setSelectedImage(imageSrc);
  }

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  }

  const { id } = useParams();

  useEffect(() => {
    const filterdata = GalleryData.find((x) => x.id == id);
    setData(filterdata);
  }, [id]);

  return (
    <>
      <div className='grid grid-cols-3 p-3 gap-2'>
        {
          data?.images.map((image, index) => (
            <img 
              className='cursor-pointer border-[5px] shadow-lg border-gray-200' 
              key={index} 
              src={image} 
              alt="" 
              onClick={() => openModal(image)} // onClick handler to open modal with the image src
            />
          ))
        }
      </div>
      {
        modalIsOpen && // Conditional rendering of Modal
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal} // Function to close modal
          style={customStyles}
          contentLabel="Image Modal"
        >
          <img 
            src={selectedImage} 
            alt="Selected" 
            onClick={closeModal} // onClick handler to close modal when image is clicked
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }} // Style to make image responsive
          />
        </Modal>
      }
    </>
  );
}

export default GalleryDetailed;
