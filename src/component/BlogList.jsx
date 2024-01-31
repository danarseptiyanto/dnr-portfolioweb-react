import {blogposts} from "../../blogposts"
import { Link } from "react-router-dom";


const BlogList = () => {
    // const blogReturn = blogposts.map((blog) =>
    // <div className="flex justify-between my-5" key={blog.id}>
    //     <a href={blog.slug}><h2 className="font-inter text-main font-normal text-lg sm:text-2xl dark:text-white">{blog.title}</h2></a>
    //     {/* <p className="font-inter text-main font-normal text-lg sm:text-2xl dark:text-drktext" dangerouslySetInnerHTML={{__html: blog.content}}></p> */}
    //     <p className="font-inter text-main font-normal text-lg sm:text-2xl dark:text-drktext">{blog.date}</p>
    // </div>
    // )
    return ( 
        <div className="max-w-main mx-auto sm:max-w-[90%]" >
        <div className="max-w-main mx-auto mt-20 mb-10 sm:mt-10 sm:mb-7">
            <h3 className="font-inter text-main font-medium text-4xl mb-3 sm:text-2xl dark:text-white" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">Blog Post</h3>
            <p className="font-inter text-main text-[15px] leading-6 dark:text-drktext" data-aos="fade-up" data-aos-duration="650" data-aos-once="true">Check out my past project, small or big, personal or freelance, bad or less bad. All mine!</p>
        </div>
        {blogposts.map((blog) =>
            <div className="flex justify-between my-5 pb-3 border-b border-drkborder sm:block" key={blog.id}>
            <Link to={`blog/${blog.slug}`}><h2 className="font-inter text-main font-normal text-lg dark:text-white">{blog.title}</h2></Link>
                <p className="font-inter text-main font-normal text-lg dark:text-drktext">{blog.date}</p>
            </div>
        )}
        </div>
     );
}
 
export default BlogList;