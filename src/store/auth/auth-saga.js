import { takeLatest } from 'redux-saga/effects';
import { authRegister } from './auth-slice';
import handleAuthRegister from './auth-handlers';

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
}
