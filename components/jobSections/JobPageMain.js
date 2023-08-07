import PageJobCard from '@/components/PageJobCard';
import { React, useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { JobContext, JobContextProvider } from '@/contexts/JobContext';
import JobMobile from '../jobSections/JobMobile';
import JobWeb from '../jobSections/JobWeb';
import { useRouter } from 'next/router';

const JobPageMain = () => {
  const { updateCurrentJob, currentJob, isMobile, isShowJob, updateShowJob } =
    useContext(JobContext);

  const fakeData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];
  const route = useRouter();
  useEffect(() => {
    console.log(route);
  });
  return (
    <>
      <div className="container mx-auto mt-24">
        <div className="xl:mx-20 mx-4 sm:mx-0">
          <section className="flex flex-column w-full rounded-2xl my-10 overflow-hidden   shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div
              className={`
               flex flex-col
               bg-white w-full sm:w-1/2 border-l border-gray-200 sm:max-h-[90vh] sm:overflow-y-scroll 
              scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50
              `}
            >
              {fakeData.map((item) => (
                <Link
                  href={`${isMobile ? '/jobs/' + item.id : '#'}`}
                  onClick={() => {
                    updateCurrentJob(item.id);
                  }}
                >
                  <div key={item.id} id={item.id}>
                    <PageJobCard />
                  </div>
                </Link>
              ))}
            </div>
            {isMobile ? '' : <JobWeb />}
          </section>
        </div>
      </div>
    </>
  );
};

export default JobPageMain;
