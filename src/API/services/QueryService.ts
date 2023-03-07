import dictionary from '../dictionary';
import methods from '../methods';

const { query } = dictionary;
const { post, patch,get } = methods;

const textService = {
    generateQueryService: (body:any) => {
        return post(query.QueryURL(),body)
       },
  // viewtextService: () => {
  //   return get(blog.viewBlogsURL());
  // }
//   deletetextService: (id) => {
// const url = `${auth.viewBLogsURL()}?id=${id}`;
// return delete(url);
//   }
};

export default textService;
