import React from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from 'components/common/ErrorComponent';

const ButtonGoogle = ({ text = 'Sign up with google', onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className='flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border dark:border-darkStroke text-text2 dark:text-white gap-x-3 border-strock rounded-xl'
    >
      <img srcSet='./icon-google.png 2x' alt='icon-google' />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
