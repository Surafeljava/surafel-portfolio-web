import React, {useState} from "react";

import { FaChevronRight} from "react-icons/fa";

function Contact() {

    const [messageSent, setMessageSent] = useState(false);

    return (
        <div id="contact" className="text-stone-300 w-full flex flex-col gap-2  px-20 mb-8 mt-10 font-roboto"> 
            <div className="font-bold text-5xl text-darker-2">
                Let's Chat
            </div>
            <br />
            <div className="flex">
                <div className="grid grid-cols-6 gap-4 w-full">
                    
                    <div className="col-span-2 flex flex-col gap-4">
                        <div className="flex gap-4 w-full">
                            <input type="text" className="grow rounded-lg py-3 px-4 text-darker-1" placeholder="First Name" />
                            <input type="text" className="grow rounded-lg py-3 px-4 text-darker-1" placeholder="Last Name" />
                        </div>
                        <input type="email" className="rounded-lg py-3 px-4 text-darker-1" placeholder="Email" />
                        <textarea type="text" cols="30" rows="5" placeholder="Message" className="rounded-lg py-3 px-4 text-darker-1"/>
                        <div className="flex items-center gap-4">
                            <div className="flex group items-center">
                                <FaChevronRight className='w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200'/>
                                <button onClick={() => {
                                    console.log("Sending Message");
                                    setMessageSent(true);
                                }}
                                className="px-10 py-3 rounded-lg font-roboto text-darker-1 text-md bg-yellow-1 ml-0 group-hover:ml-2 group-hover:bg-darker-1 group-hover:text-light-1 duration-200">
                                    Send Message
                                </button>
                            </div>
                            {messageSent && (
                            <div className="font-roboto text-darker-2 text-md">
                                Thank you for your message!
                            </div>)}
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Contact;