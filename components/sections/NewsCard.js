import React from 'react';
import NewsInput from '../NewsInput';

const NewsCard = () => {
  return (
    <section className="lg:mx-28 relative flex justify-around items-center my-32 py-10 sm:px-8 xl:px-32 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-[#001968] to-slate-900">
      <div className="flex flex-col items-center sm:items-stretch gap-6 sm:w-2/4 px-8 sm:p-0">
        <h3 className="text-2xl text-neutral-200">TALENTS</h3>
        <div className="h-40 w-40 overflow-hidden sm:hidden">
          <img
            className="w-full h-full object-cover "
            src="https://otymerkm.sirv.com/xprompt/newsletter-3.png"
          ></img>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-neutral-100 font-bold">
          Are you a real talent?
        </h2>

        <p className="text-neutral-300 sm:w-2/3 font-medium text-md md:text-lg">
          Lorem Ipsum dolor. Lorem Ipsum dolor. Lorem Ipsum dolor.{' '}
        </p>
        <div className="2xl:hidden block">
          <NewsInput onlyArrow={true} />
        </div>
        <div className="2xl:block hidden">
          <NewsInput />
        </div>
      </div>
      <div className="sm:h-60 xl:h-80 w-auto overflow-hidden hidden sm:block">
        <img
          className="w-full h-full object-cover "
          src="https://otymerkm.sirv.com/xprompt/newsletter-3.png"
        ></img>
      </div>
    </section>
  );
};

export default NewsCard;
