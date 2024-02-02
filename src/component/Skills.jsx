const Skills = () => {
    return ( 
    <div className="max-w-main sm:max-w-[90%] mx-auto flex justify-between sm:block">
    <div className="flex flex-col justify-between">
        <div>
            <h3 className="font-inter text-main font-medium text-4xl mb-3 sm:text-2xl dark:text-white" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-anchor-placement="#logo">What I Do</h3>
            <p className="font-inter text-main max-w-[300px] text-[15px] leading-6 dark:text-drktext" data-aos="fade-up" data-aos-duration="500" data-aos-once="true" data-aos-anchor-placement="#logo">Here’s the thing that I do categorically from over the years and the software that I use on those project</p>
        </div>
        <a className="font-inter font-bold text-xl cursor-pointer sm:hidden dark:text-white" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-anchor-placement="#logo">More of it</a>
    </div>
    <div className="grid gap-[47px] grid-cols-2 max-w-[832px] sm:grid-cols-1 sm:gap-3 sm:my-4" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-anchor-placement="#logo">
        <div className="bg-white max-w-[393px] p-[35px] border border-stroke rounded-2xl sm:p-5 sm:max-w-max hover:bg-secondary dark:bg-drksecondary dark:border-drkborder dark:hover:bg-drkborder">
            <h3 className="font-inter text-main text-2xl font-medium mb-2 dark:text-white">Frontend Web Development</h3>
            <p className="font-inter text-main text-[15px] leading-6 dark:text-drktext">
                I was learning frontend web development since high school but have gotten to being serious about it since the end of 2023, I’ve made some project and even got a part time job out of it on those short period of time
            </p>
            <div className="flex mt-4">
                <img className="bg-stroke p-2 mr-2 rounded-md dark:bg-white" src="/img/icon-laravel.png"/>
                <img className="bg-stroke p-2 mr-2 rounded-md dark:bg-white" src="/img/icon-tailwind.png"/>
            </div>
        </div>
        <div className="bg-white max-w-[393px] p-[35px] border border-stroke rounded-2xl sm:p-5 sm:max-w-max hover:bg-secondary dark:bg-drksecondary dark:border-drkborder dark:hover:bg-drkborder">
            <h3 className="font-inter text-main text-2xl font-medium mb-2 dark:text-white">Graphic Design</h3>
            <p className="font-inter text-main text-[15px] leading-6 dark:text-drktext">
                I have a lot of history with graphic design since I’ve been doing it from the high school regularly until now. I have a lot of free time back then so I made a lot of stuff, whether just for fun or being paid as a freelancer
            </p>
            <div className="flex mt-4">
                <img className="bg-stroke p-2 mr-2 rounded-md dark:bg-white" src="/img/icon-corel.png"/>
                <img className="bg-stroke p-2 mr-2 rounded-md dark:bg-white" src="/img/icon-ps.png"/>
                <img className="bg-stroke p-2 mr-2 rounded-md dark:bg-white" src="/img/icon-ai.png"/>
            </div>
        </div>
        <div className="bg-white max-w-[393px] p-[35px] border border-stroke rounded-2xl sm:p-5 sm:max-w-max hover:bg-secondary dark:bg-drksecondary dark:border-drkborder dark:hover:bg-drkborder">
            <h3 className="font-inter text-main text-2xl font-medium mb-2 dark:text-white">UI Designer</h3>
            <p className="font-inter text-main text-[15px] leading-6 dark:text-drktext">
              The part I enjoy most from graphic design is layouting, that’s why when Learned about UI / UX, I have to try to dip my toe into it. Those personal project was fun, and eventually be very useful for my job as frontent web dev
            </p>
            <div className="flex mt-4">
                <img className="bg-stroke p-2 mr-2 rounded-md dark:bg-white" src="/img/icon-figma.png"/>
                <img className="bg-stroke p-2 mr-2 rounded-md dark:bg-white" src="/img/icon-ps.png"/>
            </div>
        </div>
        <div className="bg-white max-w-[393px] p-[35px] border border-stroke rounded-2xl sm:p-5 sm:max-w-max hover:bg-secondary dark:bg-drksecondary dark:border-drkborder dark:hover:bg-drkborder">
            <h3 className="font-inter text-main text-2xl font-medium mb-2 dark:text-white">Vector Portrait Illustration</h3>
            <p className="font-inter text-main text-[15px] leading-6 dark:text-drktext">
                Many hours of my high school life was just me fiddling with CorelDraw and making Vector Portrait Illustration, whether as a paid commission or just for fun. Im not particularly very good at it, but it was fun & relaxing
            </p>
            <div className="flex mt-4">
              <img className="bg-stroke p-2 mr-2 rounded-md dark:bg-white" src="/img/icon-corel.png"/>
              <img className="bg-stroke p-2 mr-2 rounded-md dark:bg-white" src="/img/icon-ps.png"/>
            </div>
        </div>
    </div>
    </div>
     );
}
 
export default Skills;