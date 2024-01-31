import {useParams} from "react-router-dom"
import {blogposts} from "../blogposts"

const BlogDetails = () => {
    const {slug} = useParams();

    const blogDetailFilter = blogposts.filter(blogs =>
        blogs.slug === slug
      );

    //   const blogReturn = blogDetailFilter.map((blog) =>
    //     <div className="flex justify-between my-5" key={blog.id}>
    //         <a href={blog.slug}><h2 className="font-inter text-main font-normal text-lg sm:text-2xl dark:text-white">{blog.title}</h2></a>
    //         {/* <p className="font-inter text-main font-normal text-lg sm:text-2xl dark:text-drktext" dangerouslySetInnerHTML={{__html: blog.content}}></p> */}
    //         <p className="font-inter text-main font-normal text-lg sm:text-2xl dark:text-drktext">{blog.date}</p>
    //     </div>
    // )

    return ( 
        <h1>
            {blogDetailFilter.map((blog) =>
            <div>
                <h1>{blog.title}</h1>
                <h1>{blog.date}</h1>
                <h1>{blog.slug}</h1>
                <p dangerouslySetInnerHTML={{__html: blog.content}}></p>
            </div>
            )}
        </h1>
     );
}
 
export default BlogDetails;