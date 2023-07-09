import Link from 'next/link';
import { useState } from 'react';

export default function MenuItem(props) {
  const [isActive, setIsActive] = useState(props.isActive ? true : false);
  return (
    <Link href={props.link}>
      <span
        className={`${
          isActive ? 'text-black bg-slate-200' : 'text-slate-800'
        } flex justify-between items-center py-2 px-4 m-2 rounded-xl`}
      >
        <p className={``}>{props.title}</p>
      </span>
    </Link>
  );
}
