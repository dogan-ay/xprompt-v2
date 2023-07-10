import { useLockBodyScroll } from '@uidotdev/usehooks';
import Link from 'next/link';
import MenuItem from './MenuItem';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Menu = () => {
  const [activeLink, setActiveLink] = useState();

  useLockBodyScroll();

  const router = useRouter();

  const parsePath = (path) => {
    if (path === '/') {
      return '/';
    }

    const parts = path.split('/');

    parts.shift();

    if (parts.length === 1) {
      return parts[0];
    }
    return parts[0];
  };

  const handleLink = (router) => {
    const item = parsePath(router.asPath);
    setActiveLink(item);
  };

  useEffect(() => {
    console.log(router);
    console.log('calıstı aga ');
    handleLink(router);
  });

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
          stroke="currentColor"
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

  const blogIcon = (
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
          d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M15.3097 5.30981L18.7274 8.72755"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );

  const postIcon = (
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
          d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );

  const getIcon = (
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
          d="M9 18C9 18 9 21 12.0464 21C15.0929 21 15.0929 18 15.0929 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M6.99645 7.70578L5.46173 15.6192C5.22234 16.8536 6.16781 18 7.42514 18H9H15H16.5749C17.8322 18 18.7777 16.8535 18.5383 15.6192L17.0035 7.70578C17.0012 7.69359 16.999 7.68277 16.9962 7.67066C16.9263 7.36502 15.86 3 12 3C8.14005 3 7.0737 7.36501 7.00376 7.67066C7.00099 7.68277 6.99882 7.69359 6.99645 7.70578Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M20 7C19.5 5 19 4 18 3"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M4 7C4.5 5 5 4 6 3"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );

  return (
    <div className={`absolute left-0 h-[100vh] w-full bg-slate-100 `}>
      <div classname="flex flex-col text-white">
        <MenuItem
          icon={homeIcon}
          isActive={activeLink === '/'}
          title={'Home'}
          link={'/'}
        />
        <MenuItem
          icon={jobIcon}
          isActive={activeLink === 'jobs'}
          title={'Jobs'}
          link={'/jobs'}
        />
        <MenuItem
          icon={blogIcon}
          isActive={activeLink === 'blog'}
          title={'Blog'}
          link={'/blog'}
        />
        <MenuItem
          icon={getIcon}
          isActive={false}
          title={'Get Job Alerts'}
          link={'/'}
        />
        <MenuItem
          icon={postIcon}
          isActive={false}
          title={'Post a Job'}
          link={'/'}
        />
      </div>
    </div>
  );
};

export default Menu;
