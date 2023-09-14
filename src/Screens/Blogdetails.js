import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../Components/Data';
import Searchbar from '../Components/Searchbar';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import fiver from '../Assets/image/fiver.png'

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
            <div className='space-y-3 p-10 max-sm:p-3'>
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
              <img className='w-full' src={fiver} alt="" />
            </div>
          </section>
          <section className='lg:px-10 max-sm:p-3 py-10 lg:ml-20'>
            <div className='ml-3 lg:text-[30px] font-bold'>How Fiverr Affiliate Works</div>
            <div className='border-l border-blue-500'>

              <div className='ml-3'>
                <p className='lg:w-[1258px] lg:text-[30px]'>“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</p>
              </div>
              <div className='ml-3'>— Qasim Rizvi, Product Designer</div>
            </div>

          </section>

          <section className='bd lg:p-10 max-sm:p-5 text-justify space-y-5 '>
            <div>There are the following steps through which you get to know how much Fiverr affiliates pay to an individual: it includes;</div>
            <ul className='list-disc'>
              <li>Account Creation</li>
            </ul>

            <div>The first step is to register for any program you want to earn money through. In the Fiverr affiliation program, you have to create an affiliate account so that Fiverr can identify that you are not a fake or robot but a human by providing your correct information to Fiverr.
              High profiles to market:
              To get to know how much Fiverr affiliates pay, you need to target those freelancer profiles whose rating is higher and consider them top-rated sellers on Fiverr. This will help you generate more revenue.</div>

            <ul className='list-disc'><li> High profiles to market</li></ul>
            <div>When you create an account and select the high-rated profiles, now it’s time to choose the social platforms through which you can get the audience for your affiliate marketing, and you will get payments through Fiverr.
              Facebook, Instagram, and YouTube are the best platforms for affiliate marketing, so utilize these platforms wisely and get the best revenue through them.</div>


            <ul className='list-disc'><li> Social marketing</li></ul>
            <div>Fiverr gives you the facility to generate the affiliate link to post on different sites to get the target audience for that. The more authentic links you have, the better you can get to know how much Fiverr affiliates pay for those links.
              Commission-based payments:
              As Fiverr is the biggest platform all over the world and provides facilities to its users, they are providing payments on a commission basis, in which the following categories are involved;</div>

            <ul className='list-disc'><li> Affiliate link</li></ul>
            <div>This kind of affiliate payment depends on the link that you have generated to promote. The link should be easy so that users can click and it will be a conversion for you, but this type of conversion is low.</div>

            <ul className='list-disc'><li>Commission-based payments</li></ul>
            <div>Through this, you can get a commission every time a sale is generated. That means from your created link, if the user places an order with that relevant seller, you will get a high commission on it.</div>

            <ul className='list-disc'><li>Cost per click</li></ul>
            <div>This type of commission is based on the user's ability to sign up on Fiverr, refer a website to a friend, or complete a survey—anything the affiliates get the commission on.
              CPC and CPS are the most demanding methods for generating revenue through them.</div>
          </section>
        </main>
      </Flowbite>
    </>
  );
}

export default Blogdetails;
