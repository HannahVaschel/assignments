import React from 'react'
import BlogPost from './BlogPost.js'

const BlogList = props => {
    
    const mappedBlogs = props.blogArr.map((post, i) => <BlogPost 
                                                            key={i}
                                                            title={post.title}
                                                            subtitle={post.subTitle}
                                                            author={post.author}
                                                            date={post.date}/>)

    return(
        <div className="blog-list">
            {mappedBlogs}
        </div>
    )
}

export default BlogList