import { React, useContext } from 'react';
import BlogCard from '../BlogCard';
import Button from '../Button';
import { JobContext } from '@/contexts/JobContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomeBlogPosts = () => {
  const { isMobile } = useContext(JobContext);

  return (
    <>
      {isMobile ? (
        <div className="w-full  my-10">
          <Swiper classname="w-full" slidesPerView={2.2} spaceBetween={20}>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
        </Swiper>
        </div>
      ) : (
        <section className="lg:grid lg:grid-cols-2 lg:gap-10 flex flex-col gap-8 my-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
      )}

      <div className="flex justify-center pt-4">
        <Button variant="secondary" arrow={true}>
          View All Posts
        </Button>
      </div>
    </>
  );
};

export default HomeBlogPosts;
