import { JobContext } from '@/contexts/JobContext';
import { React, useState, useContext } from 'react';

const MenuButton = () => {
  const { isMenuOpen, updateMenu } = useContext(JobContext);

  return (
    <button
      className="block rounded  p-2 text-xcolor-100 transition sm:hidden"
      onClick={() => updateMenu()}
    >
      {isMenuOpen ? (
        <svg
          width="85px"
          height="85px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-5 w-5 p-[2px]"
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
              fill="currentColor"
              fillRule="evenodd"
              d="M16.293 17.707a1 1 0 001.414-1.414L11.414 10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293z"
            ></path>{' '}
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
};

export default MenuButton;
