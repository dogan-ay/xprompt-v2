import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const { children, className, variant, onClick, arrow } = props;
  const buttonClasses = classNames(
    'inline-flex',
    'items-center gap-2',
    'border',
    'rounded-lg',
    'py-2',
    'px-4',
    'font-bold',
    'cursor-pointer',
    variant === 'primary' ? 'text-white' : 'text-xcolor-900',
    variant === 'primary' ? 'bg-xcolor-900' : 'bg-slate-200',
    variant === 'primary' ? 'border-xcolor-900' : 'border-slate-200',


    className
  );

  return (
    <p className={buttonClasses} onClick={onClick}>
      {children}
      {
        arrow ? 
        <svg
        class="h-6 w-6 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg> : ""
    }
    </p>
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