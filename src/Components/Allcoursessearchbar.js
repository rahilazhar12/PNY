import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Allcoursessearchbar = () => {
  const [query, setQuery] = useState(''); // default search term
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading

  useEffect(() => {
    if (query.trim().length > 2) { 
      setLoading(true); // Start loading
      fetch(`https://www.pnytrainings.com/api/search/${encodeURIComponent(query.trim())}`)
        .then(response => response.json())
        .then(data => {
          // Ensure that data.search_result is an array
          setResults(Array.isArray(data.search_result) ? data.search_result : []);
          setLoading(false); // Stop loading when the data is received
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          setResults([]); // Ensure results is set to an array on error
          setLoading(false); // Stop loading if there is an error
        });
    } else {
      setResults([]); 
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="w-full max-w-xl mx-auto mt-2 max-sm:flex max-sm:justify-center lg:col-span-6 xl:col-span-4 md:col-span-5">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='border max-sm:p-3 lg:w-80  md:w-80 md:ml-20 xl:ml-0 xl:w-full  lg:ml-20 h-9 rounded' 
          placeholder='Search for the software or skills you want to learn' 

        />
        {loading && (
          <div className="absolute right-0 top-0 mt-3 mr-4">
            {/* Loader here */}
            <div className="loader"></div>
          </div>
        )}
      </div>
      <ul className="results-scrollbar z-50 absolute w-full max-w-xl mt-1 max-h-96 overflow-y-auto bg-white">
        {loading ? (
          <li className="text-center py-3">Searching...</li>
        ) : results.length > 0 ? (
          results.map((result) => (
            <li key={result.id} className="border-b border-gray-200 px-5 py-3 hover:bg-gray-100">
              <Link to={`/${result.url_slug}`}   className="text-blue-600 z-auto hover:text-blue-800">
                {result.name}
              </Link>
            </li>
          ))
        ) : (
          !loading && query.trim().length > 2 && <li className="text-center py-3">No results found.</li>
        )}
      </ul>
    </div>
  );
};

export default Allcoursessearchbar;
