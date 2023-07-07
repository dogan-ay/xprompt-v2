import Link from 'next/link';
import { useContext } from 'react';
import { JobContext } from '@/contexts/JobContext';

export default function JobMobile() {
  const { isShowJob, updateShowJob, currentJob } = useContext(JobContext);
  return (
    <div
      className={`${
        isShowJob ? 'block sm:hidden' : 'hidden'
      } bg-white w-full h-[500px] `}
    >
      <div
        className="flex flex-row-reverse items-center justify-between py-4 px-8
               bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
        id="jobPage"
      >
        <p className="text-sm font-medium text-slate-200">Job Details</p>
        <Link href={`#${currentJob}`}>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              updateShowJob(false);
            }}
          >
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
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
                    d="M8 12L16 12"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M11 9L8.08704 11.913V11.913C8.03897 11.961 8.03897 12.039 8.08704 12.087V12.087L11 15"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                </g>
              </svg>
            </div>
            <p className="text-md font-semibold text-white ">Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
