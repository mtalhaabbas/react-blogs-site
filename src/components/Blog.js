import React from "react";
import { useParams } from "react-router-dom";
import Blogs from "./Blogs";
import blogs from "./BlogsContent";

const Blog = () => {
  let i = 1;
  const { name } = useParams();

  const blog = blogs.find((blog) => blog.slug === name);
  const other = blogs.filter(
    (other) => other.category === blog.category && other.slug !== blog.slug
  );

  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  {blog.category}
                </span>
                <span class="text-sm text-gray-500">29 July 2021</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-3xl font-medium text-gray-900 title-font mb-2">
                  {blog.title}
                </h2>
                <p class="leading-relaxed">{blog.summary}</p>
                <br></br>

                {blog.detail.map((b) => (
                  <>
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                      {i++}. {b.heading}
                    </h2>
                    <p class="leading-relaxed">{b.detail}</p>
                  </>
                ))}
              </div>
            </div>
            <br></br>
            <br></br>
            <h2 class="text-3xl font-medium text-gray-900 title-font mb-2">
                     Other {blog.category} Blogs
                    </h2>
                    <Blogs blog={other} />

          </div>

        </div>
      </section>

         

    </>
  );
};

export default Blog;
