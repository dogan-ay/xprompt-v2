import { React, useState, useContext } from 'react';
import NewsInput from '../NewsInput';
import { JobContext } from '@/contexts/JobContext';
const HeroSection = () => {
  const { isMobile } = useContext(JobContext);
  return (
    <section className="flex justify-around items-center gap-8 lg:gap-0 flex-col-reverse my-20 lg:flex-row">
      <div className="max-w-lg flex flex-col gap-7 ">
        <h1 className="big-title text-xcolor-900 sm:leading-tight">
          Lorem Ipsum Dolor Amei Sıt Amet
        </h1>
        <p className="text-xl sm:text-2xl text-xcolor-700">
          Lorem ipsum dolor amei sit amet! Lorem ipsum dolor amei sit amet!
        </p>
        {isMobile ? <NewsInput onlyArrow={true} /> : <NewsInput />}
      </div>
      <div className="aspect-ratio-4/3 w-60 sm:w-auto sm:max-w-xs md:max-w-sm">
        <img
          className="w-full h-full object-cover"
          src="https://otymerkm.sirv.com/xprompt/hero.png"
        ></img>
      </div>
    </section>
  );
};

export default HeroSection;
