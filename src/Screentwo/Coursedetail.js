import React, { useState, useEffect } from 'react';
import Searchbar from '../Components/Searchbar';
import Footer from '../Components/Footer';
import instructor from '../Categories/data/Instructor';
import feature from '../Categories/data/Feature';
import Modal from './Modal';
import Modalb from './Modalb';
import { useParams } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner'

import parse, { domToReact } from 'html-react-parser';



var modulesData = [
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
  const handleModuleClick = (moduleIndex) => {
    setActiveModule(moduleIndex);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenb, setModalOpenb] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [courseData, setCourseData] = useState(null);


  const { slug1 } = useParams();

  console.log(slug1, ' slug1')




  const apiEndpoints = [
    "  https://www.pnytrainings.com/api/course/freelancing-online-training",
    "https://www.pnytrainings.com/api/course/best-seo-training-institute-in-lahore",
    "https://www.pnytrainings.com/api/course/youtube-trainings-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/freelancing-tranings-course-in-lahore-at-arfa-tower",
    "https://www.pnytrainings.com/api/course/facebook-and-instagram-marketing-expert-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/creative-content-writing-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/instagram-marketing-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/digital-media-marketing-course-in-rawalpindi",
    "https://www.pnytrainings.com/api/course/advanced-search-engine-optimization",
    "https://www.pnytrainings.com/api/course/seo-course-in-rawalpindi",
    "https://www.pnytrainings.com/api/course/advance-digital-marketing-with-artificial-intelligence-and-project-management-course-in-lahore",
    "https://www.pnytrainings.com/api/course/advanced-social-media-marketing-2.0-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/tiktok-marketing-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/digital-marketing-and-artificial-intelligence-course-for-technical-analysis-course",

    // Art and design 
    "https://www.pnytrainings.com/api/course/graphic-designing-training-course",
    "https://www.pnytrainings.com/api/course/graphic-design-courses-in-lahore",
    "https://www.pnytrainings.com/api/course/motion-graphics-with-after-effects--cinema-4d-course-in-lahore",
    "https://www.pnytrainings.com/api/course/layout-design-prototype-to-web-design---2-months-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/advanced-photoshop-level-2-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/advanced-illustrator-level-2-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/revit-and-twin-motion-for-3d-architectural-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/figma-to-cinema-4d-advanced-ui-ux-design-and-animation-course-in-lahore",
    "https://www.pnytrainings.com/api/course/canva-training-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/office-management-course-training-in-lahore",

    // Business and Account trainnings
    "https://www.pnytrainings.com/api/course/office-management-course-training-in-lahore",
    "https://www.pnytrainings.com/api/course/quickbooks-training",
    "https://www.pnytrainings.com/api/course/sap-training-courses-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/analyzing-and-visualizing-data-with-microsoft-power-bi",
    "https://www.pnytrainings.com/api/course/make-money-with-digital-currency-and-forex-trading-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/young-entrepreneurship-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/business-and-project-management-course-in-lahore-pakistan",

    // Multimedia
    "https://www.pnytrainings.com/api/course/full-stack-interior-and-exterior-designer-course-in-lahore-pakistan",
    "http://pnytrainings.com/api/course/photography-course",
    "https://www.pnytrainings.com/api/course/interior-designing-in-lahore",
    "https://www.pnytrainings.com/api/course/3d-animation-designing-course",
    "https://www.pnytrainings.com/api/course/adobe-premiere-adobe-effects",
    "https://www.pnytrainings.com/api/course/learn-video-production-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/autocad-training-course",
    "https://www.pnytrainings.com/api/course/2d-3d-animation-course-in-lahore",
    "https://www.pnytrainings.com/api/course/master-in-exterior-designing-training-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/3ds-max-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/architectural-animation-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/architectural-animation-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/3d-modeling-with-rhinoceros-basic-to-advance-course",

    // Amazon
    "https://www.pnytrainings.com/api/course/sell-on-amazon-training-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/amazon-private-label-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/amazon-drop-shipping-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/amazon-fba-wholesale-course-in-lahore-pakistan",
    "https://pnytrainings.com/api/course/amazon-virtual-assistant-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/aws-solution-architect-training-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/amazon-virtual-assistant-2.0-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/private-label-and-wholesale-business-on-amazon-course-in-lahore-pakistan",

    // Cybersecurity
    "https://www.pnytrainings.com/api/course/ceh-ethical-hacking-course-in-lahore",
    "https://www.pnytrainings.com/api/course/cisco-ccna-training-in-lahore",
    "https://www.pnytrainings.com/api/course/professional-diploma-in-advanced-cyber-security-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/professional-diploma-in-advance-networking-ccna-and-ccnp-course-in-lahore",
    "https://www.pnytrainings.com/api/course/cisco-certified-network-professional-ccnp-course-in-lahore",

    // Ecommerce
    "https://www.pnytrainings.com/api/course/ecommerce-trainings-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/ebay-and-walmart-training-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/shopify-2.0-drop-shipping-and-local-branding-course-in-lahore",

    // it&software
    "https://www.pnytrainings.com/api/course/become-a-quality-assurance-expert",
    "https://www.pnytrainings.com/api/course/full-stack-software-quality-assurance-course",

    // Language
    "https://www.pnytrainings.com/api/course/spoken-english-pny-trainings",
    "https://www.pnytrainings.com/api/course/ielts-preparation",
    "https://www.pnytrainings.com/api/course/pearson-test-of-english-course-in-lahore-pakistan",

    // Pny pink
    "https://www.pnytrainings.com/api/course/beautician-training-course-institute-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/hair-cut-pro-course-training-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/hair-cutting-for-beginners-course-in-lahore",
    "https://www.pnytrainings.com/api/course/make-up-artist-coures-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/skincare-specialist-course-in-lahore",

    // pnygenius
    "https://www.pnytrainings.com/api/course/robotics-for-everyone-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/summer-camps-for-kids-in-lahore",
    "https://www.pnytrainings.com/api/course/summer-camp-activities-for-kids-in-lahore",
    "https://www.pnytrainings.com/api/course/web-and-graphics-online-course-for-children-in-pakistan",


    // Bootcamp
    "https://www.pnytrainings.com/api/course/boot-camp-advance-ui-ux-figma",
    "https://www.pnytrainings.com/api/course/digital-painting-course-in-lahore-pakistan",
    "https://www.pnytrainings.com/api/course/boot-camp-visual-merchandizing",


    // Add more API endpoints here
  ];
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const apiDataArray = [];
      console.log("Fetching Data for Slug:", slug1); // Debugging Line
      for (const endpoint of apiEndpoints) {
        try {
          const response = await fetch(endpoint);
          if (response.ok) {
            const data = await response.json();
            console.log("API Response:", data); // Debugging Line
            console.log("API des:", data.course.description); // Debugging Line
            if (data.course.url_slug === slug1) {
              apiDataArray.push({ course: data.course });
              console.log("Match Found:", apiDataArray); // Debugging Line
            } else {
              console.log("Slug did not match"); // Debugging Line
            }
          } else {
            console.error(`Failed to fetch data from ${endpoint}`);
          }
        } catch (error) {
          console.error(`Error fetching data from ${endpoint}:`, error);
        }
      }
      if (apiDataArray.length > 0) {
        const { course } = apiDataArray[0];
        setCourseData(course);
        setIsLoading(false);
        console.log("Course Data:", course); // Debugging Line
      } else {
        console.log("No Data Found"); // Debugging Line
      }

    };

    fetchData();
  }, [slug1]);



  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </div>
    );
  }

  const parsedDescription = parse(courseData.description, {
    replace: domNode => {
      if (domNode.type === 'tag') {
        // For example, add a class to all <p> elements
        if (domNode.name === 'p') {
          const props = { className: 'p-5' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'h3') {
          const props = { className: 'p-5 text-lg' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'ul') {
          const props = { className: 'p-5' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'h2') {
          const props = { className: 'p-5' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        // if (domNode.name === 'a') {
        //   const props = { className: 'bg-[#0c7ec2] text-white hover:bg-red-500 p-3 w-80 cursor-pointer rounded mx-auto'};
        //   return <p {...props}>{domToReact(domNode.children)}</p>;
        // }
      }
    }
  });



  const module = modulesData[activeModule];
  return (
    <>
      <div>
        <section>
          <Searchbar />
        </section>
        <section className="text-white body-font bg-[#152438]">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className='section-wrapper'>



                <h1 className="mb-4 font-semibold text-white my-2 leading-loose text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  {courseData ? courseData.name : null}
                </h1>


                <p className="mb-8 leading-relaxed ">{courseData ? courseData.description_short : null}</p>

                <div className='social-wrapper flex justify-between'>
                  <div className="flex">
                    <a href='#'><img src="/images/🦆 icon _task square_.png " alt='' /></a>
                    <p className='mx-2'>Courses Fee: Rs {courseData.monthly_tution_fee}</p>
                  </div>
                  <div className="flex">
                    <a href='#'><img src="/images/🦆 icon _bar chart_.png " /></a>
                    <p className='mx-2'>Skill Level:{courseData.skill_level}</p>
                  </div>
                </div>
                <div className='social-wrapper flex justify-between my-4'>
                  <div className="flex">
                    <a href='#'><img src="/images/🦆 icon _laptop_.png " /></a>
                    <p className='mx-2'>Online/On Campus</p>
                  </div>
                  <div className="flex">
                    <a href='#'><img src="/images/🦆 icon _clock_.png" /></a>
                    <p className='mx-2'>Duration: {courseData.duration} Months </p>
                  </div>

                </div>

                <div className='social-wrapper flex justify-between my-4'>
                  <div className='flex'><a href='#'> <i class="fa-solid fa-calendar-days text-2xl mx-1"></i></a>
                    <p className='mx-2 my-1'>Schedule Dates</p></div>
                  <div className="flex justify-center">


                    <button
                      className="openModalBtn"
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    >
                      <p className='mx-2 my-1 hover:text-blue-500 hover:underline'>Lahore</p>
                    </button>

                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                  </div>

                  <div className="flex justify-center">


                    <button
                      className="openModalBtn"
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    >
                      <p className='mx-2 my-1 hover:text-blue-500 hover:underline'>Rawalpindi</p>
                    </button>

                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                  </div>

                  <div className="flex justify-center">


                    <button
                      className="openModalBtn"
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    >
                      <p className='mx-2 my-1 hover:text-blue-500 hover:underline'>Multan</p>

                    </button>

                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                  </div>
                </div>









                <a href={courseData.brochure} target="_blank" class="text-white hover:text-white border border-blue-700 hover:bg-[#308AFF] font-medium rounded-lg text-sm px-4 py-3 text-center mr-2 mb-2 dark:hover:text-white">
                  Download Course Brochure
                </a>



                <button
                  className="openModalBtn inline-flex text-white bg-[#308AFF] border-0 border-blue-700 py-3 px-4 focus:outline-none hover:bg-[#308AFF] rounded text-sm"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Free Orientation Class
                </button>
                {modalOpenb && <Modalb setOpenModalb={setModalOpenb} />}
                <button className="ml-4 inline-flex text-white bg-red-700 border-0 py-3 px-4  hover:bg-red-700 rounded text-sm my-2">Pay Now</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/5">
              <img className="object-cover object-center rounded" alt="hero" src={courseData ? courseData.category_image : null} />
            </div>
          </div>
        </section>
        <div>
          <div className="flex flex-col text-center lg:text-left lg:w-2/3 mx-auto mb-5 mt-5 justify-center">
            <h1 className="text-4xl  font-extrabold text-gray-900 dark:text-white mb-4 text-gray-900">Course Module</h1>
            <p className="leading-relaxed text-base text-lg text-gray-900 dark:text-white">Our course modules offer a well-rounded curriculum, combining theoretical foundations with hands-on training, ensuring students acquire industry-relevant skills and knowledge for future endeavors.</p>
          </div>

        </div>
        <section className='p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14'>
          <div className="grid grid-cols-1 md:grid-cols-4 border rounded-lg w-full mx-auto shadow-lg">

            {/* Module List */}
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

            {/* Module Details */}
            <div className='col-span-3 md:col-span-2'>
              <div className='p-5 text-sm md:text-base lg:text-lg xl:text-xl text-[#308AFF]'>
                {module.title}
              </div>
              <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-5 max-sm:mb-0 max-sm:text-center'>
                Key Features of this course
              </div>
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
              <h1 className="sm:text-3xl text-5xl font-bold mb-4 text-gray-900 text-xl lg:text-3xl">Develop your Academic network through Diverse Environment</h1>

              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We discover your personal and professional growth capitalize on opportunities through which you will get profound impact on various employment and career advancement.</p>
            </div>
          </div>
        </section>







        <section className="text-gray-600 body-font text-center">

          <div className="container px-5 py-2 mx-auto ml-15">
            <div className="flex flex-wrap -m-4">
              {feature.map((x) => {
                return (
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


        <section className="text-gray-600 body-font p-5">
          <div className="container  mx-auto">
            {/* <h2 className="text-2xl font-bold text-black my-5 mt-8 mx-2">Course Instructors</h2> */}
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

        <section>
          <div className='grid grid-cols-4  mx-auto '>
            <div className='col-span-3 overflow-y-auto max-h-[600px]'>{parsedDescription}</div>
            <div>
              <div className='px-5'>
                <div className=' bg-[#234E87]  rounded-t-xl w-[330px]  h-[76px] flex justify-center items-center font-semibold text-3xl text-white'>Course we offer</div>
                <div className=' gap-1 grid'>
                  <div className='bg-[#EEFFFB] w-[330px]  h-[80px] flex justify-center items-center  p-2'>The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D</div>
                  <div className='bg-[#EEFFFB] w-[330px]  h-[80px] flex justify-center items-center  p-2'>The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D</div>
                  <div className='bg-[#EEFFFB] w-[330px]  h-[80px] flex justify-center items-center  p-2'>The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D</div>
                  <div className='bg-[#EEFFFB] w-[330px]  h-[80px] flex justify-center items-center  p-2'>The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D</div>
                  <div className='bg-[#EEFFFB] w-[330px]  h-[80px] flex justify-center items-center  p-2'>The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D</div>
                  <div className='bg-[#EEFFFB] w-[330px]  h-[80px] flex justify-center items-center  p-2'>The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D</div>
                  <div className='bg-[#EEFFFB] w-[330px]  h-[80px] flex justify-center items-center  p-2'>The Art of Animated Design: Motion Graphics with After Effects & Cinema 4D</div>
                </div>
              </div>
            </div>
          </div>
        </section>






        <div className='container'>

          <section class="text-gray-600 body-font px-16">
            <div class="container py-8 mx-auto">
              <div class="lg:w-1/1 flex flex-col sm:flex-row sm:items-center items-center mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-bold text-black ">More Courses</h1>
                <button class="flex-shrink-0 text-white border-0 py-2 px-2 focus:outline-none hover:bg-[#308AFF] rounded text-sm bg-[#308AFF] mt-4 sm:mt-0 sm:w-auto self-center">View All Courses</button>
              </div>
            </div>
          </section>


          <section className="text-gray-600 body-font ">
            <div className="container px-5 py-10 mx-auto ">

              <div className="flex flex-wrap -m-4">
                {/* Card 1 */}
                <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex items-center justify-center">
                  <div className="p-4 w-64 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img src="/images/1 (4).png" alt="Image 1" className="h-40 object-cover rounded-xl mb-2" />
                    <div className="flex justify-between mb-4">
                      <div className="flex">
                        <i className="fa-solid fa-paintbrush text-blue-500 mt-1 mx-1"></i>
                        <p>Design</p>
                      </div>
                      <div className="flex">
                        <i className="fas fa-clock text-gray-400 mt-1 mx-1"></i>
                        <p>6 Months</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-sm text-gray-900 mb-3">Certified Digital Media Marketing (CDMM) Expert Course (06 Months)</h2>
                      <h3 className="text-red-500 mb-1.5 mt-1">Ayesha Amjad</h3>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex items-center justify-center">
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
                <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex items-center justify-center">
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
                <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex items-center justify-center">
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


    </>

  )
}

export default Coursedetail