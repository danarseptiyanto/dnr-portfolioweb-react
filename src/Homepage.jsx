import BackgroundHeader from './component/BackgroundHeader';
import BlogList from './component/BlogList';
import FeaturedProject from './component/FeaturedProject';
import Navbar from './component/Navbar'
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
        <BlogList/>
        </>
     );
}
export default Homepage;