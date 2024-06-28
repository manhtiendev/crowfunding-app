import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequiredAuthPage = ({ allowPermissions }) => {
  const { user } = useSelector((state) => state.auth);
  const userPermissions = user?.permissions || [];
  const location = useLocation();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user || !user.email) {
  //     navigate('/login');
  //   }
  // }, [user, navigate]);
  // if (!user || !user.email) {
  //   return null;
  // }
  return userPermissions?.some((p) => allowPermissions.includes(p)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to='/unauthorize' replace state={{ from: location }} />
  ) : (
    <Navigate to='/login' replace state={{ from: location }} />
  );
};

export default RequiredAuthPage;
