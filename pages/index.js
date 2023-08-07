import BlogCard from '@/components/BlogCard';
import Button from '@/components/Button';
import Nav from '@/components/Nav';
import SectionTitle from '@/components/SectionTitle';
import EmployersCard from '@/components/sections/EmployersCard';
import FeaturedJobs from '@/components/sections/FeaturedJobs';
import HeroSection from '@/components/sections/HeroSection';
import HomeBlogPosts from '@/components/sections/HomeBlogPosts';
import NewsCard from '@/components/sections/NewsCard';
import { MainCard } from '@/components/sections/MainCard';
export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mx-4 md:m-0">
          <HeroSection />
          <SectionTitle
            title={'🔥 Featured Jobs'}
            subtitle={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'}
          />
          <FeaturedJobs />
        </div>
      </div>

      <MainCard />

      <div className="container mx-auto">
        <SectionTitle
          title={'🌈 Latest Articles'}
          subtitle={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'}
        />
        <HomeBlogPosts />
        <NewsCard />
      </div>
    </>
  );
}
