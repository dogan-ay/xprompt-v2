import React from 'react';

const PageBlogCard = () => {
  return (
    <article className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10 rounded-2xl bg-white p-3 sm:w-full transition group cursor-pointer sm:hover:scale-[1.01] border border-slate-200">
      <div className="h-72 aspect-square max-h-72 w-full lg:w-64 rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/93/34/a0/9334a0802fc144fba9e7a9eba9f198ac.jpg"
        ></img>
      </div>
      <div className="flex flex-col gap-4 p-0 ">
        <div className="flex flex-col gap-1">
          <p className="text-xl lg:text-2xl font-semibold text-slate-900">
            Lorem Ipsum Dolor
          </p>
          <p className="block text-base text-slate-700 group-hover:text-slate-800">
            Prompt Engineering
          </p>
          <p className="text-xs text-slate-600 group-hover:text-slate-700">
            15/01/2023
          </p>
        </div>
        <p className="text-sm lg:w-60  text-slate-700 group-hover:text-slate-800">
          Lorem İpsum dolor site amet. Lorem İpsum dolor site amet. Lorem İpsum
          dolor site amet.
        </p>
      </div>
    </article>
  );
};

export default PageBlogCard;
