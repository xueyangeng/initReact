import Request from './request'

export const fetchCreationList = async (page: number) => {
  const request = new Request();
  // 临时写一下，后面会改成配置文件
  const result = await request.get(`http://127.0.0.1:3333/api/creation/list`);
  return result;
}