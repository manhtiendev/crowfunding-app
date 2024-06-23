import React from 'react';
import { useController } from 'react-hook-form';

const Textarea = ({ control, name, placeholder = '', children, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <textarea
      placeholder={placeholder}
      className='w-full px-6 py-4 text-sm font-medium min-h-[140px] outline-none bg-transparent border resize-none rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white'
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
