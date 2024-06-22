import { defaultImage1 } from 'constants/global';
import React from 'react';

const CampImage = ({ className = 'h-[158px]', image = defaultImage1 }) => {
  return (
    <div className={className}>
      <img src={image} alt='campImage' className='object-cover w-full h-full rounded-2xl' />
    </div>
  );
};

export default CampImage;
