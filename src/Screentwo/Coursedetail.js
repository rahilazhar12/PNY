import React, { useState } from 'react';
import Searchbar from '../Components/Searchbar';
import Footer from '../Components/Footer';
import instructor from '../Categories/data/Instructor';
import feature from '../Categories/data/Feature';

const modulesData = [
  {
      title: 'Module 1',
      keyFeatures: [
          'The key features of the digital marketing training in Lahore are as follows:',
          'Advanced proficiency skills can help students recover their abilities.',
          'This digital marketing course helps classify digital habits.',
          'The key features of the digital marketing training in Lahore are as follows.',
          'Advanced proficiency skills can help students recover their abilities.',
          'This digital marketing course helps classify digital habits..',
          ' The key features of the digital marketing training in Lahore are as follows',
          ' Advanced proficiency skills can help students recover their abilities.',
          ' This digital marketing course helps classify digital habits.',
          // Add more key features as needed
      ],
  },
  {
      title: 'Module 2',
      keyFeatures: [
          'Key Feature A',
          'Key Feature B',
          'Key Feature C',
          // Add more key features as needed
      ],
  },
  {
      title: 'Module 3',
      keyFeatures: [
          'Key Feature X',
          'Key Feature Y',
          'Key Feature Z',
          // Add more key features as needed
      ],
  },
  {
      title: 'Module 4',
      keyFeatures: [
          'Key Feature a',
          'Key Feature b',
          'Key Feature c',
          // Add more key features as needed
      ],
  },
  {
      title: 'Module 5',
      keyFeatures: [
          'Key Feature a',
          'Key Feature b',
          'Key Feature c',
          // Add more key features as needed
      ],
  },
];
const Coursedetail = () => {
  const [activeModule, setActiveModule] = useState(0);

  const handleModuleClick = (moduleIndex) => {
      setActiveModule(moduleIndex);
  };

  const module = modulesData[activeModule];
  return (
    <>
    <div>
      <section>
        <Searchbar/>
      </section>
   <section className="text-white body-font bg-[#152438]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
     <div className='section-wrapper'>
     <p>Digital Marketing</p>
     <h1 class="text-2xl md:text-1xl lg:text-lg xl:text-5xl mb-4 font-semibold text-white my-2 leading-loose">
     Certified Digital Media Marketing (CDMM) Expert Course (06 Months)
   </h1>
   
   <p className="mb-8 leading-relaxed ">Learn the latest techniques of SEO, SMM, SMO, PPC, CPA, E-commerce, Mobile Marketing, ORM, CRO, and increase paid and organic online appearance on different platforms.</p>
   
     <div className='social-wrapper flex justify-between'>
     <div className="flex">
      <a href='#'><img src='/images/🦆 icon _task square_.svg'/></a>
      <p className='mx-2'>Courses Fee: Rs 60,000</p>
     </div>
     <div className="flex">
      <a href='#'><img src='/images/🦆 icon _bar chart_.svg'/></a>
      <p className='mx-2'>Skill Level:Advance</p>
     </div>
     </div>
     <div className='social-wrapper flex justify-between my-4'>
     <div className="flex">
      <a href='#'><img src='/images/🦆 icon _laptop_.svg'/></a>
      <p className='mx-2'>Courses Fee: Rs 60,000</p>
     </div>
     <div className="flex">
      <a href='#'><img src='/images/🦆 icon _clock_.svg'/></a>
      <p className='mx-2'>Courses Fee: Rs 60,000</p>
     </div>
    <div className="flex justify-center">
     <a href='#'><img src='/images/🦆 icon _clock_.svg' /></a>
     <p className='mx-2 my-1'>Course Date:</p>
    </div>
     </div>
     <button type="button" class="text-white hover:text-white border border-blue-700  hover:bg-[#308AFF] font-medium rounded-lg text-sm px-4 py-3 text-center mr-2 mb-2  dark:hover:text-white">Download Course Broucher</button>
     <button className="inline-flex text-white bg-[#308AFF] border-0 border-blue-700 py-3 px-4 focus:outline-none hover:bg-[#308AFF] rounded text-sm">Free Orientation Class</button>
        <button className="ml-4 inline-flex text-white bg-red-700 border-0 py-3 px-4  hover:bg-red-700 rounded text-sm my-2">Pay Now</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/5">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section>
<div>
  <div className="flex flex-col text-center w-full mb-5 mt-5">
    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-gray-900">Course Module</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-lg text-gray-900 dark:text-white">Our course modules offer a well-rounded curriculum, combining theoretical foundations with hands-on training, ensuring students acquire industry-relevant skills and knowledge for future endeavors.</p>
  </div>
</div>
<section className='p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14'>
<div className="grid grid-cols-1 md:grid-cols-4 border h-[auto] md:h-[568px] rounded-lg w-full md:w-[1120px] mx-auto shadow-lg">
    <div className='border md:w-[172px] w-full'>
        {modulesData.map((module, index) => (
            <div
                key={index}
                className={`h-[auto] md:h-[113px] flex border border-black/25 shadow-lg justify-center items-center ${activeModule === index ? 'bg-blue-500 text-white' : ''
                    }`}
                onClick={() => handleModuleClick(index)}
            >
                {module.title} <span className='ml-3'><i className="fa-solid fa-arrow-right"></i></span>
            </div>
        ))}
    </div>
    <div className='col-span-3 md:col-span-2'>
        <div className='p-5 text-sm md:text-base lg:text-lg xl:text-xl text-[#308AFF]'>{module.title}</div>
        <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-5 max-sm:mb-0 max-sm:text-center'>Key Features of this course</div>
        <ul className='list-disc space-y-2 md:space-y-4 lg:space-y-5 xl:space-y-6 max-sm:list-non max-sm:p-8'>
            {module.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
    </div>
</div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-5xl  font-bold mb-4 text-gray-900">Develop your Academic network through Diverse Environment</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We discover your personal and professional growth capitalize on opportunities through which you will get profound impact on various employment and career advancement.</p>
    </div>
  </div>
</section>







<section className="text-gray-600 body-font text-center">

  <div className="container px-5 py-2 mx-auto ml-15">
    <div className="flex flex-wrap -m-4">
   {feature.map((x)=>{
    return(
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full ">
      <a className="block relative h-30 rounded overflow-hidden">
        <img alt="ecommerce" className="mx-auto object-cover object-center w-20 block" src={x.image} />
      </a>
      <div className="">
        <h3 className="text-lg tracking-widest title-font text-[#152438]">{x.title}</h3>
      </div>
    </div>
    
    )
   }
    )}
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container  mx-auto">
    <h2 className="text-2xl font-bold text-black my-5 mt-8 mx-2">Course Instructors</h2>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-54 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/images/ceo.png" />
        </div>
        <h2 className="text-xl  font-bold text-gray-900 mt-2">Wahab Yunus</h2>
        <p className="text-base leading-relaxed mt-1 text-[#308AFF]">Founder & CEO</p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-54 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/images/director.png" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mt-2">Suleman Ikram</h2>
        <p className="text-base leading-relaxed mt-1 text-[#308AFF]">Co-Founder & Driector</p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-54 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/images/Image.png" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mt-2">Lana Steiner</h2>
        <p className="text-base leading-relaxed mt-1 text-[#308AFF]">Product Manager</p>
      </div>
    </div>
  </div>
</section>
{/* section 2nd card */}
<section className="text-gray-600 body-font">
  <div className="container px-4 py-17 mx-auto">
 
    <h2 className="text-2xl font-bold text-black my-5 mx-2">Our Success</h2>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-54 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/images/image 67.png" />
        </div>

      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-54 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/images/image 68.png " />
        </div>
    
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-54 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/images/image 69.png" />
        </div>
  
      </div>
    </div>
  </div>
</section>



<div className="container w-75 mx-auto">

<div className='container'>
<h2 class="text-2xl font-bold text-black my-4 mb-2 text-black">Digital Marketing Course in Lahore Pakistan</h2>
          <p class="text-sm md:text-base ">Digital Marketing is one of the most important fundamental prerequisites for every entrepreneur. If you are starting an online business and you have products or are selling items, at that point the only thing that you should need to do is digital marketing. PNY Trainings is the best Digital Training Institute in Lahore offering the best Digital Marketing course in Lahore, Pakistan. It provides a target-oriented and highly professional platform where you will not only get to learn about the fundamentals of this field but also gain hands-on practice on how to actually perform digital marketing tasks. Marketing strategies have been updated in each era according to what the consumers are using.</p>
<div className=''>
  <img alt="content" className=" object-center my-4 w-full" src="./images/imgbg1.jpeg" />
 
  </div>
<h2 class="text-2xl font-bold text-black mb-2 my-8">Purpose of Digital Marketing Course</h2>
<div className='list lg:flex-grow md:w-1/1 lg:pr-20 md:pr-16 flex flex-col md:items-start'>

<p>The key features of the digital marketing training in Lahore are as follows:</p>
<li> We reinforced students so they could get the best teaching and skill development they required.</li>
<li> Advanced proficiency skills can help students recover their abilities.</li>
<li>This digital marketing course helps classify digital habits</li>
<li>Learn how to modernize multifaceted platforms so that you can know them more easily.</li>
<li>You will learn from highly accomplished instructors</li>

</div>
<h2 class="text-2xl font-bold text-black my-4 mb-2 my-5">The Demand For Digital Marketing Courses in Pakistan</h2>
<p class="text-sm md:text-base">For example, if you go back in time to when people used radios to get information and promote their businesses, then with the passage of time and advancements in technology, we have seen the rise of TV for marketing that enabled businesses to target mass audiences. Now since the advent of the internet, most people have started using the internet, so companies start promoting their business through the internet.
A lot of consumers learn about companies through social media news feeds. More than 9 million businesses use social media platforms like Facebook, Twitter, Instagram, LinkedIn, etc. to connect with consumers. This is now called digital marketing.
In this way, radio advertising led to TV advertising, which then turned into digital marketing with the advancement of the internet. Every person needs to expand his or her online business so that it can reach out to more and more people. There is huge competition in digital media marketing. That’s the only reason the demand for digital marketing experts is high now.
People are searching for the right people to promote their brands. Just in case you need to begin your profession as a digital marketing expert, at that point, it is the perfect time for you. Join us because we are offering the best digital marketing course in Pakistan.
<h2 class="text-2xl font-bold text-black my-4 mb-2">Importance of Digital Marketing</h2></p>
<p class="text-sm md:text-base">
  Do you know what the most important thing for any business is? To increase its sales. To sell similar goods or products, you need to compete with numerous brands on the market. There are incredible ways that all clients on Google before purchasing any item online. That’s the only reason your online presence should be your first priority. One more thing that comes even before your online presence on Google is Google ranking which is the most important factor in marketing. In our digital marketing course in Arfa Tower. Moreover, you will learn to rank your website within a short time. To follow the growth level in the digital world it is important to take part and learn skills and knowledge to improve competencies. With the PNY Trainings, digital marketing course in Arfa Tower Lahore a person will not only understand the importance of digital marketing but also explore new horizons. The course is designed by considering the comprehensive marketing structure and needs for digital media in an organization.
</p>




</div>
<div className='container'>

<section class="text-gray-600 body-font">
  <div class="container  py-10 mx-auto">
    <div class="lg:w-1/1 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-2xl font-bold text-black">More Courses</h1>
      <button class="flex-shrink-0 text-white border-0 py-2 px-2 focus:outline-none hover:bg-[#308AFF] rounded text-sm bg-[#308AFF] mt-10 sm:mt-0">View All Courses</button>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font ">
<div className="container px-5 py-15 mx-auto">

<div className="flex flex-wrap -m-4">
  {/* Card 1 */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-4  flex-grow">
    <div className=" p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img src="/images/1 (4).png" alt="Image 1" className="h-40 object-cover rounded-xl h-40 object-cover rounded-xl mb-2" />
      <div class="flex justify-between w-50 mb-4">
      <div class="flex">
        <i class="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
        <p>Design</p>
      </div>
      <div class="flex">
        <i class="fas fa-clock text-gray-400 mt-1 mx-1"></i>
        <p>6 Months</p>
      </div>
  </div>
      <div className="w-full">
      <h2 className="title-font font-medium text-sm text-gray-900 mb-3">Certified Digital Media Marketing (CDMM) Expert
      Course (06 Months)</h2>
      <h3 className="text-red-500 mb-1.5 mt-1">Ayesha Amjad</h3>
    </div>
    </div>
  </div>
  {/* Card 2 */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
    <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img src="/images/2 (2).png" alt="Image 2" className="w-full rounded h-46 object-cover mb-4" />
      <div class="flex justify-between w-50 mb-4">
      <div class="flex">
      <i className="fa-solid fa-desktop mr-1 mt-1 text-blue-500"></i>
        <p className="text-blue-500">Development</p>
      </div>
      <div class="flex">
        <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
        <p >6 Months</p>
      </div>
  </div>
      <div className="w-full">
        <h2 className="title-font font-medium text-sm mb-4 text-gray-900">Become a Certified Web Designer & Developer
        </h2>
  
        <h3 className="text-red-500  mb-2 mt-7">Asim Manzoor</h3>
       
        
      </div>
    </div>
  </div>
  {/* Card 3 */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow">
    <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img src="/images/3 (2).png" alt="Image 3" className="w-full rounded h-46 object-cover mb-4" />
     <div class="flex justify-between w-50 mb-4">
          <div class="flex">
          <i class="fa-solid fa-rectangle-ad mx-1 mt-1 text-blue-500"></i>
            <p className="text-blue-500">Marketing</p>
          </div>
          <div class="flex">
            <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
            <p >6 Months</p>
          </div>
    </div>
          <div className="w-full">
            <h2 className="title-font font-medium text-sm text-gray-900">Become a Certified Full Stack Web Developer</h2>
            <h3 className="text-red-500 mb-2 mt-7">Faisal Javeed</h3>
            
          </div>
    </div>
  </div>
  {/* Card 4 */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex-grow ">
    <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
      <img src="/images/1 (3).png" alt="Image 4" className="w-full rounded h-46 object-cover mb-4" />
      <div class="flex justify-between w-50 mb-4">
      <div class="flex">
        <i class="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
        <p text-blue-500>Design</p>
      </div>
      <div class="flex">
        <i class="fas fa-clock text-gray-300 mt-1 mx-1"></i>
        <p >6 Months</p>
      </div>
  </div>
      <div className="w-full">
      <h2 className="title-font font-medium text-sm text-gray-900 mb-3">Certified Digital Media
      Marketing (CDMM) Expert
      Course (06 Months)
      </h2>
      <h3 className="text-red-500  mb-1 mt-0.5">Aqsa Razzaq</h3>
    </div>
    </div>
    
  </div>
  </div>
</div>
</section>


</div> 


</div>
    </div>
   
    </>

  )
}

export default Coursedetail