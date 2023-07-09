import Link from 'next/link';
import { useState } from 'react';

export default function MenuItem(props) {
  const [isActive, setIsActive] = useState(props.isActive ? true : false);
  return (
    <Link href={props.link}>
      <span
        className={`${
          isActive ? 'text-black' : 'text-slate-800 bg-opacity-25 border border-slate-300'
        } flex justify-between items-center py-2 px-4 m-2 rounded-xl bg-slate-200`}
      >
        <p className={``}>{props.title}</p>
      </span>
    </Link>
  );
}
