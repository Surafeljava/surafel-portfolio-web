import React, {useState} from "react";

import { FaChevronRight} from "react-icons/fa";

// import Developer from "../../asset/others/developer.svg";

function Contact() {

    const [messageSent, setMessageSent] = useState(false);

    return (
        <div id="contact" className="text-stone-300 w-full flex flex-col gap-2 md:px-20 mb-8 mt-10 font-roboto"> 
            <div className="font-bold text-5xl text-darker-2">
                Let's Chat
            </div>
            <br />
            <div className="flex w-full">
                <div className="grid grid-cols-6 gap-4 w-full">
                    
                    <div className="col-span-6 md:col-span4 lg:col-span-3 xl:col-span-2 flex flex-col gap-4">
                        {/* <div className="flex gap-4 w-full">
                            <input type="text" className="grow rounded-lg py-3 px-4 text-darker-1" placeholder="First Name" />
                            <input type="text" className="grow rounded-lg py-3 px-4 text-darker-1" placeholder="Last Name" />
                        </div> */}
                        <input type="text" className="rounded-lg py-3 px-4 text-darker-1" placeholder="Full name" />
                        <input type="email" className="rounded-lg py-3 px-4 text-darker-1" placeholder="Email" />
                        <textarea type="text" cols="30" rows="5" placeholder="Message" className="rounded-lg py-3 px-4 text-darker-1"/>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <div className="flex group items-center">
                                <FaChevronRight className='text-red-400 w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200'/>
                                <button onClick={() => {
                                    console.log("Sending Message");
                                    setMessageSent(true);
                                }}
                                className="px-6 py-2 rounded-lg font-roboto text-white text-md bg-darker-2 ml-0 group-hover:ml-2 group-hover:text-red-400 duration-200">
                                    Send Message
                                </button>
                            </div>
                            {messageSent && (
                            <div className="font-roboto text-darker-2 text-md">
                                Thank you for your message!
                            </div>)}
                        </div>
                    </div>

                    {/* <div className="hidden md:flex">
                        <img src={Developer} alt="dev" />
                    </div> */}
                    
                </div>

                
            </div>
        </div>
    );
}

export default Contact;