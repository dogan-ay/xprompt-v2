import { React } from 'react';

const SectionTitle = (props) => {
  return (
    <div className="text-center  max-w-lg mx-auto pb-1">
      <h3 className="font-bold text-2xl md:text-3xl text-slate-700 pb-2">
        {props.title}
      </h3>
      <p className="text-slate-500 pb-1">{props.subtitle}</p>
    </div>
  );
};

export default SectionTitle;
