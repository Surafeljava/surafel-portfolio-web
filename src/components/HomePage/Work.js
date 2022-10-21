import React, {useState, useEffect} from 'react';

import works2 from "../../json/works.json";

// import tebesa from "../../asset/works/tebesa.png";

import { FiChevronRight, FiGithub, FiArrowRightCircle} from "react-icons/fi";
import { BsFillTriangleFill } from "react-icons/bs";
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
        <div id="work" className="text-stone-300 w-full h-auto md:min-h-screen grow grid grid-cols-12 gap-4 justify-start md:py-8  md:mb-8 md:pt-24">

            <div className="w-full col-span-12 flex flex-col items-center md:items-start md:px-6 text-darker-2 rounded-xl">
                <div className="font-bold text-3xl md:text-5xl text-darker-2 mb-8">
                    Work Experience
                </div>
                <div className="w-full md:h-full grid grid-cols-12 gap-4 md:gap-6">
                    {(works.length > 0 && selectedWork !== null) && (
                        <div className="col-span-12 xl:col-span-2 w-full flex h-full lg:h-3/4 xl:flex-col md:justify-between font-roboto font-normal text-md gap-2 overflow-scroll md:overflow-auto">
                            {works.map((work) => {
                                return (
                                    <button onClick={() => setSelectedWork(work)} id={work.id} 
                                    className={"grow w-full md:w-auto flex gap-1 justify-start items-center px-4 py-3 lg:px-4 lg:py-4 duration-200 ease-in-out group text-sm md:text-md rounded-lg" + 
                                    (work.id===selectedWork.id ? " text-white bg-darker-2 hover:bg-darker-2" : " text-darker-2 hover:bg-darker-tr")}>
                                        <FiChevronRight className='inline -ml-4 invisible group-hover:visible group-hover:ml-0 duration-200 ease-in-out'/>
                                        <div className="flex flex-col items-start">
                                            <div className='text-sm md:text-lg md:font-bold text-left hidden md:flex'>{work.name}</div>
                                            <div className='text-sm md:text-lg md:font-bold text-left md:hidden'>{work.shortName}</div>
                                            <div className='text-md text-left hidden md:flex'>{work.title}</div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    {/* Work Images Here */}
                    <div className="col-span-12 hidden md:flex md:col-span-7 w-full h-60 md:h-full xl:h-3/4 relative group">
                        {selectedWork!==null && (
                            <>
                            <img src={`/assets/works/${selectedWork.image}`} alt="work pic" className='absolute top-0 left-0 w-full h-full object-cover rounded-xl z-10'/>
                            <div className="w-full h-full md:h-2/3 bg-gradient-to-t from-black-50 to-black-0 rounded-b-xl absolute left-0 bottom-0 z-20 flex flex-col justify-end p-6">
                                <div className="flex flex-col gap-2 duration-200">
                                    <div className="text-xl md:text-4xl font-bold text-white">
                                        {selectedWork.name}
                                    </div>
                                    <a href={selectedWork.link} className="text-md md:text-xl font-normal text-white mb-0">
                                        {selectedWork.link}
                                    </a>
                                </div>
                            </div>
                            </>
                        )}
                    </div>

                    <div className="col-span-12 md:col-span-5 xl:col-span-3 flex h-auto xl:h-3/4">
                        <div className="flex flex-col h-full mt-10">
                            <BsFillTriangleFill className='text-2xl text-white -rotate-90 -mr-1 hidden md:flex'/>
                        </div>
                        {selectedWork!==null && (
                            <div className="flex flex-col bg-white p-4 rounded-xl duration-200">
                                
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

                                <div className="flex justify-between duration-200 mt-6">
                                    <a href={selectedWork.source} className="group hover:scale-110 flex justify-end items-center gap-2 duration-200">
                                        <FiGithub className='text-2xl text-red-400'/>
                                    </a>

                                    <a href={selectedWork.link} className="flex hover:scale-125 justify-end items-center gap-2 duration-200">
                                        <FiArrowRightCircle className='text-2xl text-red-400'/>
                                    </a>
                                </div>

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