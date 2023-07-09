import { useLockBodyScroll } from '@uidotdev/usehooks';
import Link from 'next/link';
import MenuItem from './MenuItem';

const Menu = () => {
  useLockBodyScroll();

  return (
    <div
      className={`absolute left-0 h-[100vh] w-full bg-slate-100 bg-opacity-95`}
    >
      <div classname="flex flex-col text-white">
        <MenuItem isActive={true} title={'Home'} link={'/'} />
        <MenuItem isActive={false} title={'Jobs'} link={'/jobs'} />
      </div>
    </div>
  );
};

export default Menu;
