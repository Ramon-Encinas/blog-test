const BlogList = ({ blogs, title }) => {
    // const blogs = props.list;
    // const title = props.title;

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;


// Access the property values from the props object:
//
// const BlogList = (props) => {
//     const blogs = props.list; 
//     const title = props.title; }

// We can destructure the props object from 
//the BlogList component and use it in the 
//return statement without the needs of constants.

// const BlogList = ({blogs, title}) => {  }

