import BackgroundHeader from "../BackgroundHeader";
import Footer from "../Footer";
import Navbar from "../Navbar";

const BedLandingPage = () => {
    return ( 
        <>
        <BackgroundHeader/>
        <Navbar/>
        <BedLandingPageContent/>
        <Footer/>
        </>
     );
}

const BedLandingPageContent = () => {
    return ( 
        <>
  <div className="max-w-main sm:max-w-[90%] mx-auto my-14 xl:my-8">
    <img
      className="rounded-2xl object-cover xl:w-full xl:h-1/2 sm:hidden"
      src="../src/img/blog-opener2.jpg"
    />
    <img
      className="hidden rounded-2xl sm:block"
      src="../src/img/blog-opener2.jpg"
    />
  </div>
  <div className="max-w-main sm:max-w-[90%] mx-auto flex justify-between pb-10 border-b border-drkborder sm:block">
    <div className="max-w-[800px]">
      <h2 className="text-xl text-main dark:text-drktext">Portolio Project</h2>
      <h1 className="text-3xl text-main font-bold mt-1 mb-5 dark:text-white">
        Belajar Era Digital Landing Page
      </h1>
      <div>
        <p className="apply-blog-paragraph">
          Hey there, digital enthusiasts! I'm stoked to spill the beans about
          Belajar Era Digital, the brainchild of yours truly. Picture this: a
          one-stop-shop for all your digital cravings, whether you're diving
          into coding, getting cozy with graphic design, or figuring out the
          secrets of social media sorcery.
        </p>
        <p className="apply-blog-paragraph">
          Belajar Era Digital is not your grandma's learning website – it's a
          vibrant, tech-savvy playground designed to make you go "Aha!" and not
          "Ugh." We've ditched the snooze-worthy lectures and dusty textbooks,
          opting instead for a hip, easy-to-navigate setup. It's like YouTube
          meets your favorite online game, but instead of leveling up
          characters, you're leveling up your digital skills. Trust me, you're
          gonna want to buckle up for this ride through the digital cosmos –
          where learning is fun, and boredom is so last season!{" "}
        </p>
        <div className="mt-8">
          <img src="../src/img/bed-1.jpg" />
          <img src="../src/img/bed-2.jpg" />
          <img src="../src/img/bed-3.jpg" />
        </div>
      </div>
    </div>
    <div className="mt-9 flex flex-col gap-6 justify-start">
      <div className="bg-white w-[393px] p-[35px] border border-stroke rounded-2xl sm:p-5 sm:max-w-full dark:bg-drksecondary dark:border-drkborder">
        <h3 className="font-inter text-main text-xl font-normal mb-1 dark:text-drktext">
          Date
        </h3>
        <h2 className="font-inter text-main text-2xl font-bold mb-1 dark:text-white">
          December 2023
        </h2>
      </div>
      <div className="bg-white w-[393px] p-[35px] border border-stroke rounded-2xl sm:p-5 sm:max-w-full dark:bg-drksecondary dark:border-drkborder">
        <h3 className="font-inter text-main text-xl font-normal mb-1 dark:text-drktext">
          Category
        </h3>
        <h2 className="font-inter text-main text-2xl font-bold mb-1 dark:text-white">
          Web Development
        </h2>
      </div>
    </div>
  </div>
</>
     );
}
 
export default BedLandingPage;