import { useLockBodyScroll } from '@uidotdev/usehooks';
import Link from 'next/link';

const Menu = () => {
  useLockBodyScroll();

  return (
    <div className={`absolute left-0 h-full w-full bg-[#020620]`}>
      <div classname="flex flex-col text-white">
        <Link href="">
          <span className={``}>
            <p className="text-white py-2 px-4 m-2 bg-slate-950 rounded-xl">Home</p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
