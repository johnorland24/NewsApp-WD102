import React, { useState } from 'react';
import axios from 'axios';

const NewsSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsData, setNewsData] = useState([]);

  const handleSearch = async () => {
    try {
      const apiKey = `${import.meta.env.VITE_API_KEY}`; // Replace with your actual API key
      const apiUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}&country=${searchTerm}`;

      const response = await axios.get(apiUrl);
      setNewsData(response.data.sources);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  const handleRemove = () => {
    setNewsData([]);
  };

  return (
    <div className="flex items-center justify-center mt-5">  
    <div className="w-1/2 bg-white rounded-md shadow-md p-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>  
      <div className="flex items-center">  
        {/* <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">  
          <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />  
        </svg>   */}
        <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />  
     
        <button className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black-500" onClick={handleSearch}>Search</button>  
        {newsData.length > 0 && (  
          <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={handleRemove}>Remove</button>  
        )}  
      </div>  
  
      <div className="overflow-y-auto mt-4">  
        <ul className="space-y-2">  
          {newsData.map((source) => (  
            <li key={source.id}>{source.name}</li>  
          ))}  
        </ul>  
      </div>  
    </div>  
  </div>
  );
};

export default NewsSearch;




