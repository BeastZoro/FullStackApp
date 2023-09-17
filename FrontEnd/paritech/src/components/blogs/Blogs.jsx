import React from "react";
import blog1 from "../../assets/Images/blogs/blog1.jpg";
import blog2 from "../../assets/Images/blogs/blog2.jpg";
import blog3 from "../../assets/Images/blogs/blog3.jpg";

const Blogs = () => {
  const BlogsJson = [
    {
      image: blog1,
      date: new Date().getDate(),
      desc: "lorem ipsum data blog..",
    },
    {
      image: blog2,
      date: new Date().getDate(),
      desc: "lorem ipsum data blog..",
    },
    {
      image: blog3,
      date: new Date().getDate(),
      desc: "lorem ipsum data blog..",
    },
  ];
  return (
    <section className="my-[80px] flex flex-wrap gap-[20px] items-center justify-center">
        {
            BlogsJson.map((blog, index) =>{
                return <BlogCard key={index} blog={blog}/>
            } )
        }
    </section>
  );
};

export default Blogs;


const BlogCard = ({blog}) =>{

    const {image, date, desc} = blog
    return(
        <article className="text-center">
            <img src={image} alt="blog_image"/>
            <p className="text-gray-500 my-[20px]">20 september 2020</p>
            <h4 className="text-[1.2rem] font-semibold capitalize">{desc}</h4>
            <p>continue reading</p>
        </article>
    )
}