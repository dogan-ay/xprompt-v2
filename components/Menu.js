import { useLockBodyScroll } from '@uidotdev/usehooks';

const Menu = () => {
  useLockBodyScroll();

  return <div className={`absolute left-0 h-full w-full bg-[#020620]`}>a</div>;
};

export default Menu;
