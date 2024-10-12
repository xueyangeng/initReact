import { getEndpoints } from '@/config';
import Request from '../services/request';

export const request = new Request({
  baseURL: getEndpoints(),
});
