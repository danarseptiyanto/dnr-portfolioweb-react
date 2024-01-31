import BackgroundHeader from './component/BackgroundHeader';
import BlogList from './component/BlogList';
import FeaturedProject from './component/FeaturedProject';
import Footer from './component/Footer';
import Navbar from './component/Navbar'
import OtherProject from './component/OtherProject';
import Skills from './component/Skills';
import TextHeader from './component/TextHeader';

const Homepage = () => {
    return (
        <>
        <BackgroundHeader/>
        <Navbar/>
        <TextHeader/>
        <Skills/>
        <FeaturedProject/>
        <OtherProject/>
        <BlogList/>
        <Footer/>
        </>
     );
}
export default Homepage;