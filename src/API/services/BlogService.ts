import dictionary from '../dictionary';
import methods from '../methods';

const { blog } = dictionary;
const { post, patch,get } = methods;

const BlogService = {
  viewBlogService: () => {
    const url = `${blog.BlogsURL()}`;
    console.log(url,'url')
    return get(url);
  },
  createBlogService: (body:any) => {
   return post(blog.BlogsURL(),body)
  },
  // viewBlogService: () => {
  //   return get(blog.viewBlogsURL());
  // }
//   deleteBlogService: (id) => {
// const url = `${auth.viewBLogsURL()}?id=${id}`;
// return delete(url);
//   }
};

export default BlogService;
