const Footer = () => {
    return ( 
        <div className="max-w-main sm:max-w-[90%] mx-auto flex justify-between my-10 sm:my-5">
            <a href="/" className="font-inter text-base sm:text-base text-main sm:hidden hover:text-secondary dark:hover:text-secondary dark:text-white">Danar Septiyanto</a>
            <div className="sm:mx-auto sm:text-center">
                <a className="font-inter text-base text-main hover:text-secondary dark:hover:text-secondary dark:text-white" href="https://www.instagram.com/danarsept/"><i className="ri-instagram-line"> </i>Instagram /</a>
                <a className="font-inter text-base text-main hover:text-secondary dark:hover:text-secondary dark:text-white" href="https://www.behance.net/danarandco"><i className="ri-behance-line"> </i>Behance /</a>
                <a className="font-inter text-base text-main hover:text-secondary dark:hover:text-secondary dark:text-white" href="https://twitter.com/AcceptableS0up"><i className="ri-twitter-line"> </i>Twitter /</a>
                <a className="font-inter text-base text-main hover:text-secondary dark:hover:text-secondary dark:text-white" href="https://api.whatsapp.com/send?phone=6289518631202"><i className="ri-whatsapp-line"> </i>WhatsApp</a>
            </div>
        </div>
     );
}
 
export default Footer;