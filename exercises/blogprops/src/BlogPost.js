import React from 'react'

const BlogPost = props => {
    return(
        <div className="post-div">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p className="tagline">Posted by <span className="tag-author">{props.author}</span> on {props.date}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost