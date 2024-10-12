import { request } from './base';

export interface UserLogin {
  username: string;
  password: string;
}

// 用户登录
export const userLogin = (data: UserLogin) =>
  request.post<string>('/login', { data });
