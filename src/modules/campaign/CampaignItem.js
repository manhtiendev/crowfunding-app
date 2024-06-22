import { IconFolder } from 'components/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const CampaignItem = () => {
  return (
    <div>
      <div className='h-[158px]'>
        <img
          src='https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
          alt=''
          className='object-cover w-full h-full rounded-2xl'
        />
      </div>
      <div className='px-5 py-4'>
        <Link to='/' className='flex items-baseline mb-4 gap-x-3'>
          <IconFolder></IconFolder>
          <span className='text-xs font-medium text-text3'>Education</span>
        </Link>
        <h3 className='mb-1 font-semibold text-text1'>Powered Kits Learning Boxes</h3>
        <p className='mb-4 text-sm text-text3'>
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
        <div className='flex items-start justify-between mb-5 gap-x-5'>
          <div className='flex flex-col gap-y-1'>
            <h4 className='text-sm font-semibold text-text2'>$2,000</h4>
            <span className='text-xs text-text4'>Raised of $1,900</span>
          </div>
          <div className='flex flex-col gap-y-1'>
            <h4 className='text-sm font-semibold text-text2'>173</h4>
            <span className='text-xs text-text4'>Total backers</span>
          </div>
        </div>
        <div className='flex items-center gap-x-3'>
          <img className='object-cover w-8 h-8 rounded-full' src='/avatar.png' alt='avatar' />
          <p className='text-xs text-text3'>
            by <span className='font-semibold text-text2'>Manh Tien</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
