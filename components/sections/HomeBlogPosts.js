import { React, useContext } from 'react';
import BlogCard from '../BlogCard';
import Button from '../Button';
import { JobContext } from '@/contexts/JobContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomeBlogPosts = () => {
  const { isMobile } = useContext(JobContext);
  const breakpoints = {
    625: {
      slidesPerView: 3.1,
    },
    575: {
      slidesPerView: 2.9,
    },
    525: {
      slidesPerView: 2.7,
    },
    475: {
      slidesPerView: 2.5,
    },
    425: {
      slidesPerView: 2.2,
    },
    375: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1.8,
    },
    325: {
      slidesPerView: 1.7,
    },
    300: {
      slidesPerView: 1.5,
    },
    275: {
      slidesPerView: 1.4,
    },
    250: {
      slidesPerView: 1.2,
    },
  };
  return (
    <>
      {isMobile ? (
        <div className="w-full  my-10">
          <Swiper
            classname="w-full"
            slidesPerView={1}
            breakpoints={breakpoints}
          >
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
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
