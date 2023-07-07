import { React, useState, useContext } from 'react';
import { JobContext } from '@/contexts/JobContext';
import Button from './Button';
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
            <button
              class="block rounded bg-[#020625] p-2.5 text-xcolor-100 transition sm:hidden"
              onClick={() => updateMenu()}
            >
              <span class="sr-only">Toggle menu</span>
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
            </button>
          </span>
        </nav>
        <div
          className={`absolute  left-0 transition h-full w-full bg-[#020620]`}
        >
          {isMenuOpen ? 'acık' : 'kapalı'}
        </div>
      </header>
    </div>
  );
};

export default Nav;
