import React from 'react';

const BlogCard = () => {
  return (
    <article className="flex flex-col   sm:m-0 sm:flex-row sm:items-center sm:gap-10 rounded-2xl bg-white p-3 sm:w-full hover:bg-slate-50 hover:shadow-[rgba(0,_0,_0,_0.10)_0px_3px_8px] transition group cursor-pointer">
      <div className="sm:h-72 aspect-square sm:max-h-72 w-full sm:w-64 rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/93/34/a0/9334a0802fc144fba9e7a9eba9f198ac.jpg"
        ></img>
      </div>
      <div className="flex flex-col gap-4 p-2 sm:p-0">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold text-slate-900">
            Lorem Ipsum Dolor
          </p>
          <p className="text-base text-slate-700 group-hover:text-slate-800">
            Prompt Engineering
          </p>
          <p className="text-xs text-slate-600 group-hover:text-slate-700">
            15/01/2023
          </p>
        </div>
        <p className="text-sm sm:block hidden lg:w-60 md:w-96 sm:w-60 text-slate-700 group-hover:text-slate-800">
          Lorem İpsum dolor site amet. Lorem İpsum dolor site amet. Lorem İpsum
          dolor site amet. Lorem İpsum dolor site amet.
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
