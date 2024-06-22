import React from 'react';
import DashboardSearch from './DashboardSearch';
import { Button } from 'components/button';
import DashboardFund from './DashboardFund';

const DashboardTopbar = () => {
  return (
    <div className='flex items-center justify-between mb-8'>
      <div className='flex items-center flex-1 gap-x-10'>
        <img srcSet='/logo.png 2x' alt='crowfunding-app' />
        <div className='w-full max-w-[458px]'>
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className='flex items-center justify-end flex-1 gap-x-10'>
        <DashboardFund></DashboardFund>
        <Button type='button' className='bg-secondary px-7'>
          Start a campain
        </Button>
        <img src='/avatar.png' alt='avatar' className='object-cover rounded-full h-14 w-14' />
      </div>
    </div>
  );
};

export default DashboardTopbar;
