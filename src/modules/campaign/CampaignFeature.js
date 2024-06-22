import React from 'react';
import CampImage from './parts/CampImage';
import CampCategory from './parts/CampCategory';
import CampTitle from './parts/CampTitle';
import CampDesc from './parts/CampDesc';
import CampMeta from './parts/CampMeta';

const CampaignFeature = () => {
  return (
    <div className='flex items-center gap-x-[30px] w-full max-w-[1048px]'>
      <CampImage className='h-[266px] flex-1'></CampImage>
      <div className='max-w-[435px]'>
        <CampCategory text='Architecture' className='text-sm'></CampCategory>
        <CampTitle className='mb-4 text-xl font-bold'>
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className='mb-6 text-sm'>
          Remake - We Make: an exhibition about architecture's social agency in the face of
          urbanisation
        </CampDesc>
        <div className='w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6'>
          <div className='w-2/4 h-full rounded-full bg-primary'></div>
        </div>
        <div className='flex items-start justify-between gap-x-5'>
          <CampMeta size='big'></CampMeta>
          <CampMeta amount='173' text='Total backers' size='big'></CampMeta>
          <CampMeta amount='30' text='Days left' size='big'></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
