const BlogDictionary = {
    BlogsURL: () => 'blog',
    ListingBlogsURL: (pageNumber:number) => {
      if(pageNumber){
        
      }
      return pageNumber?`blog?page=${pageNumber}`:1
    }
  };
  
  export default BlogDictionary;
  