import React from 'react';
import NewsInput from '../NewsInput';

const NewsCard = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 bg-slate-100 rounded-xl">
          <div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src="https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24 px-6 sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
              Grow your audience
            </h2>

            <p className="my-6 text-slate-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>
            <div className="max-w-[500px] pb-6">
              <NewsInput onlyArrow={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
