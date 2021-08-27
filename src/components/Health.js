import React from 'react'
import Blogs from './Blogs'
import blogs from './BlogsContent'
const Health = () => {

const blog = blogs.filter(blog=>blog.category === "Health")

  return (
        <div>
<Blogs blog={blog} />

        </div>
    )
}

export default Health
