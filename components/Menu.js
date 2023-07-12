import { useLockBodyScroll } from '@uidotdev/usehooks';
import Link from 'next/link';
import MenuItem from './MenuItem';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { BlogIcon } from './icons/BlogIcon';
import { JobIcon } from './icons/JobIcon';
import { Bell } from './icons/Bell';

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
    handleLink(router);
  });

  const jobIcon = <JobIcon />;

  const homeIcon = <HomeIcon />;

  const blogIcon = <BlogIcon />;

  const postIcon = <Bell />;

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
