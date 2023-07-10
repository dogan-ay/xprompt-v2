import React from 'react';
import Button from '../Button';

const EmployersCard = () => {
  return (
    <section className=" lg:mx-28 flex flex-col sm:flex-row justify-evenly items-center my-32 py-8 sm:py-10 px-8 lg:px-32 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="flex  flex-col sm:flex-col sm:items-start gap-6 sm:w-2/4">
        <div className="sm:hidden gap-2 flex items-center">
          <span>
            <h3 className="text-l text-neutral-200 pb-4">EMPLOYERS</h3>
            <h2 className="text-3xl text-neutral-100 font-bold">
              Looking to post a job?
            </h2>
          </span>

          <div className="h-36 w-auto overflow-hidden sm:hidden">
            <img className="w-full h-full object-cover " src="/demo.svg"></img>
          </div>
        </div>
        <h3 className="sm:text-2xl text-lg text-neutral-200 hidden sm:block">
          ✨ EMPLOYERS
        </h3>

        <h2 className="sm:text-4xl text-2xl text-neutral-100 font-bold hidden sm:block">
          Looking to post a job?
        </h2>
        <p className="text-neutral-300 sm:block hidden sm:w-3/4 font-medium text-lg">
          Lorem Ipsum dolor. Lorem Ipsum dolor. Lorem Ipsum dolor. Lorem Ipsum
          dolor.{' '}
        </p>

        <div className="mx-auto sm:mx-0">
          <Button
            className="bg-slate-100 hover:bg-slate-300"
            variant="secondary"
            arrow={true}
          >
            Post a Job
          </Button>
        </div>
      </div>
      <div className="lg:h-80 h-60 w-auto overflow-hidden hidden sm:block">
        <img className="w-full h-full object-cover " src="/demo.svg"></img>
      </div>
    </section>
  );
};

export default EmployersCard;
