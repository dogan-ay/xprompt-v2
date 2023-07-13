import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import { JobContext } from '@/contexts/JobContext';

export default function MenuItem(props) {
  const [isActive, setIsActive] = useState(props.isActive);
  const { isMenuOpen, updateMenu } = useContext(JobContext);

  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);

  return (
    <Link href={props.link} onClick={() => updateMenu()}>
      <span
        className={`${
          isActive
            ? 'text-white bg-slate-500'
            : 'text-black border border-slate-200'
        }  font-medium flex justify-between items-center rounded-lg py-2 px-2 m-2 `}
      >
        {' '}
        <span className="flex gap-2 items-center">
          {props.icon}
          <p
            className={`${
              isActive ? '' : ' bg-opacity-50'
            } text-lg rounded-xl leading-none pb-[3px]`}
          >
            {props.title}
          </p>
        </span>
        {isActive ? null : (
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-5 w-8 py-[1px] rounded-xl bg-slate-200"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                stroke="#1e293b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l6-6-6-6"
              ></path>{' '}
            </g>
          </svg>
        )}
      </span>
    </Link>
  );
}
