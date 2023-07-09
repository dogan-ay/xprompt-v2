import Link from 'next/link';
import { useState } from 'react';

export default function MenuItem(props) {
  const [isActive, setIsActive] = useState(props.isActive ? true : false);
  return (
    <Link href={props.link}>
      <span
        className={`${
          isActive
            ? 'text-black bg-opacity-50'
            : 'text-slate-800 bg-opacity-25 '
        } flex justify-between items-center py-2 px-4 m-2 rounded-xl bg-slate-200 backdrop-filter backdrop-blur border border-slate-300`}
      >
        <p className={``}>{props.title}</p>
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
