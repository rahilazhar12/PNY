import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GalleryData } from '../Components/Data';
import Modal from 'react-modal';
import Searcbar from '../Components/Searchbar'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: "2px",
    width: "950px"
  },
  overlay: { // Added overlay styling to make the modal fullscreen
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
};

// Modal.setAppElement('#root');

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
      <section>
        <Searcbar />
      </section>
      <section>
        <div className=' bg-[#152438] text-white h-[306px] flex flex-col justify-center items-center'>
          <div className=' text-[48px] font-semibold'>Gallery</div>
          <div className=' text-[20px] font-normal'>Check Our memorial Moments</div>
        </div>
      </section>
      <div className='grid grid-cols-3 p-3 gap-2'>
        {
          data?.images.map((image, index) => (
            <div
              class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-2 border border-[#308AFF]">
              <a href="#!">
                <img
                  className='cursor-pointer border-2  shadow-lg'
                  key={index}
                  src={image}
                  alt=""
                  onClick={() => openModal(image)} // onClick handler to open modal with the image src
                />
              </a>
            </div>
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
