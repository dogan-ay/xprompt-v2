export const MainCard = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:gap-4 mb-10">
      <div className="sm:w-96 flex flex-col gap-6 py-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-950">
          Lorem Ipsum Dolor Sit Amet
        </h1>
        <p className="text-md font-medium text-slate-800">
          Lorem ipsum dolor sit amei amet. Lorem ipum dolor sit amei amet lorem
          ipsum.
        </p>
      </div>
      <div className="bg-slate-200 grow rounded-lg">test</div>
    </section>
  );
};
