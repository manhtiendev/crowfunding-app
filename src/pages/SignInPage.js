import useToggleValue from 'hooks/useToggleValue';
import React from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import FormGroup from 'components/common/FormGroup';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { IconEyeToggle } from 'components/icons';
import { Button, ButtonGoogle } from 'components/button';
import { useDispatch } from 'react-redux';
import { authLogin } from 'store/auth/auth-slice';

const schema = yup.object({
  email: yup.string().email('Invalid email address').required('This field is required'),
  password: yup.string().required('This field is required').min(8, 'Password must be 8 character'),
});

const SignInPage = () => {
  const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();

  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };

  return (
    <LayoutAuthentication heading='Welcome Back!'>
      <p className='mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3'>
        Dont have an account?{' '}
        <Link to='/register' className='font-medium underline text-primary'>
          Sign up
        </Link>
      </p>
      <ButtonGoogle text='Sign in with google'></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor='email'>Email *</Label>
          <Input
            control={control}
            name='email'
            placeholder='example@gmail.com'
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup htmlFor='password'>
          <Label>Password *</Label>
          <Input
            control={control}
            type={`${showPassword ? 'text' : 'password'}`}
            name='password'
            placeholder='Enter Password'
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className='text-right'>
            <span className='inline-block text-sm font-medium text-primary'>Forgot password</span>
          </div>
        </FormGroup>
        <Button kind='primary' type='submit' className='w-full'>
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
