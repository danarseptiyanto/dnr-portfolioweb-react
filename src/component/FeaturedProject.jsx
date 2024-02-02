import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
const FeaturedProject = () => {
    return ( 
        <>
        <div className="max-w-main sm:max-w-[90%] mx-auto mt-20 mb-10 sm:mt-10 sm:mb-7">
            <h3 className="font-inter text-main font-medium text-4xl mb-3 sm:text-2xl dark:text-white" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">Featured Project</h3>
            <p className="font-inter text-main text-[15px] leading-6 dark:text-drktext" data-aos="fade-up" data-aos-duration="650" data-aos-once="true">Check out my past project, small or big, personal or freelance, bad or less bad. All mine!</p>
        </div>
        <div className="max-w-main sm:max-w-[90%] mx-auto">
            <div className="flex justify-between mb-16 sm:flex-col sm:mb-7" data-aos="fade-up" data-aos-duration="750" data-aos-once="true">
                <div className="w-[535px] sm:w-auto">
                    <p className="font-inter text-xl sm:text-base dark:text-drktext">Frontend Web Development</p>
                    <Link to="/project/belajareradigital-landing-page" onClick={() => {window.scroll(0, 0);}} className="font-inter font-medium text-[40px] hover:font-black leading-tight hover:text-secondary dark:hover:text-secondary sm:text-2xl dark:text-white">Belajar Era Digital Landing Page</Link>
                </div>
                <div className="apply-image-slider h-[450px] sm:hidden">
                <Carousel className='rounded-2xl'>
                    <img className='rounded-2xl' src="src/img/bed-1.jpg"/>
                    <img className='rounded-2xl' src="src/img/bed-2.jpg"/>
                    <img className='rounded-2xl' src="src/img/bed-3.jpg"/>
                </Carousel>
                </div>
                <Link to="/project/belajareradigital-landing-page"><img className="hidden apply-image-slider sm:block" src="src/img/bed-1.jpg"/></Link>
            </div>
            <div className="flex justify-between mb-16 sm:flex-col sm:mb-7" data-aos="fade-up" data-aos-duration="750" data-aos-once="true">
                <div className="w-[535px] sm:w-auto">
                    <p className="font-inter text-xl sm:text-base dark:text-drktext">Graphic Design</p>
                    <a href="" className="font-inter font-medium text-[40px] hover:font-black leading-tight hover:text-secondary dark:hover:text-secondary sm:text-2xl dark:text-white">Yearbook SMK Bina Nusantara</a>
                </div>
                <div className="apply-image-slider h-[450px] sm:hidden">
                <Carousel className='rounded-2xl'>
                    <img className='rounded-2xl' src="src/img/yearbook-1.jpg"/>
                    <img className='rounded-2xl' src="src/img/yearbook-2.jpg"/>
                    <img className='rounded-2xl' src="src/img/yearbook-3.jpg"/>
                </Carousel>
                </div>
                <a href=""><img className="hidden apply-image-slider sm:block" src="src/img/yearbook-1.jpg"/></a>
            </div>
            <div className="flex justify-between mb-16 sm:flex-col sm:mb-7" data-aos="fade-up" data-aos-duration="750" data-aos-once="true">
                <div className="w-[535px] sm:w-auto">
                    <p className="font-inter text-xl sm:text-base dark:text-drktext">Vector Portrait Illustration</p>
                    <a href="" className="font-inter font-medium text-[40px] hover:font-black leading-tight hover:text-secondary dark:hover:text-secondary sm:text-2xl dark:text-white">Vector Illustration Collection</a>
                </div>
                <div className="apply-image-slider h-[450px] sm:hidden">
                <Carousel className='rounded-2xl'>
                    <img className='rounded-2xl' src="src/img/vector-1.jpg"/>
                    <img className='rounded-2xl' src="src/img/vector-2.jpg"/>
                    <img className='rounded-2xl' src="src/img/vector-3.jpg"/>
                </Carousel>
                </div>
                <a href=""><img className="hidden apply-image-slider sm:block" src="src/img/vector-1.jpg"/></a>
            </div>
            <div className="flex justify-between mb-16 sm:flex-col sm:mb-7" data-aos="fade-up" data-aos-duration="750" data-aos-once="true">
                <div className="w-[535px] sm:w-auto">
                    <p className="font-inter text-xl sm:text-base dark:text-drktext">Graphic Design</p>
                    <a href="" className="font-inter font-medium text-[40px] hover:font-black leading-tight hover:text-secondary dark:hover:text-secondary sm:text-2xl dark:text-white">SMK Bina Nusantara Marketing Kit</a>
                </div>
                <div className="apply-image-slider h-[450px] sm:hidden">
                <Carousel className='rounded-2xl'>
                    <img className='rounded-2xl' src="src/img/binus-1.jpg"/>
                    <img className='rounded-2xl' src="src/img/binus-2.jpg"/>
                </Carousel>
                </div>
                <a href=""><img className="hidden apply-image-slider sm:block" src="src/img/binus-1.jpg"/></a>
            </div>
        </div>
        </>
     );
}
 
export default FeaturedProject;