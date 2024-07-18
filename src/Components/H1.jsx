import React, { useState, useEffect } from 'react'
import SectionNews from './SectionNews';
const H1 = ({category}) => {
  

  const [ article ,setArticles] = useState([]);

  useEffect(() => {
     let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
     fetch(url)
     .then(response => response.json()).then(data => setArticles(data.articles));
  },[category])
  
  return (
    <div className=" mt-20 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5'">
      <h1 className="uppercase tracking-wide text-sm text-indigo-500 font-bold ">Stay Ahead with <span className='text-red-700'> Breaking News</span>
      </h1>
      {article.map((news,index) =>{
        return <SectionNews key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}

    </div>
  )
}

export default H1
