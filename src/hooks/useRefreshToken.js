import axios from 'api/axios';
import { authUpdateUser } from 'store/auth/auth-slice';
import { getToken, saveToken } from 'utils/auth';

export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken();
    if (!refresh_token) return null;
    const res = await axios.post('/token', {
      'Content-Type': 'application/json',
      refreshToken: refresh_token,
    });
    saveToken(res?.data.accessToken, res?.data.refreshToken);
    authUpdateUser((prev) => ({ ...prev, accessToken: res?.data.accessToken }));
    return res?.data.accessToken || '';
  }
  return refresh;
}
