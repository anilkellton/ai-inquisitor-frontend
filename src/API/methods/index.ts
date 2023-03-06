import clients from '../client';
const {api} = clients;
export default {
  post: (url:string, body:object) => {
    return api.post(url, body);
  },
  get: (url:string) => {
    return api.get(url);
  },
  put: (url:string, body:object) => {
    return api.put(url, body);
  },
  delete: (url:string) => {
    return api.delete(url);
  },
  patch: (url:string, body:object) => {
    return api.patch(url, body);
  },
};
