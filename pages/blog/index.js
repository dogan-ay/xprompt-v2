import PageBlogCard from '@/components/PageBlogCard';

export default function BlogPage() {
  return (
    <div className="container mx-auto">
      <div className="mx-4 sm:m-0">
        <section className="md:grid md:grid-cols-2 md:gap-10 flex flex-col gap-8 my-10">
          <PageBlogCard />
          <PageBlogCard />
          <PageBlogCard />
          <PageBlogCard />
        </section>
      </div>
    </div>
  );
}
