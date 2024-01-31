import BackgroundHeader from './component/BackgroundHeader';
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
        </>
     );
}
export default Homepage;