import React, { useState, useEffect } from "react";
import Searchbar from "../Components/Searchbar";
import parse, { domToReact } from "html-react-parser";
import axios from "axios";
const Privacypolicy = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://www.pnytrainings.com/api/pages/privacy-policy"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
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
    replace: (domNode) => {
      if (domNode.type === "tag") {
        // For example, add a class to all <p> elements
        if (domNode.name === "p") {
          const props = { className: "px- dark:text-white" };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === "h3") {
          const props = { className: "p-5 text-lg dark:text-white" };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === "ul") {
          const props = { className: "p-5 dark:text-white" };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
      }
    },
  });
  return (
    <main>
      <section>
        <Searchbar />
      </section>

      <section>
        <div className=" bg-[#152438] text-white h-[306px] flex flex-col justify-center items-center">
          <div className=" text-[48px] font-semibold">Privacy Policy</div>
          <div className=" text-[20px] font-normal w-[768px] text-center">
            <p></p>
          </div>
        </div>
      </section>

      {parsedDescription}
    </main>
  );
};

export default Privacypolicy;
