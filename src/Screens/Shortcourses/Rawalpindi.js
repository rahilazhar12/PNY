import React  ,{useState , useEffect} from 'react'
import axios from 'axios';
import parse from 'html-react-parser';
const Rawalpindi = () => {
  const [courses, setCourses] = useState('');
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`https://www.pnytrainings.com/api/shortcourse/short-courses-in-rawalpindi`);
        setCourses(response.data.course);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <>
    <div className='w-full'>
      <img className='w-full' src={courses.page_image} alt="" />
    </div>
     {courses ? parse(courses.page_description) : <p>Loading...</p>}
    </>
  )
}

export default Rawalpindi