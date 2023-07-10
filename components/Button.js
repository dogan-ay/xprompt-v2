import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';

const Button = (props) => {
  const { children, className, variant, onClick, arrow } = props;
  const buttonClasses = classNames(
    'inline-flex',
    'items-center gap-2',
    'border',
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
      <p
        className="pb-[10px]
    pt-[8px]"
      >
        {children}
      </p>
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  arrow: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  arrow: false,
};

export default Button;
