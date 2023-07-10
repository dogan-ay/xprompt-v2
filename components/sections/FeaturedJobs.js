import React from 'react';
import NeuButton from '../NeuButton';
import JobCard from '../JobCard';
import Link from 'next/link';

const FeaturedJobs = () => {
  return (
    <section
      className="flex flex-col w-full rounded-2xl my-10 overflow-hidden   shadow-[0_1px_10px_rgb(0,0,0,0.12)]
    "
    >
      <div className=" py-4 md:py-7 bg-slate-200 border-b border-gray-200">
        <div className=" justify-center hidden md:flex flex-wrap gap-8 gap-y-4 md:gap-10">
          <NeuButton name={'prompter'} href={'/'} />
          <NeuButton name={'prompter'} href={'/'} />
          <NeuButton name={'prompter'} href={'/'} />
          <NeuButton name={'prompter'} href={'/'} />
          <NeuButton name={'prompter'} href={'/'} />
        </div>
      </div>
      <div className="bg-white flex flex-wrap border-l border-gray-200">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      <div className="mx-auto">
        <Link href="/">
          <span className="flex justify-center items-center text-xl font-medium px-3 py-2 text-slate-800 hover:text-slate-900 hover:bg-slate-200 rounded-lg my-2 cursor-pointer">
            <p className="pl-1">Search Jobs</p>
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M16 12L8 12"
                  stroke="#334155"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
                <path
                  d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9"
                  stroke="#334155"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedJobs;
