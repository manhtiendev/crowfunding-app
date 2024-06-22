import { defaultImage } from 'constants/global';
import React from 'react';

const CampAuthor = ({ image = defaultImage, author = 'Mahfuzul Nabil' }) => {
  return (
    <div className='flex items-center gap-x-3'>
      <img className='object-cover w-8 h-8 rounded-full' src={image} alt='avatar' />
      <p className='text-xs text-text3'>
        by <span className='font-semibold text-text2'>{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
