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
    filterdata.map((item) => {
      setData(item)
    })
  }, [id]);



  return (
    <>
      <Flowbite>
        <main className='bg-white dark:bg-slate-800   ring-1 ring-slate-900/5 shadow-xl'>
          <div>
            <Searchbar />
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
                <img className='h-80 w-[550px] max-sm:h-48 rounded' src={data.imgSrc} alt="" />
              </div>
            </div>
          </section>
          <section>
            <div className='space-y-3 p-10'>
              <div>
                Fiverr has become the biggest platform all around the world in terms of providing the facilities that people register for through it. One of the biggest advantages that freelancers get from selling their skills on this website is earning a handsome amount of revenue.
              </div>
              <div>
                But according to Fiverr, since people are more eager to earn money, it has provided an earning facility to its audience, which is called the Fiverr Affiliate program.
              </div>
              <div>
                Now the question is, "How much do Fiverr affiliates pay? It depends on how many tasks you will fulfill to get the right payment in your account.
              </div>
              <div>
                Let’s discuss how Fiverr affiliates work to provide payments to users who register for an affiliate program.
              </div>
            </div>
            <div>
              <img src="https://techcrunch.com/wp-content/uploads/2021/12/fiverr-header.jpeg" alt="" />
            </div>
          </section>
          <section className='p-10'>
            <div className='border-l border-black'>
              <div className='ml-3'>How Fiverr Affiliate Works</div>
              <div className='ml-3'>“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</div>
              <div className='ml-3'>— Qasim Rizvi, Product Designer</div>
            </div>
          
          </section>
        </main>
      </Flowbite>
    </>
  );
}

export default Blogdetails;
