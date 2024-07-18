import React from 'react'
import images from '../assets/defaultnews.avif'
const SectionNews = ({title, description, src, url}) => {

  return (
    <div class="section-news max-h-96 overflow-y-auto sticky">  
 <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <img className='h-48 w-full object-cover md:h-full md:w-48' src={src?src:images} alt='news' />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            {title}
          </div>
          <a href={url}
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>Explore</a>
              <p className='mt-2 text-slate-500'>{description?description.slice(0,90):" The Content well not available for now ,it will update as soon as possible Thank you!"}</p>
          </div>
      </div>
    </div>
</div>
    
  );
};

export default SectionNews
