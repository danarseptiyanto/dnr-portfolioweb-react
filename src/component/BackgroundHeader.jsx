const BackgroundHeader = () => {
    return ( 
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[10px]" aria-hidden="true">
    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#FC4951] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>
     );
}
 
export default BackgroundHeader;