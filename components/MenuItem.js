import Link from 'next/link';
import { useState } from 'react';

export default function MenuItem(props) {
  const [isActive, setIsActive] = useState(props.isActive ? true : false);
  return (
    <Link href={props.link}>
      <span className={`${isActive ? 'text-white' : 'text-slate-200'}`}>
        <p
          className={`${
            isActive ? 'bg-slate-900' : ''
          } py-2 px-4 m-2 rounded-xl`}
        >
          {props.title}
        </p>
      </span>
    </Link>
  );
}
