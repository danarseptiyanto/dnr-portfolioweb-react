const Footer = () => {
    return ( 
        <div class="max-w-main sm:max-w-[90%] mx-auto flex justify-between my-10 sm:my-5">
            <a href="/" class="font-inter text-base sm:text-base text-main sm:hidden hover:text-secondary dark:hover:text-secondary dark:text-white">Danar Septiyanto</a>
            <div class="sm:mx-auto sm:text-center">
                <a class="font-inter text-base text-main hover:text-secondary dark:hover:text-secondary dark:text-white" href="https://www.instagram.com/danarsept/"><i class="ri-instagram-line"> </i>Instagram /</a>
                <a class="font-inter text-base text-main hover:text-secondary dark:hover:text-secondary dark:text-white" href="https://www.behance.net/danarandco"><i class="ri-behance-line"> </i>Behance /</a>
                <a class="font-inter text-base text-main hover:text-secondary dark:hover:text-secondary dark:text-white" href="https://twitter.com/AcceptableS0up"><i class="ri-twitter-line"> </i>Twitter /</a>
                <a class="font-inter text-base text-main hover:text-secondary dark:hover:text-secondary dark:text-white" href="https://api.whatsapp.com/send?phone=6289518631202"><i class="ri-whatsapp-line"> </i>WhatsApp</a>
            </div>
        </div>
     );
}
 
export default Footer;