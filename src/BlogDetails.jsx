import {useParams} from "react-router-dom"
import {blogposts} from "../blogposts"
import BackgroundHeader from "./component/BackgroundHeader";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

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
        <>
        <BackgroundHeader/>
        <Navbar/>
        <div>
            {blogDetailFilter.map((blog) =>
            <div key={blog.id}>
            <div className="max-w-main sm:max-w-[90%] mx-auto my-14 xl:my-8"></div>
            <div className="max-w-main sm:max-w-[90%] mx-auto flex justify-between pb-10 border-b border-drkborder sm:block">
                <div className="max-w-[800px]">
                    <h2 className="text-xl text-main dark:text-drktext">Blog Post</h2>
                    <h1 className="text-3xl text-main font-bold mt-3 mb-10 dark:text-white">{blog.title}</h1>
                    <div>
                        <p dangerouslySetInnerHTML={{__html: blog.content}} className="apply-blog-paragraph"></p>
                    </div>
                </div>
            <div className="mt-9 flex flex-col gap-6 justify-start">
            <div className="bg-white w-[393px] p-[35px] border border-stroke rounded-2xl sm:p-5 sm:max-w-full dark:bg-drksecondary dark:border-drkborder">
                <h3 className="font-inter text-main text-xl font-normal mb-1 dark:text-drktext">
                Date
                </h3>
                <h2 className="font-inter text-main text-2xl font-bold mb-1 dark:text-white">
                {blog.date}
                </h2>
            </div>
            <div className="bg-white w-[393px] p-[35px] border border-stroke rounded-2xl sm:p-5 sm:max-w-full dark:bg-drksecondary dark:border-drkborder">
                <h3 className="font-inter text-main text-xl font-normal mb-1 dark:text-drktext">
                Category
                </h3>
                <h2 className="font-inter text-main text-2xl font-bold mb-1 dark:text-white">
                Miscellaneous
                </h2>
            </div>
            </div>
            </div>
            </div>
            )}
        </div>
        <Footer/>
        </>
     );
}
 
export default BlogDetails;