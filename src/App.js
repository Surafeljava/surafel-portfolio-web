import React, {useEffect, useState} from 'react';
import { AppBar, HomePage, Work, Contact } from './components';

import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function App() {
  
  let lastYOffset = 0;
  const [scrollUp, setScrollUp] = useState(true);
  
  const onScroll = (event) => {
    
    const yoff = window.pageYOffset;
    
    if (yoff === 0){
      setScrollUp(true);
      lastYOffset = 0;
    }else{
      if (yoff > lastYOffset){
        setScrollUp(false);
        lastYOffset = window.pageYOffset;
      }else{
        setScrollUp(true);
        lastYOffset = window.pageYOffset;
      }
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);

    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', onScroll, true);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div onScroll={onScroll} className="flex flex-col bg-light-1 px-20 items-center scroll-smooth">
      <div className="flex flex-col w-full items-center justify-center md:min-h-screen px-0 md:px-12 pt-40 md:pt-4">
        <AppBar scrolldown={!scrollUp}/>
        <HomePage/>
      </div>
      <Work/>
      <Contact/>
      <div className="text-slate-800 h-10 flex justify-center my-2">Made with ❤ - by Surafel Kindu</div>

      <div className="fixed z-200 bottom-0 left-0 flex flex-col justify-center items-center px-4 md:px-8 gap-6 min-h-screen">
        <div className="grow w-0.5 h-full bg-red-500 invisible md:visible md:mt-36 mb-2 bg-gradient-to-t from-slate-500 to-light-1 rounded-full"></div>
        {/* <div className="visible grow md:invisible"></div> */}

        <a href="https://github.com/Surafeljava" className='w-6 h-6 group'>
          <FaGithub className='w-6 h-6 text-slate-500 group-hover:text-red-500 duration-300 group-hover:-mt-2'/>
        </a>

        <a href="https://www.instagram.com/surafel_kindu/" className='w-6 h-6 group'>
          <FaInstagram className='w-6 h-6 text-slate-500 group-hover:text-red-500 duration-300 group-hover:-mt-2'/>
        </a>

        <a href="https://www.linkedin.com/in/surafel-kindu-11889415b/" className='w-6 h-6 group'>
          <FaLinkedinIn className='w-6 h-6 text-slate-500 group-hover:text-red-500 duration-300 group-hover:-mt-2'/>
        </a>

        <a href="https://twitter.com/surafel_kindu" className='w-6 h-6 group'>
          <FaTwitter className='w-6 h-6 text-slate-500 group-hover:text-red-500 duration-300 group-hover:-mt-2'/>
        </a>

        <div className="grow"></div>
      </div>

      <div className="invisible md:visible fixed z-0 bottom-0 right-0 flex flex-col justify-center items-center px-2 py-4 min-h-screen">
        <div className="grow"></div>
        <div className="rounded-full text-slate-500 rotate-90 font-roboto font-bold text-xl tracking-widest"> 2022 </div>
        <div className="grow w-0.5 h-full invisible md:visible bg-red-500 mt-10 bg-gradient-to-t from-light-1 to-slate-500 opacity-50 rounded-full"></div>
      </div>

    </div>
  );
}

export default App;
