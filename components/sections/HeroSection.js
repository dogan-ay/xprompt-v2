import { React, useState, useContext } from 'react';
import NewsInput from '../NewsInput';
import { JobContext } from '@/contexts/JobContext';
const HeroSection = () => {
  const { isMobile } = useContext(JobContext);
  return (
    <section className="flex justify-around items-center gap-8 lg:gap-0 flex-col-reverse my-20 md:flex-row relative">
      <div className="max-w-lg flex flex-col gap-3 md:gap-7 absolute bottom-0 md:static bg-slate-100 md:bg-transparent bg-opacity-25 md:bg-opacity-100 backdrop backdrop-blur-sm md:backdrop-blur-none">
        <h1 className="big-title text-xcolor-900 sm:leading-tight">
          Lorem Ipsum Dolor Amei Sıt Amet
        </h1>
        <p className="text-xl md:text-2xl text-xcolor-700">
          Lorem ipsum dolor amei sit amet! Lorem ipsum dolor amei sit amet!
        </p>
        {isMobile ? <NewsInput onlyArrow={true} /> : <NewsInput />}
      </div>
      <div className="aspect-ratio-4/3 max-w-md md:w-auto md:max-w-xs">
        <img
          className="w-full h-full object-cover"
          src="https://otymerkm.sirv.com/xprompt/hero.png"
        ></img>
      </div>
    </section>
  );
};

export default HeroSection;
