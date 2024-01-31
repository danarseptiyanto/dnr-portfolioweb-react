const FeaturedProject = () => {
    return ( 
        <>
        <div class="max-w-main sm:max-w-[90%] mx-auto mt-20 mb-10 sm:mt-10 sm:mb-7">
            <h3 class="font-inter text-main font-medium text-4xl mb-3 sm:text-2xl dark:text-white" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">Featured Project</h3>
            <p class="font-inter text-main text-[15px] leading-6 dark:text-drktext" data-aos="fade-up" data-aos-duration="650" data-aos-once="true">Check out my past project, small or big, personal or freelance, bad or less bad. All mine!</p>
        </div>
        <div className="max-w-main sm:max-w-[90%] mx-auto">
            <div className="flex justify-between mb-16 sm:flex-col sm:mb-7" data-aos="fade-up" data-aos-duration="750" data-aos-once="true">
                <div className="w-[535px] sm:w-auto">
                    <p className="font-inter text-xl sm:text-base dark:text-drktext">Frontend Web Development</p>
                    <a href="/blog-belajar-era-digital-porfolio.html" className="font-inter font-medium text-[40px] hover:font-black leading-tight hover:text-secondary dark:hover:text-secondary sm:text-2xl dark:text-white">Belajar Era Digital Landing Page</a>
                </div>
                <a href="/blog-belajar-era-digital-porfolio.html"><img className="apply-image-slider sm:block" src="src/img/bed-1.jpg"/></a>
            </div>
        </div>
        </>
     );
}
 
export default FeaturedProject;