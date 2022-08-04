import React, {useState} from 'react';

import { FaChevronRight, FaAngleRight, FaGithub } from "react-icons/fa";
// FaCodeBranch

const works = [
    {id: 1, name: "EQUB Financial Tech.", title: "Senior Front-End Developer", link: "https://www.equb.app/", from: "March 2021", to: "April 2022", idid: "Working to bring the traditional Ethiopian saving system (EQUB) to the mobile and web world. I am using Flutter to develop both web and mobile applications. "},
    {id: 2, name: "Africrowds", title: "Web Front-End Developer", link: "https://africrowds.netlify.app/", from: "December 2021", to: "June 2022", idid: "I worked on a crow funding platform for startups in Africa. I am using Reactjs with TypeScript for the development of the website."},
    {id: 3, name: "Chapa", title: "Front-End Developer & UI/UX Designer", link: "https://chapa.co/", from: "Dec 2021", to: "April 2022", idid: "A Fintech startup working to bring a better digital payment system for the developers and service places in Ethiopia. I used Reactjs and ReactNative while working in this company."},
    {id: 4, name: "GDG Addis", title: "Creative Design Team Leader", link: "https://www.gdgaddis.dev/", from: "Sep 2018", to: "Present", idid: "Google Developers Group in Addis Ababa."},
    {id: 5, name: "Upwork", title: "Web Full-stack Developer", link: "upwork.com", from: "Aug 2021", to: "Present", idid: "Mobile and web app development..."}
];

function Work(){

    const [selectedWork, setSelectedWork] = useState(1);

    return (
        <div id="work" className="text-stone-300 w-full grow grid grid-cols-12 gap-4 justify-center md:py-8 md:px-12 md:mb-32">

            {/* <div className="col-span-12 md:col-span-2 flex justify-center items-center -rotate-90 text-slate-500 text-8xl font-bold">
            </div> */}

            <div className="w-full col-span-12 md:col-span-10 flex flex-col md:px-6 text-darker-2 rounded-xl items-start">
                <div className="text-2xl md:text-4xl text-darker-2 font-roboto font-bold group tracking-widest mx-0 flex items-center gap-2 mb-8 md:py-8 md:px-4 md:w-full md:bg-gradient-to-r md:from-darker-tr md:to-light-1 md:border-l-2 md:border-red-500"> 
                    <FaChevronRight className="text-transparent group-hover:text-red-500 font-normal text-sm group-hover:text-xl md:text-2xl inline -ml-8 group-hover:ml-0 duration-500"/> 
                    Where I've Worked 
                </div>
                <div className="w-full grid grid-cols-12 grid-flow-row gap-4">
                    <div className="col-span-12 md:col-span-2 w-full flex grow md:flex-col font-roboto font-normal text-md gap-4 overflow-scroll md:overflow-auto">

                        {works.map((work) => {
                            return (
                                <button onClick={() => setSelectedWork(work.id)} id={work.id} 
                                className={"py-4 flex gap-4 justify-start items-center px-4 hover:bg-darker-tr duration-200 group text-sm md:text-md" + 
                                (work.id===selectedWork ? " text-red-500 border-l-2 border-red-500 bg-white" : " text-slate-800")}>
                                    <FaAngleRight className='inline -ml-4 invisible group-hover:visible group-hover:ml-0 duration-200'/>
                                    {work.name}
                                </button>
                            );
                        })}
                        
                    </div>

                    {/* Work Images Here */}
                    <div className="col-span-4 w-full h-full bg-darker-tr rounded-lg">

                    </div>

                    <div className="col-span-12 md:col-span-6 flex gap-4">
                        <div className="flex flex-col">
                            <div className="text-2xl font-semibold text-slate-600 mb-2">
                                {works[selectedWork-1].title}
                            </div>
                            <div className="text-md font-normal text-slate-500">
                                {works[selectedWork-1].from} - {works[selectedWork-1].to}
                            </div>
                            <div className="flex gap-2 items-center">
                                <a href={works[selectedWork-1].link} className="text-lg font-semibold text-red-500 hover:underline duration-500">
                                    @{works[selectedWork-1].name.toLowerCase()}
                                </a>
                                <a href="github"> <FaGithub className='w-6 h-6 text-slate-500 hover:text-darker-1'/> </a>
                            </div>
                            <br />

                            <div className="flex flex-row items-center gap-4">
                                {/* <div className="w-2 h-2 rounded-full bg-red-500"></div> */}
                                <FaAngleRight className='inline text-red-500 text-sm'/>
                                {works[selectedWork-1].idid}  
                            </div>

                            {/* <br />
                            <div className="text-md font-bold text-slate-500 font-roboto mb-2">
                                Technologies / Frameworks I’ve used:
                            </div>

                            <FaCode/> */}

                        </div>
                    </div>
                </div>
                <br />

            </div>

        </div>
    );
}

export default Work;