import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import { RightArrow } from './icons/RightArrow';

const Button = (props) => {
  const { children, className, variant, onClick, arrow, onlyArrow } = props;
  const buttonClasses = classNames(
    'inline-flex',
    'items-center gap-2',
    'rounded-lg',
    'px-4',
    'font-medium',
    'cursor-pointer',
    variant === 'primary' ? 'text-white' : 'text-slate-900 hover:text-black',
    variant === 'primary'
      ? 'bg-slate-950 hover:bg-slate-900'
      : 'bg-slate-100 hover:bg-slate-200',
    className
  );

  return (
    <div className={buttonClasses} onClick={onClick}>
      {onlyArrow ? (
        <div className="py-[11px] stroke-none">
          <RightArrow />
        </div>
      ) : (
        <p
          className="pb-[11px]
     pt-[8px]"
        >
          {children}
        </p>
      )}
      {arrow ? (
        <div className="">
          <Image
            src="/icons/arrow-right.svg"
            width={16}
            height={16}
            alt="right arrow"
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  arrow: PropTypes.bool,
  onlyArrow: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  arrow: false,
};

export default Button;
