import React, { Fragment } from 'react';
import CampImage from './parts/CampImage';
import CampCategory from './parts/CampCategory';
import CampTitle from './parts/CampTitle';
import CampDesc from './parts/CampDesc';
import CampMeta from './parts/CampMeta';
import { Button } from 'components/button';
import CampViewAuthor from './parts/CampViewAuthor';
import { defaultImage1 } from 'constants/global';
import CampaignSupport from './CampaignSupport';
import CampaignPerk from './CampaignPerk';
import CampaignGrid from './CampaignGrid';
import CampaignItem from './CampaignItem';

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className='h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center gradient-banner bg-opacity-40 mb-10 flex items-center justify-center text-white'
        style={{
          backgroundImage: `linear-gradient(179.14deg, rgba(32, 18, 63, 0) -7.14%, #000000), url(/banner.png)`,
        }}
      >
        <h1 className='text-[40px] font-bold'>Education</h1>
      </div>
      <div className='flex items-start gap-x-10 mb-8 w-full max-w-[1066px]'>
        <div className='flex-1'>
          <CampImage className='h-[398px] mb-8'></CampImage>
          <div className='flex justify-center gap-x-5'>
            {Array(4)
              .fill(0)
              .map((item) => (
                <img
                  src={defaultImage1}
                  className='w-[89px] h-[70px] rounded-lg object-cover'
                  alt=''
                />
              ))}
          </div>
        </div>
        <div className='max-w-[443px]'>
          <CampCategory text='Film' className='text-sm'></CampCategory>
          <CampTitle className='mb-4 text-xl font-bold'>
            Meet - AI Virtual Background 4K Webcam
          </CampTitle>
          <CampDesc className='mb-6 text-sm'>
            The first ever 4K webcam that embeded AI technology to protect your background during
            video calls.
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className='w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6'>
            <div className='w-2/4 h-full rounded-full bg-primary'></div>
          </div>
          <div className='flex items-start justify-between mb-4 gap-x-5'>
            <CampMeta size='big'></CampMeta>
            <CampMeta amount='173' text='Total backers' size='big'></CampMeta>
            <CampMeta amount='30' text='Days left' size='big'></CampMeta>
          </div>
          <Button kind='primary' className='w-full'>
            Back this project
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6'>
        <div className='flex items-center text-sm font-medium text-text3 gap-x-14'>
          <span className='cursor-pointer text-secondary'>Campaign</span>
        </div>
        <Button kind='primary'>Back this project</Button>
      </div>
      <div className='grid grid-cols-[1.3fr,1fr] mb-[70px] gap-x-[124px]'>
        <div></div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className='mb-[60px]'></div>
          <div className='flex flex-col gap-y-[30px]'>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className='mb-10 text-xl font-semibold'>You also may be interested in</h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
