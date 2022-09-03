import React, {useState, useEffect} from 'react';

import works2 from "../../json/works.json";

// import tebesa from "../../asset/works/tebesa.png";

import { FiChevronRight, FiGithub, FiArrowRightCircle} from "react-icons/fi";
// FaCodeBranch


function Work(){

    const [works, setWorks] = useState([]);
    const [selectedWork, setSelectedWork] = useState(null);

    useEffect(() => {
        console.log(works2.works);
        setWorks([...works2.works]);
        setSelectedWork(works2.works[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="work" className="text-stone-300 w-full min-h-screen grow grid grid-cols-12 gap-4 justify-start md:py-8 md:px-14 md:mb-8 md:pt-24">

            {/* <div className="col-span-12 md:col-span-2 flex justify-center items-center -rotate-90 text-slate-500 text-8xl font-bold">
            </div> */}

            <div className="w-full col-span-12 flex flex-col md:px-6 text-darker-2 rounded-xl items-start">
                {/* <div className="text-2xl md:text-4xl text-darker-2 font-roboto font-bold group tracking-widest mx-0 flex items-center gap-2 mb-8 md:py-8 md:px-4 md:w-full md:bg-gradient-to-r md:from-darker-tr md:to-light-1 md:border-l-2 md:border-red-500"> 
                    <FaChevronRight className="text-transparent group-hover:text-red-500 font-normal text-sm group-hover:text-xl md:text-2xl inline -ml-8 group-hover:ml-0 duration-500"/> 
                    Where I've Worked 
                </div> */}
                <div className="font-bold text-5xl text-darker-2 mb-8">
                    Work Experience
                </div>
                <br />
                <div className="w-full h-full grid grid-cols-12 grid-flow-row gap-6">
                    {(works.length > 0 && selectedWork !== null) && (
                        <div className="col-span-12 md:col-span-2 w-full flex h-3/4 md:flex-col md:justify-between font-roboto font-normal text-md gap-2 overflow-scroll md:overflow-auto">

                            {works.map((work) => {
                                return (
                                    <button onClick={() => setSelectedWork(work)} id={work.id} 
                                    className={"grow py-4 flex gap-2 justify-start items-center px-4 duration-200 ease-in-out group text-sm  md:text-md rounded-lg" + 
                                    (work.id===selectedWork.id ? " text-white bg-darker-2 hover:bg-darker-2" : " text-darker-2 hover:bg-darker-tr")}>
                                        <FiChevronRight className='inline -ml-4 invisible group-hover:visible group-hover:ml-0 duration-200 ease-in-out'/>
                                        <div className="flex flex-col items-start">
                                            <div className='text-lg font-bold text-left'>{work.name}</div>
                                            <div className='text-md text-left'>{work.title}</div>
                                        </div>
                                    </button>
                                );
                            })}
                            
                        </div>
                    )}

                    {/* Work Images Here */}
                    <div className="col-span-7 w-full h-3/4 relative group">
                        {selectedWork!==null && (
                            <>
                            <img src={`/assets/works/${selectedWork.image}`} alt="work pic" className='absolute top-0 left-0 w-full h-full object-cover rounded-xl z-10'/>
                            <div className="w-full h-2/3 bg-gradient-to-t from-black-50 to-black-0 rounded-b-xl absolute left-0 bottom-0 z-20 flex flex-col justify-end p-6">
                                <div className="flex flex-col gap-2 -mb-10 group-hover:mb-0 ease-out">
                                    <div className="text-4xl font-bold text-white">
                                        {selectedWork.name}
                                    </div>
                                    <a href={selectedWork.link} className="text-xl font-normal text-white mb-6">
                                        {selectedWork.link}
                                    </a>
                                </div>
                                <div className="flex justify-between translate-y-10 invisible group-hover:visible group-hover:translate-y-0 duration-200">
                                    <a href={selectedWork.source} className="group hover:scale-110 flex justify-end items-center gap-2">
                                        <FiGithub className='text-xl text-white'/>
                                        <div className="text-white opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 duration-200">
                                            Source code
                                        </div>
                                    </a>

                                    <a href={selectedWork.link} className="flex hover:scale-125 justify-end items-center gap-2">
                                        <div className="text-white opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 duration-200">
                                            Preview
                                        </div>
                                        <FiArrowRightCircle className='text-xl text-white'/>
                                    </a>
                                </div>
                            </div>
                            </>
                        )}
                    </div>

                    <div className="col-span-12 md:col-span-3 flex gap-4">
                        {selectedWork!==null && (
                            <div className="flex flex-col">
                                <div className="text-md font-normal text-slate-500">
                                    Position:
                                </div>
                                <div className="text-2xl font-bold text-darker-2 mb-2">
                                    {selectedWork.title}
                                </div>
                                <div className="text-md font-normal text-slate-500">
                                    {selectedWork.from} - {selectedWork.to}
                                </div>
                                <a href={selectedWork.link} className="text-lg font-semibold text-red-500 hover:underline duration-500">
                                    @{selectedWork.name.toLowerCase()}
                                </a>
                                <br />

                                <div className="flex flex-row items-start gap-4">
                                    {/* <div className="w-2 h-2 rounded-full bg-red-500"></div> */}
                                    {/* <FiChevronRight className='inline text-red-500 text-sm mt-2'/> */}
                                    {selectedWork.idid}  
                                </div>

                                <br />
                                <div className="text-md font-bold text-darker-2 font-roboto mb-2">
                                    Technologies / Frameworks I’ve used:
                                </div>

                                {selectedWork.techs.map((tech) => {
                                    return (
                                        <div className="flex gap-2 items-center mb-2">

                                            <FiChevronRight className='inline text-red-500 text-sm'/>
                                            <div className="text-sm font-mono "> {tech} </div>
                                        </div>
                                    );
                                })}

                                {/* <br />

                                {selectedWork.source !== "" && (
                                    <div className="flex">
                                        <a href={selectedWork.source} className="flex gap-2 items-center group hover:cursor-pointer py-2 px-4 bg-darker-2 rounded-lg">
                                            <FiGithub className='text-lg text-white group-hover:text-red-300 duration-500'/>
                                            <div className="text-white group-hover:text-red-300 duration-500">
                                                Source code
                                            </div>
                                        </a>
                                    </div>
                                )} */}


                            </div>
                        )}
                    </div>
                </div>
                <br />

            </div>

        </div>
    );
}

export default Work;