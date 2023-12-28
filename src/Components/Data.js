import logo19 from '../Assets/images/logo19.png'
import affiliated from '../Assets/images/Affiliated.png'
import multiplebranches from '../Assets/images/Multiple.png'
import international from '../Assets/images/International.png'
import alumini from '../Assets/image/alumini.png'
import professional from '../Assets/image/professional.png'
import instruction from '../Assets/image/Instructor.png'
import mou from '../Assets/image/mou.png'
import usa from '../Assets/image/usa.png'
import arfa from '../Assets/image/arfa.png'
import multan from '../Assets/image/mt.png'
import johartown from '../Assets/image/jt.png'
import rawalpindi from '../Assets/image/rp.png'
import iqbaltown from '../Assets/image/ait.png'
import g1 from '../Assets/Gallery/1.png'
import g2 from '../Assets/Gallery/2.png'
import g3 from '../Assets/Gallery/3.png'
import g4 from '../Assets/Gallery/4.png'
import g5 from '../Assets/Gallery/5.png'
import g6 from '../Assets/Gallery/6.png'
import g7 from '../Assets/Gallery/7.png'
import g8 from '../Assets/Gallery/8.png'
import f1 from '../Assets/Faqs Icons/1.png'
import f2 from '../Assets/Faqs Icons/2.png'
import f3 from '../Assets/Faqs Icons/3.png'
import f4 from '../Assets/Faqs Icons/4.png'
import f5 from '../Assets/Faqs Icons/5.png'
import f6 from '../Assets/Faqs Icons/6.png'
import a1 from '../Assets/About us icons/1.png'
import a2 from '../Assets/About us icons/2.png'
import a3 from '../Assets/About us icons/3.png'
import a4 from '../Assets/About us icons/4.png'
import a5 from '../Assets/About us icons/5.png'
import a6 from '../Assets/About us icons/6.png'
import wahab from '../Assets/image/wahab.png'
import suleman from '../Assets/image/sulman.png'
const cardData = [
  {
    id: 1,
    imgAlt: "Alt text 1",
    imgSrc: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
    title: "Design",
    description1: "Difference Between Digital Marketing and Traditional Marketing",
    description: "If you own an e-commerce business, then you need to market it, but do you know how to market your business in a way that will be beneficial for you?",
    buttonText: "View Course"
  },
  {
    id: 2,
    imgAlt: "Alt text 2",
    imgSrc: "https://live.staticflickr.com/429/19120501824_7dec99f31e_b.jpg",
    title: "Technology",
    description1: "How to Earn Money from YouTube in Pakistan",
    description: "YouTube is the advanced form of social earning in Pakistan, through which you can come live through pre-recorded videos, share your expertise with the world.",
    buttonText: "View Course"
  },
  {
    id: 3,
    imgAlt: "Alt text 2",
    imgSrc: "https://remunance.com/wp-content/uploads/2023/01/Expansion-of-business..jpeg",
    title: "Business",
    description1: "A Beginner's Guide to Freelancing in Pakistan",
    description: "As you are all familiar, everything changes when priorities change. It's time to renovate your skills, as it seems something in your house needs a change. You changed it for the better.",
    buttonText: "View Course"
  },
  {
    id: 4,
    imgAlt: "Alt text 2",
    imgSrc: "https://i.pcmag.com/imagery/roundups/02HDufdqeRUDu3tl0NnY2qZ-2..v1649351854.jpg",
    title: "Software",
    description1: "Understanding Of Fiverr Fee Affiliate Payments",
    description: "As it is, something different comes into the world from a job perspective that shifts from physical to online. It’s not a thing of today, but it also goes back many years.",
    buttonText: "View Course"
  },
  {
    id: 5,
    imgAlt: "Alt text 2",
    imgSrc: "https://www.lecole.edu.pk/wp-content/uploads/2021/01/Education-Pic.jpg",
    title: "Education",
    description1: "Top 7 Proven Strategies to Promote Your Blog",
    description: "It is easy to understand that blogging may be a good initiative to start, but there are lots of things you need to consider while doing a blog for it.",
    buttonText: "View Course"
  },
  {
    id: 6,
    imgAlt: "Alt text 2",
    imgSrc: "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg",
    title: "Photography",
    description1: "Local SEO and How to Improve Your Local Ranking",
    description: "Businesses are more likely to depend on SEO today because this is the only organic way to promote them. Once you are familiar with SEO strategies.",
    buttonText: "View Course"
  },
  {
    id: 7,
    imgAlt: "Alt text 2",
    imgSrc: "https://twproject.com/blog/wp-content/uploads/project-management-software-in-mother-tongue.png",
    title: "IT Softwares",
    description1: "10 Essential Elements of Social Media Management: The Ultimate Guide",
    description: "Social media management is a vital chunk of marketing today. Learn how social media marketing can aid you to create leads, increase adaptations, and upsurge brand consciousness.",
    buttonText: "View Course"
  },
  {
    id: 8,
    imgAlt: "Alt text 2",
    imgSrc: "https://sitechecker.pro/wp-content/uploads/2018/02/Knowledge-base-part-3_what-is-seo.jpg",
    title: "SEO",
    description1: "What strategies can you use to grow your e-commerce business in 2023",
    description: "E-commerce has been increasing at a quick pace in the current years, and e-commerce...",
    buttonText: "View Course"
  },
  {
    id: 9,
    imgAlt: "Alt text 2",
    imgSrc: "https://www.searchenginejournal.com/wp-content/uploads/2021/08/the-ultimate-guide-to-digital-marketing-61726311bf393-sej.png",
    title: "Marketing",
    description1: "Influencer Marketing Secrets for Small Businesses",
    description: "It’s no surprise that working with influencers can exponentially increase your marketing efforts at a lower cost and faster pace than traditional marketing.",
    buttonText: "View Course"
  },
];

// About data

export const aboutdata = [
  {
    id: 1,
    imgAlt: "Alt text 1",
    imgSrc: a1,
    title: "Expert Instructors",
    description: "Our experienced trainers bring real-world expertise to every class, ensuring you receive top-quality IT education.",
  },
  {
    id: 2,
    imgAlt: "Alt text 1",
    imgSrc: a2,
    title: "Customized Learning",
    description: "Advance courses to meet your needs, whether you're a beginner or an experienced professional in the IT field.",
  },
  {
    id: 3,
    imgAlt: "Alt text 1",
    imgSrc: a3,
    title: "Interactive Learning",
    description: "Engage in dynamic, interactive classes that foster collaboration and deep understanding of IT concepts and skills.",
  },
  {
    id: 4,
    imgAlt: "Alt text 1",
    imgSrc: a4,
    title: "Flexible Learning",
    description: "Choose from in-person or online classes, allowing you to learn at your own pace and convenience.",
  },
  {
    id: 5,
    imgAlt: "Alt text 1",
    imgSrc: a5,
    title: "Career Support",
    description: "We provide guidance on career pathways and job placement assistance to help you achieve your professional goals.",
  },
  {
    id: 6,
    imgAlt: "Alt text 1",
    imgSrc: a6,
    title: "Industry-Relevant Content",
    description: "Our up-to-date curriculum reflects the latest trends and technologies in the IT industry.",
  },
]


// Homesectiondata-----------------------------------------------------------------------------------------------------
export const homedata = [
  {
    id: 1,
    imgAlt: "Alt text 1",
    imgSrc: affiliated,
    title: "Affiliated with Govt. (PSDA Navttc & PBTE)",

  },
  {
    id: 2,
    imgAlt: "Alt text 1",
    imgSrc: multiplebranches,
    title: "Multiple Branches in Pakistan",

  },
  {
    id: 3,
    imgAlt: "Alt text 1",
    imgSrc: international,
    title: "International Collaborations",

  },
  {
    id: 4,
    imgAlt: "Alt text 1",
    imgSrc: usa,
    title: "Awarded by USA Education 2.0",

  },
  {
    id: 5,
    imgAlt: "Alt text 1",
    imgSrc: alumini,
    title: "75000+ Alumni",

  },
  {
    id: 6,
    imgAlt: "Alt text 1",
    imgSrc: professional,
    title: "100+ Professional Programs",

  },
  {
    id: 7,
    imgAlt: "Alt text 1",
    imgSrc: instruction,
    title: "150+ Instructors",

  },
  {
    id: 8,
    imgAlt: "Alt text 1",
    imgSrc: mou,
    title: "80+ Mou’s Sign",

  },
]


export const durationdata = [
  {
    id: 1,
    title: "1 Year Professional Diploma Programs",
    description: "A 1-year diploma is ideal for students who build their careers in software, graphics, web, and marketing for potential growth",
  },
  {
    id: 2,
    title: "6 Months Certified Courses",
    description: "Accelerate your career with our comprehensive 6-month certified Courses. Gain specialized expertise and excel in your career.",
  },
  {
    id: 3,
    title: "3-2 Months Certified Courses",
    description: "Elevate your expertise from 3 to 2 months with our Professional Certification Courses. Unlock new career opportunities!",
  },
  {
    id: 4,
    title: "Professional Boot Camp",
    description: "Join our Professional Bootcamp and gain valuable insights to advance your career. Don't miss out!",
  },
]


export const contactus = [
  {
    id: 1,
    image: arfa,
    title: "Arfa Tower",
    description: "1st Floor 256 / A, Block R2 Near Shaukat Khanam Hospital, next to Standard Chartered, Lahore",
    phone: " 0304-1111774",
    phone1:"0320-1443744",
    link:"https://www.youtube.com/watch?v=_HulKf9eRew"
  },
  {
    id: 2,
    image: iqbaltown,
    title: "Allama Iqbal Town Branch",
    description: "743 B Kashmir Block Allama Iqbal Town Lahore",
    phone: "0309-7774937",
    link:"https://www.youtube.com/watch?v=ZK1s6QMCRi8"
  },
  {
    id: 3,
    image: johartown,
    title: "Johar Town Branch",
    description: "1st Floor 256 / A, Block R2 Near Shaukat Khanam Hospital, next to Standard Chartered, Lahore",
    phone: "0309-7772259",
    link:"https://www.youtube.com/watch?v=Y8kNFl5RVvU"
  },
  {
    id: 4,
    image: multan,
    title: "Multan Branch",
    description: "237-B, Model Town, Main Boulevard, Multan",
    phone: "0309-7772260",
    phone1:"0309-7774685",
    link:"https://www.facebook.com/pny.multan/videos/226519397106219"
  },
  {
    id: 5,
    image: rawalpindi,
    title: "Rawalpindi Branch",
    description: "Office # 604, Alpha Techno Square NASTP, Old Airport Nur khan Airbase, Chaklala Cantt, Rawalpindi.",
    phone: "0300-8405591",
    link:"https://www.youtube.com/watch?v=QVo6WNbZ3-o"
  },
]

export const GalleryData = [
  {
    "id": 1,
    "image": g1,
    "images": [
      "https://digitalkonnecter.com/images/events/pny/pny-full-3.JPG",
      "https://digitalkonnecter.com/images/events/pny/pny-full-4.JPG",
      "https://digitalkonnecter.com/images/events/pny/pny-full-5.JPG"
    ],
    "description": "Certificate and Gift Distribution Ceremony"
  },

  {
    id: 2,
    image: g2,
    "images": [
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    ],
    description: "Ethical Hacking & Cyber Security Course 2019 (Basic to Pro)"
  },
  {
    id: 3,
    image: g3,
    "images": [
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    ],
    description: "3 Hours Session on Freelancing by Hisham Sarwar"
  },
  {
    id: 4,
    image: g4,
    "images": [
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    ],
    description: "PNY Trainings has conducted Workshop in Universities"
  },
  {
    id: 5,
    image: g5,
    "images": [
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    ],
    description: "3D Character Maya Animation Course!"
  },
  {
    id: 6,
    image: g6,
    "images": [
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    ],
    description: "Mystic Advertisement & PNY Trainings has collaborated !"
  },
  {
    id: 7,
    image: g7,
    "images": [
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    ],
    description: "PNY Trainings has participated in Career Fair'19"
  },
  {
    id: 8,
    image: g8,
    "images": [
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    ],
    description: "MOU With Different Organization"
  },
]



export const faqs = [
  {
    id: 1,
    image: f1,
    description: "Courses & Diploma",
    details: [
      {
        text: "Students from different cities can apply for Admission 1",
        subDetails: ["Sub detail 1 for Admission 1", "Sub detail 2 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
    ]
  },



  {
    id: 2,
    image: f2,
    description: "Workshop & Bootcamp",
    details: [
      {
        text: "Students from different cities can apply for Admission 2",
        subDetails: ["Sub detail 1 for Admission 1", "Sub detail 2 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
    ]
  },


  {
    id: 3,
    image: f3,
    description: "Admission",
    details: [
      {
        text: "Students from different cities can apply for Admission 3",
        subDetails: ["Sub detail 1 for Admission 1", "Sub detail 2 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
    ]
  },


  {
    id: 4,
    image: f4,
    description: "Training Schedule",
    details: [
      {
        text: "Students from different cities can apply for Admission 4",
        subDetails: ["Sub detail 1 for Admission 1", "Sub detail 2 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
    ]
  },


  {
    id: 5,
    image: f5,
    description: "Physical + Online Classes",
    details: [
      {
        text: "Students from different cities can apply for Admission 5",
        subDetails: ["Sub detail 1 for Admission 1", "Sub detail 2 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
    ]
  },


  {
    id: 6,
    image: f6,
    description: "Certification",
    details: [
      {
        text: "Students from different cities can apply for Admission 6",
        subDetails: ["Sub detail 1 for Admission 1", "Sub detail 2 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
      {
        text: "Another text for Admission 1",
        subDetails: ["Sub detail 3 for Admission 1", "Sub detail 4 for Admission 1"]
      },
    ]
  },
]


export const ownersdata  = [
  {
    id:1,
    image:wahab,
    name:"Wahab Yunus",
    designation:"Founder & CEO",
    linkdin:<i className="fa-brands fa-linkedin"></i>,
    twitter:<i className="fa-brands fa-twitter"></i>

  },
  {
    id:2,
    image: suleman,
    name:"Suleman Ikram",
    designation:"Co-Founder & Director",
    linkdin:<i className="fa-brands fa-linkedin"></i>,
    twitter:<i className="fa-brands fa-twitter"><a href="www.facebook.com"></a></i>

  },
]






export default cardData