import { React, useState, useContext } from 'react';
import Button from './Button';
import Menu from './Menu';
import MenuButton from './MenuButton';
import { JobContext } from '@/contexts/JobContext';

const Nav = () => {
  const { isMenuOpen, updateMenu } = useContext(JobContext);

  return (
    <div className="bg-slate-950">
      <header className="container mx-auto">
        <nav className="xl:mx-20  mx-4 sm:mx-0 py-2 flex items-center justify-between">
          <span className="flex items-center gap-12">
            <h1 className="text-2xl text-slate-100">Xprompt |</h1>
            <span className=" gap-4 text-base text-xcolor-100 hidden sm:flex">
              <a href="/">Jobs</a>
              <a href="/">Blog</a>
            </span>
          </span>
          <span className="flex gap-5">
            <Button className="sm:block hidden border-none">
              Get Job Alerts
            </Button>
            <Button variant="secondary" className="hidden sm:block">
              Post a Job
            </Button>
            <MenuButton />
          </span>
        </nav>
        {isMenuOpen ? <Menu /> : null}
      </header>
    </div>
  );
};

export default Nav;
