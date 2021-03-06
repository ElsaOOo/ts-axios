export type Method = 'get' | 'GET' | 'delete' | 'DELETE'
| 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST'
| 'PUT' | 'put' | 'patch' | 'PATCH';

export interface AxiosRequestConfig {
  url: string;
  method?: Method;
  data?: any;
  params?: any;
}