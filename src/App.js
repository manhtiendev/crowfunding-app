import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route
          path='/'
          element={
            <div className='flex items-center justify-center h-screen'>
              <Link className='p-5 mr-2 bg-error' to='/sign-up'>
                Sign Up
              </Link>
              <Link className='p-5 bg-error' to='/sign-in'>
                Sign In
              </Link>
            </div>
          }
        ></Route>
        <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
