import React from 'react';

const DashboardSearch = () => {
  return (
    <div className='bg-white flex items-center rounded-full p-2 shadow-[10px_10px_20px_rgba(218,213,213,0.15)] w-full max-w-[458px]'>
      <div className='flex-1 px-5'>
        <input
          type='text'
          placeholder='Do fundrise now'
          className='w-full text-sm bg-transparent placeholder:text-text4 text-text1'
        />
      </div>
      <button className='w-[72px] rounded-full flex-shrink-0 bg-primary text-white h-10 flex items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardSearch;
