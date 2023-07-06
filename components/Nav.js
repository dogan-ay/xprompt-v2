import React from 'react'
import Button from './Button'
const Nav = () => {
  return (
    <header className='container mx-auto'>
        <nav className='xl:mx-20  mx-4 sm:mx-0 my-4 flex items-center justify-between'>
          <span className='flex items-center gap-12'>
              <h1 className='text-3xl'>Xprompt |</h1>
              <span className=' gap-4 text-base text-slate-500 hidden sm:flex'>
                  <a href='/' className='text-slate-950'>Jobs</a>
                  <a href='/'>Blog</a>
              </span>
          </span>
          <span className='flex gap-5'>
              <Button variant='secondary' className='sm:block hidden'>Get Job Alerts</Button>
              <Button className='hidden sm:block'>Post a Job</Button>
              <button
                  class="block rounded bg-gray-200 p-2.5 text-slate-900 transition hover:text-slate-900/75 sm:hidden"
                >
                  <span class="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

          </span>
      </nav>
    </header>
  )
}

export default Nav