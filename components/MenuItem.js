import Link from 'next/link';
import { useState } from 'react';

export default function MenuItem(props) {
  const [isActive, setIsActive] = useState(props.isActive ? true : false);
  return (
    <Link href={props.link}>
      <span
        className={`${
          isActive
            ? 'text-white bg-opacity-15 border-slate-400 bg-slate-500'
            : 'text-slate-900 bg-slate-200 '
        }  font-semibold flex justify-between items-center py-2 pl-4 pr-6 m-2 rounded-xl  bg-opacity-25  backdrop-filter backdrop-blur border border-slate-300`}
      >
        <p
          className={`${
            isActive ? 'bg-slate-600' : 'bg-slate-200'
          } rounded-xl px-2`}
        >
          {props.title}
        </p>
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
                stroke="currentColor"
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
