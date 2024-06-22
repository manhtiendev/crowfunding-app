import React from 'react';
import { IconFolder } from 'components/icons';
import { Link } from 'react-router-dom';
import classNames from 'utils/classNames';

const CampCategory = ({ text = 'Education', className = 'text-xs' }) => {
  return (
    <Link
      to='/'
      className={classNames('font-medium items-baseline mb-4 gap-x-3 flex text-text3', className)}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
