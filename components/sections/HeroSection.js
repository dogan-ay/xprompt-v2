import { React, useState, useContext } from 'react';
import NewsInput from '../NewsInput';
import { JobContext } from '@/contexts/JobContext';
import DarkNewsInput from '../DarkNewsInput';
const HeroSection = () => {
  const { isMobile } = useContext(JobContext);
  return (
    <section className="flex justify-around items-center gap-4 md:gap-8 lg:gap-0 flex-col-reverse my-14 md:my-20 md:flex-row bg-slate-900 rounded-xl md:rounded-none">
      <div className="max-w-lg flex flex-col gap-3 md:gap-7  p-4  md:p-0 ">
        <h1 className="big-title md:text-xcolor-900 sm:leading-tight primary-gradient bg-clip-text text-transparent">
          Lorem Ipsum Dolor Amei Sıt Amet
        </h1>
        <p className="text-lg md:text-2xl text-slate-100 md:text-slate-700">
          Lorem ipsum dolor amei sit amet! Lorem ipsum dolor amei sit amet!
        </p>
        {isMobile ? <NewsInput onlyArrow={true} /> : <NewsInput />}
      </div>
      <div className="aspect-ratio-4/3 max-w-[200px] md:w-auto md:max-w-xs mt-8 md:mt-0">
        <img className="w-full h-full object-cover" src="/hero2.png"></img>
      </div>
    </section>
  );
};

export default HeroSection;
