import React from 'react'

const JobCard = () => {
  return (
    <article className='p-2 border-b border-r border-gray-200 w-full lg:w-1/2 '>
        <div className='flex gap-10 hover:bg-slate-50 transition cursor-pointer  p-3 rounded-xl '>
        <div className='w-20 h-20 ml-2 my-3 bg-slate-300 hidden sm:block'></div>
        <div className='flex justify-between flex-grow w-auto'>
            <div className='gap-1 flex flex-col'>
                <span className='w-8 text-center block'>            
                <p className='text-sky-400 bg-sky-50 font-semibold text-xs'>New</p>
                </span>
                <p className='text-xcolor-900 font-bold text-xl'>Prompt Engineer</p>
                <p className='text-xcolor-700 font-medium text-base'>Company</p>
                <span className='flex gap-2 text-sm font-semibold text-xcolor-700'><p>Istanbul, Turkey</p> </span>
            </div>
            <div className='flex flex-col gap-4 pr-2 justify-center'>
                <p className='text-xs font-semibold text-xcolor-700'>Full Time</p>    
                <p className='text-xs font-medium text-xcolor-700'>April 30, 2023</p>    
            </div>            
        </div>
        </div>
    </article>
  )
}

export default JobCard