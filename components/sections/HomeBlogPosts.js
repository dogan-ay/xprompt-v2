import React from 'react'
import BlogCard from '../BlogCard'
import Button from '../Button'

const HomeBlogPosts = () => {
  return (
    <>
    <section className='lg:grid lg:grid-cols-2 lg:gap-10 flex flex-col gap-8 my-10'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </section>
    <div className='flex justify-center pt-4'>
      <Button variant='secondary' arrow={true}>View All Posts</Button>
    </div>
    </>
  )
}

export default HomeBlogPosts