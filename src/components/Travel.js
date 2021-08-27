import React from 'react'
import Blogs from './Blogs'
import blogs from './BlogsContent'
const Travel = () => {

const blog = blogs.filter(blog=>blog.category === "Travel")

  return (
        <div>
<Blogs blog={blog} />

        </div>
    )
}

export default Travel
