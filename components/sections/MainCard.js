import Image from 'next/image';

export const MainCard = () => {
  return (
    <section className="w-full bg-slate-900">
      <div className="max-w-lg mx-auto text-center flex flex-col gap-8 py-20 mb-10 px-4 sm:px-0">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-200 via-sky-300 to-blue-500 bg-clip-text text-transparent">
          Lorem ipsum dolor sit. Lorem ipsum amet.
        </h1>
        <p className="text-lg sm:text-xl font-medium text-slate-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
        <span className="flex items-center justify-center text-xl font-medium  text-cyan-400 cursor-pointer">
          <p className="pb-[5px] pr-1">Post a Job</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <polygon
                fill="currentColor"
                fill-rule="evenodd"
                points="9.586 8 4.293 2.707 5.707 1.293 12.414 8 5.707 14.707 4.293 13.293"
              />
            </svg>
          </span>
        </span>
      </div>
    </section>
  );
};
