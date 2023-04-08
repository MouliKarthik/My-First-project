import React from 'react';
import { Link } from 'react-router-dom';
const Bloglist = ({blogs}) => {

    return ( 
    <div className="AllBlogs">
        
        {
        blogs.map( (blog) => 
                (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id} `}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        
                    </Link>
                </div>
                )
                )// eslint-disable-next-line
        }
    </div>
    )
}
 
export default Bloglist;