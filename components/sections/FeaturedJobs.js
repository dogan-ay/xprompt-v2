import React from 'react';
import NeuButton from '../NeuButton';
import JobCard from '../JobCard';
import Link from 'next/link';
import Image from 'next/image';

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
      <Link href="/">
        <span className="flex justify-center items-center text-xl font-medium  text-slate-800 hover:text-slate-900 hover:bg-slate-200 rounded-lg m-2 py-3 cursor-pointer">
          <p className="pb-[5px]">Search Jobs</p>
          <Image
            src="/icons/chevron-right.svg"
            width={16}
            height={16}
            alt="chevron icon"
          />
        </span>
      </Link>
    </section>
  );
};

export default FeaturedJobs;
