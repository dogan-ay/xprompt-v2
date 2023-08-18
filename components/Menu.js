import { useLockBodyScroll } from '@uidotdev/usehooks';
import Link from 'next/link';
import MenuItem from './MenuItem';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { BlogIcon } from './icons/BlogIcon';
import { JobIcon } from './icons/JobIcon';
import { Bell } from './icons/Bell';
import { Mail } from './icons/Mail';

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

  const postIcon = <Mail />;

  const getIcon = <Bell />;

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
          link={'/newsletter'}
        />
        <MenuItem
          icon={postIcon}
          isActive={activeLink === 'post'}
          title={'Post a Job'}
          link={'/post'}
        />
      </div>
    </div>
  );
};

export default Menu;
