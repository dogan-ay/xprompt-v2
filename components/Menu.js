import { useLockBodyScroll } from '@uidotdev/usehooks';
import Link from 'next/link';
import MenuItem from './MenuItem';

const Menu = () => {
  useLockBodyScroll();

  const jobIcon = (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
          d="M3 11C3 9.11438 3 8.17157 3.58579 7.58579C4.17157 7 5.11438 7 7 7H8H16H17C18.8856 7 19.8284 7 20.4142 7.58579C21 8.17157 21 9.11438 21 11V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H16H8H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V11Z"
          stroke="#323232"
          stroke-width="2"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M8 21V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V21"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );

  const homeIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
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
          d="M19 9L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L14 21L10 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M3 11L7.5 7L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L16.5 7L21 11"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );

  return (
    <div
      className={`absolute left-0 h-[100vh] w-full bg-slate-200 bg-opacity-75 backdrop-filter backdrop-blur`}
    >
      <div classname="flex flex-col text-white">
        <MenuItem icon={homeIcon} isActive={true} title={'Home'} link={'/'} />
        <MenuItem
          icon={jobIcon}
          isActive={false}
          title={'Jobs'}
          link={'/jobs'}
        />
        <MenuItem isActive={false} title={'test'} link={'/jobs'} />
        <MenuItem isActive={false} title={'test'} link={'/jobs'} />
      </div>
    </div>
  );
};

export default Menu;
