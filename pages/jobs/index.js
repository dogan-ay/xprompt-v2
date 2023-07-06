import PageJobCard from '@/components/PageJobCard';
import { React, useState } from 'react';
const jobs = () => {
  const [isShowJob, setIsShowJob] = useState(false);
  const [currentJob, setCurrentJob] = useState();

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
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="xl:mx-20 mx-4 sm:mx-0">
          <section className="flex flex-column w-full rounded-2xl my-10 overflow-hidden   shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="bg-red-500 w-full sm:w-1/2 h-[300px] hidden sm:block">
              merhaba
            </div>
            <div
              className={`${
                isShowJob ? 'block sm:hidden' : 'hidden'
              } bg-red-500 w-full sm:w-1/2 h-[300px]`}
            >
              merhaba
            </div>
            <div
              className={`${
                isShowJob ? 'hidden sm:flex flex-col' : 'flex flex-col'
              } bg-white w-full sm:w-1/2 border-l border-gray-200`}
            >
              {fakeData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setCurrentJob(item.id);
                    setIsShowJob(true);
                  }}
                >
                  <PageJobCard />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default jobs;
