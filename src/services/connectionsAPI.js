import axios from 'axios';
import toast from 'react-hot-toast';
import { BASE_URL } from '../constans/constans';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const getCars = async (page = 1, thunkApi) => {
  try {
    const { data } = await instance.get(`advert?page=${page}&limit=12`);
    return data;
  } catch (error) {
    toast.error('Error fetch contacts');
    return thunkApi.rejectWithValue(error.message);
  }
};
