import dictionary from '../dictionary';
import methods from '../methods';

const { blog } = dictionary;
const { post, patch,get } = methods;

const BlogService = {
  lisingService: () => {
    const url = `${blog.BlogsURL()}`;
    console.log(url,'url')
    return get(url);
  },
  createBlogService: (body:any) => {
   return post(blog.BlogsURL(),body)
  },
  viewBlogService: (id:any) => {
      const url = `${blog.BlogsURL()}?id=${id}`;
      return get(url);
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
