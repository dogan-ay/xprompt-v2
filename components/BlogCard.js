import React from 'react';

const BlogCard = () => {
  return (
    <article className="flex flex-col w-44  sm:m-0 sm:flex-row sm:items-center sm:gap-10 rounded-2xl bg-white p-2 sm:p-3 sm:w-full transition group cursor-pointer sm:hover:scale-[1.01] border border-slate-200">
      <div className="sm:h-72 aspect-square sm:max-h-72 sm:w-64 rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/93/34/a0/9334a0802fc144fba9e7a9eba9f198ac.jpg"
        ></img>
      </div>
      <div className="flex flex-col gap-4 p-1 sm:p-0 ">
        <div className="flex flex-col gap-1">
          <p className="text-lg sm:text-2xl font-semibold text-slate-900">
            Lorem Ipsum Dolor
          </p>
          <p className="sm:block hidden text-base text-slate-700 group-hover:text-slate-800">
            Prompt Engineering
          </p>
          <p className="text-xs text-slate-600 group-hover:text-slate-700">
            15/01/2023
          </p>
        </div>
        <p className="text-sm sm:block hidden lg:w-60 md:w-96 sm:w-60 text-slate-700 group-hover:text-slate-800">
          Lorem İpsum dolor site amet. Lorem İpsum dolor site amet. Lorem İpsum
          dolor site amet.
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
