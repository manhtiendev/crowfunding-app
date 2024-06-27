import { call, put } from 'redux-saga/effects';
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from './auth-requests';
import { toast } from 'react-toastify';
import { logOut, saveToken } from 'utils/auth';
import { authUpdateUser } from './auth-slice';

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
      yield call(handleAuthFetchMe, { payload: res.data.accessToken });
    }
  } catch (error) {
    const res = error.response.data;
    if (res.statusCode === 403) {
      toast.error(res.error.message);
      return;
    }
  }
}

function* handleAuthFetchMe({ payload }) {
  try {
    const res = yield call(requestAuthFetchMe, payload);
    // res.data
    if (res.status === 200) {
      yield put(
        authUpdateUser({
          user: res.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const res = yield call(requestAuthRefreshToken, payload);
    if (res.data) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      yield call(handleAuthFetchMe, {
        payload: res.data.accessToken,
      });
    } else {
      yield handleAuthLogOut();
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogOut() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  logOut();
}

export { handleAuthLogin, handleAuthFetchMe, handleAuthRefreshToken, handleAuthLogOut };
