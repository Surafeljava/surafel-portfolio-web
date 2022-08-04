import { FaChevronRight } from "react-icons/fa";

function Contact() {
    return (
        <div id="contact" className="text-stone-300 w-full flex flex-col gap-2  px-20 mb-8 mt-10 font-roboto"> 
            <div className="text-2xl md:text-4xl text-darker-2 font-roboto font-bold group tracking-widest mx-0 flex items-center gap-2 mb-8 md:py-8 md:px-4 md:w-full md:bg-gradient-to-r md:from-darker-tr md:to-light-1 md:border-l-2 md:border-red-500"> 
                <FaChevronRight className="text-transparent group-hover:text-red-500 font-normal text-sm group-hover:text-xl md:text-2xl inline -ml-8 group-hover:ml-0 duration-500"/> 
                Let's Chat
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold text-slate-600">
                    +251 942 85 97 23
                </div>
                <div className="text-md font-normal text-slate-500">
                    Addis Ababa, Ethiopia
                </div>
                <div className="flex my-8">
                    <div className="flex group items-center">
                        <FaChevronRight className='w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200'/>
                        <a href="mailto:surafel.mulaw@gmail.com" 
                        className="px-4 py-2 rounded-lg font-roboto text-darker-1 text-md bg-yellow-1 ml-0 group-hover:ml-2 group-hover:bg-darker-1 group-hover:text-light-1 duration-200">
                            Send an Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;