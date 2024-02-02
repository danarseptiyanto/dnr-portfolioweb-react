import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
    <div className="max-w-main sm:max-w-[90%] mx-auto">
    <nav className="">
    <div className="container mx-auto flex flex-wrap items-center justify-between mt-[67px] sm:mt-8 xl:mt-10">
        <Link to="/" className="flex" id="logo" >
            <img src="/src/img/logo-nav.svg" data-aos="fade-up" data-aos-duration="650" data-aos-once="true"/>
            <span className="self-center text-xl ml-2 text-main font-inter font-medium whitespace-nowrap dark:text-white" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">danarsept</span>
        </Link>
            <li className="flex">
                <button id="theme-toggle" type="button" className="mr-3 font-inter text-main text-xl font-medium dark:text-white">
                    <i id="theme-toggle-dark-icon" className="hidden ri-sun-line" fill="currentColor"></i>
                    <i id="theme-toggle-light-icon" className="hidden ri-contrast-2-line" fill="currentColor"></i>
                </button>
                <Flowbite>
                    <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                        <DarkThemeToggle />
                    </div>
                </Flowbite>
                <Dropdown label="" dismissOnClick={false} renderTrigger={() => <button className="font-inter text-main text-xl font-medium flex items-center justify-between w-full justify-items-center dark:text-white" data-aos="fade-up" data-aos-duration="850" data-aos-once="true">Menu</button>}>
                    <Dropdown.Item className='font-inter text-base dark:text-white'><a href="https://www.instagram.com/danarsept/">Instagram</a></Dropdown.Item>
                    <Dropdown.Item className='font-inter text-base dark:text-white'><a href="https://www.behance.net/danarandco">GitHub</a></Dropdown.Item>
                    <Dropdown.Item className='font-inter text-base dark:text-white'><a href="https://twitter.com/AcceptableS0up">Twitter</a></Dropdown.Item>
                    <Dropdown.Item className='font-inter text-base dark:text-white'><a href="https://api.whatsapp.com/send?phone=6289518631202">WhatsApp</a></Dropdown.Item>
                    <Dropdown.Item className='font-inter text-base dark:text-white'><a href="https://www.behance.net/danarandco">Behance</a></Dropdown.Item>
                </Dropdown>
                {/* <Dropdown label={<button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="font-inter text-main text-xl font-medium flex items-center justify-between w-full justify-items-center dark:text-white" data-aos="fade-up" data-aos-duration="850" data-aos-once="true">Menu</button>}> 
                <Dropdown.Item id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44 mt-[-160px]">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="https://www.instagram.com/danarsept/" className="text-xl font-inter text-main block px-4 py-2"><i className="ri-instagram-line mr-3"></i>Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/danarandco" className="text-xl font-inter text-main block px-4 py-2"><i className="ri-behance-line mr-3"></i>Behance</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/AcceptableS0up" className="text-xl font-inter text-main block px-4 py-2"><i className="ri-twitter-line mr-3"></i>Twitter</a>
                    </li>
                    </ul>
                    <div className="py-1">
                    <a href="https://api.whatsapp.com/send?phone=6289518631202" className="text-xl font-inter text-main block px-4 py-2"><i className="ri-whatsapp-line mr-3"></i>WhatsApp</a>
                    </div>
                </Dropdown.Item>
                </Dropdown> */}
            </li>
    </div>
    </nav>
    </div>
     );
}
 
export default Navbar;