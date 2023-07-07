import { React, useState } from 'react';
import NewsInput from '../NewsInput';

const HeroSection = () => {
  return (
    <section className="flex justify-around items-center gap-8 lg:gap-0 flex-col-reverse my-20 lg:flex-row">
      <div className="max-w-lg flex flex-col gap-7 ">
        <h1 className="text-4xl sm:text-6xl font-bold text-xcolor-900 leading-tight"></h1>
        <p className="text-xl sm:text-2xl text-xcolor-700">
          Lorem ipsum dolor amei sit amet! Lorem ipsum dolor amei sit amet!
        </p>
        <NewsInput />
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
