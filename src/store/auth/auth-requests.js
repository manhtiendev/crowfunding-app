const { default: axios } = require('api/axios');

export const requestAuthRegister = async (data) => {
  return await axios.post('/auth/register', { ...data });
};
