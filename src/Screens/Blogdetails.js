import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../Components/Data';
import Searchbar from '../Components/Searchbar';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const Blogdetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    const filterdata = cardData.filter((x) => x.id == id);
      filterdata.map((item)=>{
        setData(item)
      })
  }, [id]);

  

  return (
    <>
    <Flowbite>
    <main className='bg-white dark:bg-slate-800   ring-1 ring-slate-900/5 shadow-xl'>
     <div>
        <Searchbar/>
     </div>

     {/* Section-1 */}
     <section className='bg-[#152438] text-white h-[400px] max-sm:h-auto dark:bg-slate-800 '>
       <div className='grid lg:grid-cols-12  dark:text-white'>
        <div className='col-span-6 mt-20 space-y-4' >
            <div className="title lg:ml-10 lg:text-lg max-sm:text-center" data-aos="zoom-in">{data.title}</div>
            <div className="title lg:text-5xl lg:ml-10  max-sm:text-center max-sm:px-5" data-aos="zoom-in">{data.description1}</div>
            <div className="title lg:ml-10 lg:text-lg  max-sm:text-center max-sm:px-5" data-aos="zoom-in">  {data.description}</div>
        </div>
        <div className='col-span-6 flex justify-center p-10' data-aos="flip-left">
            <img className='h-80 w-[550px] max-sm:h-48 rounded'  src={data.imgSrc} alt="" />
        </div>
       </div>
     </section>
     </main>
     </Flowbite>
    </>
  );
}

export default Blogdetails;
