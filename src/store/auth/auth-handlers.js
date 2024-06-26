import { call } from 'redux-saga/effects';
import { requestAuthLogin, requestAuthRegister } from './auth-requests';
import { toast } from 'react-toastify';
import { saveToken } from 'utils/auth';

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success('Create new account successfully');
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogin({ payload }) {
  try {
    const res = yield call(requestAuthLogin, payload);
    if (res.data.accessToken && res.data.refreshToken) {
      saveToken(res.data.accessToken, res.data.refreshToken);
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleAuthLogin };
