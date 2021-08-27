import React from 'react'
import Blogs from './Blogs'
import blogs from './BlogsContent'
const Technology = () => {

const blog = blogs.filter(blog=>blog.category === "Technology")

  return (
        <div>
<Blogs blog={blog} />

        </div>
    )
}

export default Technology
