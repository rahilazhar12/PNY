
import React , {useState , useEffect} from 'react'
import Searchbar from '../Components/Searchbar'
import parse, { domToReact } from 'html-react-parser';
import axios from 'axios';
const Termsandconditions = () => {


    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
          try {
            const response = await axios.get('https://www.pnytrainings.com/api/pages/terms-conditions');
            setData(response.data);
            setIsLoading(false)
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        };
    
        fetchData();
        window.scrollTo(0, 0);
      }, []);

      if (isLoading) {
        return (
          <div className="loader-container text-center">
            <div className="loader"></div>
            {/* <p>Loading...</p> */}
          </div>
        );
      }

    const parsedDescription = parse(data.page.page_description, {
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
                // if (domNode.name === 'a') {
                //   const props = { className: 'bg-[#0c7ec2] text-white hover:bg-red-500 p-3 w-80 cursor-pointer rounded mx-auto'};
                //   return <p {...props}>{domToReact(domNode.children)}</p>;
                // }
            }
        }
    });
    return (
        <main>

            <section>
                <Searchbar />
            </section>


            <section>
                <div className=' bg-[#152438] text-white h-[306px] flex flex-col justify-center items-center'>
                    <div className=' text-[48px] font-semibold  text-center max-sm:text-[32px]'>Terms & Conditions</div>
                    <div className=' text-[20px] font-normal w-[768px] max-sm:w-auto text-center max-sm:p-3 max-sm:text-[16px]'><p>This T&amp;C applies to all information submitted to&nbsp;PNY Trainings at any time through any of our services (from digital or offline communications).</p></div>
                </div>
            </section>

            {parsedDescription}
        </main>
    )
}

export default Termsandconditions
