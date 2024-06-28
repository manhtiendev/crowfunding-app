import { useSelector } from 'react-redux';
import useRefreshToken from './useRefreshToken';
import { useEffect } from 'react';
import { axiosPrivate } from 'api/axios';

export default function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const reponseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(reponseInterceptor);
    };
  }, [auth.accessToken, refresh]);

  return axiosPrivate;
}
