import React from 'react';
import { useDropdown } from './dropdown-context';

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className='absolute left-0 z-[1] w-full bg-whiteSoft max-h-[240px] overflow-y-auto rounded-lg shadow-sm top-full'>
          {children}
        </div>
      )}
    </>
  );
};

export default List;
