import React from 'react';
import Button from './Button';

const DarkNewsInput = (props) => {
  return (
    <div className="flex justify-between items-center p-1 border border-slate-500 rounded-lg bg-slate-700 focus-within:border-slate-400 focus-within:shadow-sm hover:border-slate-400">
      <div className="pl-2 flex items-center w-3/4">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#cbd5e1"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.048"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-linejoin="round"
            />{' '}
            <path
              d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />{' '}
          </g>
        </svg>
        <input
          type="text"
          placeholder="Weekly job alerts"
          className="py-2 pl-2 pr-4 w-full  bg-transparent focus:outline-none"
        ></input>
      </div>

      <Button onlyArrow={true} />
    </div>
  );
};

export default DarkNewsInput;
