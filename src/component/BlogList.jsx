import {blogposts} from "../../blogposts"
import {dangerouslySetInnerHTML} from "react"
const BlogList = () => {
    const blogReturn = blogposts.map((blog) =>
    <div className="flex justify-between my-5" key={blog.id}>
        <a href={blog.slug}><h2 className="font-inter text-main font-normal text-lg sm:text-2xl dark:text-white">{blog.title}</h2></a>
        {/* <p className="font-inter text-main font-normal text-lg sm:text-2xl dark:text-drktext" dangerouslySetInnerHTML={{__html: blog.content}}></p> */}
        <p className="font-inter text-main font-normal text-lg sm:text-2xl dark:text-drktext">{blog.date}</p>
    </div>
    )
    return ( 
        <>
        <div className="max-w-main sm:max-w-[90%] mx-auto mt-20 mb-5 sm:mt-10 sm:mb-10">
            <h3 className="font-inter text-main font-medium text-4xl mb-3 sm:text-2xl dark:text-white" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">Recent Blog</h3>
        </div>
        <div className="max-w-main mx-auto mb-7">
            {blogReturn}
        </div>
        </>
     );
}
 
export default BlogList;