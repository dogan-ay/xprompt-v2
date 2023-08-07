import { React, useState, useContext } from 'react';
import NewsInput from '../NewsInput';
import { JobContext } from '@/contexts/JobContext';
import DarkNewsInput from '../DarkNewsInput';
const HeroSection = () => {
  const { isMobile } = useContext(JobContext);
  return (
    <section className="flex justify-around items-center gap-4 lg:gap-0 flex-col-reverse my-14 sm:my-20 sm:flex-row bg-slate-900 sm:bg-transparent rounded-xl sm:rounded-none">
      <div className="sm:max-w-lg flex flex-col gap-3 md:gap-7   p-4  sm:p-0 ">
        <h1 className="big-title sm:text-xcolor-900 primary-gradient bg-clip-text text-transparent">
          Handpicked AI and AI Content Creation Jobs
        </h1>
        <p className="text-lg md:text-2xl text-slate-100 sm:text-slate-700">
          Lorem ipsum dolor amei sit amet! Lorem ipsum dolor amei sit amet!
        </p>
        {isMobile ? <NewsInput onlyArrow={true} /> : <NewsInput />}
      </div>
      <div className="aspect-ratio-4/3 max-w-[200px] md:w-auto md:max-w-xs mt-8 md:mt-0">
        <img
          className="w-full h-full object-cover"
          src="https://raw.githubusercontent.com/dogan-ay/xprompt-v2/main/public/hero2.png"
        ></img>
      </div>
    </section>
  );
};

export default HeroSection;
