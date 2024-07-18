import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';

const apiKey = `${import.meta.env.VITE_API_KEY}`; // Replace with your actual API key

const CountryByNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleGetNews = async (countryCode) => {
    setSelectedCountry(countryCode);
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`);
    const data = await response.json();
    setNewsData(data.articles);
  };

  const handleRemove = () => {
    setSelectedCountry('');
    setNewsData([]);
  };

  const countryCodes = ['us', 'gb', 'de', 'ca', 'au', 'be', 'br', 'cn', 'co', 'cz', 'ec', 'fr', 'gr', 'hk', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'ru', 'sa', 'se', 'sg', 'sk', 'th', 'tr', 'tw', 'ua', 've', 'za'];

  useEffect(() => {
    if (selectedCountry) {
      handleGetNews(selectedCountry);
    }
  }, [selectedCountry]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-small mb-2 flex text-indigo-500
      ">News By <span className='text-red-700'>Country</span></h1>
      <div className="flex flex-wrap ">
        <select
          className="bg-indigo-500 hover:bg-black text-white font-bold py-2 px-4 rounded m-2"
          value={selectedCountry}
          onChange={(e) => handleGetNews(e.target.value)}
        >
          <option value="">Select a country</option>
          {countryCodes.map((countryCode) => (
            <option key={countryCode} value={countryCode}>
              {countryCode.toUpperCase()}
            </option>
          ))}
        </select>
        {selectedCountry && (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={() => console.log(`Button clicked for ${selectedCountry.toUpperCase()}`)}
          >
            Click Me
          </button>
        )}
        {newsData.length > 0 && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleRemove}
          >
            Remove
          </button>
        )}
      </div>
      <div>
        <ul>
          {newsData.map((article, index) => (
            <li key={index} className="my-4">
              <p className="text-lg font-semibold">{article.title}</p>
              <p className="text-gray-600">{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryByNews;
