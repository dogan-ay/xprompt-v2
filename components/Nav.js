import { React, useState, useContext } from 'react';
import Button from './Button';
import Menu from './Menu';
import MenuButton from './MenuButton';
import { JobContext } from '@/contexts/JobContext';
import Link from 'next/link';

const Nav = () => {
  const { isMenuOpen, updateMenu } = useContext(JobContext);

  return (
    <div
      className={`${
        isMenuOpen ? '' : 'bg-opacity-50'
      } bg-slate-100 fixed top-0 left-0 w-full z-50 backdrop backdrop-blur-lg shadow-sm`}
    >
      <header className="container mx-auto">
        <nav className="xl:mx-20  mx-4 sm:mx-0 py-2 flex items-center justify-between">
          <span className="flex items-center gap-12">
            <h1 className="text-2xl text-slate-900">Xprompt |</h1>
            <span className=" gap-4 text-base text-slate-700 font-medium hidden sm:flex">
              <Link href="/jobs">
                <p className="text-black">Jobs</p>
              </Link>
              <Link href="/blog">
                <p className="text-black">Blog</p>
              </Link>
            </span>
          </span>
          <span className="flex gap-5">
            <Link href="/newsletter">
              <Button variant="secondary" className="sm:block hidden">
                Get Job Alerts
              </Button>
            </Link>
            <Link href="/post">
              <Button className="hidden sm:block">Post a Job</Button>
            </Link>
            <MenuButton />
          </span>
        </nav>
        {isMenuOpen ? <Menu /> : null}
      </header>
    </div>
  );
};

export default Nav;
