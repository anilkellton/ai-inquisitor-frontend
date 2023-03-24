import dictionary from '../dictionary';
import methods from '../methods';

const { query } = dictionary;
const { post, patch,get } = methods;

const textService = {
    generateQueryService: (body:any) => {
        return post(query.QueryURL(),body)
       },
    saveResponseService:(body:any)=>{
      return post(query.SaveURL(),body)
    },
    getBlogService:(id:any)=>{
      return get(`${query.GetUrl()}${id}`)
    }   
  // viewtextService: () => {
  //   return get(blog.viewBlogsURL());
  // }
//   deletetextService: (id) => {
// const url = `${auth.viewBLogsURL()}?id=${id}`;
// return delete(url);
//   }
};

export default textService;
