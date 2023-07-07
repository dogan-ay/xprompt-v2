import PageJobCard from '@/components/PageJobCard';
import { React, useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { JobContext, JobContextProvider } from '@/contexts/JobContext';
import { useWindowSize } from '@uidotdev/usehooks';

const JobPageMain = () => {
  const [isShowJob, setIsShowJob] = useState(false);
  const { updateCurrentJob, currentJob } = useContext(JobContext);
  const sizeWidth = useWindowSize();
  const [size, setSize] = useState(sizeWidth);
  const [isMobile, setIsMobile] = useState();
  const handleSize = (size) => {
    size.width < 640 ? setIsMobile(true) : setIsMobile(false);
  };
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
  useEffect(() => {
    handleSize(size);
  }, [size]);
  return (
    <>
      <div className="container mx-auto">
        <div className="xl:mx-20 mx-4 sm:mx-0">
          <section className="flex flex-column w-full rounded-2xl my-10 overflow-hidden   shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div
              className={`${
                isShowJob ? 'hidden sm:flex flex-col' : 'flex flex-col'
              } bg-white w-full sm:w-1/2 border-l border-gray-200 sm:max-h-[90vh] sm:overflow-y-scroll 
              scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50
              `}
            >
              {fakeData.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  onClick={() => {
                    updateCurrentJob(item.id);
                    setIsShowJob(true);
                  }}
                >
                  <PageJobCard />
                </div>
              ))}
              {isMobile ? <p>mobile calıstı test 123</p> : <p>web calıstı</p>}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default JobPageMain;
