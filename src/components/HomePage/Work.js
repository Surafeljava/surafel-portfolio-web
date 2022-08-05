import React, {useState, useEffect} from 'react';

import works2 from "../../json/works.json";

// import tebesa from "../../asset/works/tebesa.png";

import { FaAngleRight, FaGithub } from "react-icons/fa";
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
        <div id="work" className="text-stone-300 w-full grow grid grid-cols-12 gap-4 justify-center md:py-8 md:px-14 md:mb-8">

            {/* <div className="col-span-12 md:col-span-2 flex justify-center items-center -rotate-90 text-slate-500 text-8xl font-bold">
            </div> */}

            <div className="w-full col-span-12 md:col-span-10 flex flex-col md:px-6 text-darker-2 rounded-xl items-start">
                {/* <div className="text-2xl md:text-4xl text-darker-2 font-roboto font-bold group tracking-widest mx-0 flex items-center gap-2 mb-8 md:py-8 md:px-4 md:w-full md:bg-gradient-to-r md:from-darker-tr md:to-light-1 md:border-l-2 md:border-red-500"> 
                    <FaChevronRight className="text-transparent group-hover:text-red-500 font-normal text-sm group-hover:text-xl md:text-2xl inline -ml-8 group-hover:ml-0 duration-500"/> 
                    Where I've Worked 
                </div> */}
                <div className="font-bold text-2xl text-darker-2 mb-8">
                    Where I've Worked 
                </div>
                <div className="w-full grid grid-cols-12 grid-flow-row gap-6">
                    {(works.length > 0 && selectedWork !== null) && (
                        <div className="col-span-12 md:col-span-2 w-full flex grow md:flex-col font-roboto font-normal text-md gap-2 overflow-scroll md:overflow-auto">

                            {works.map((work) => {
                                return (
                                    <button onClick={() => setSelectedWork(work)} id={work.id} 
                                    className={"py-4 flex gap-2 justify-start items-center px-4 duration-200 ease-in-out group text-sm  md:text-md rounded-lg" + 
                                    (work.id===selectedWork.id ? " text-white bg-darker-2 hover:bg-darker-2" : " text-darker-2 hover:bg-darker-tr")}>
                                        <FaAngleRight className='inline -ml-4 invisible group-hover:visible group-hover:ml-0 duration-200 ease-in-out'/>
                                        {work.name}
                                    </button>
                                );
                            })}
                            
                        </div>
                    )}

                    {/* Work Images Here */}
                    <div className="col-span-4 w-full h-full">
                        {selectedWork!==null && (
                            <img src={`/assets/works/${selectedWork.image}`} alt="work pic" className='w-full rounded-xl'/>
                        )}
                    </div>

                    <div className="col-span-12 md:col-span-6 flex gap-4">
                        {selectedWork!==null && (
                            <div className="flex flex-col">
                                <div className="text-2xl font-semibold text-darker-2 mb-2">
                                    {selectedWork.title}
                                </div>
                                <div className="text-md font-normal text-slate-500">
                                    {selectedWork.from} - {selectedWork.to}
                                </div>
                                <a href={selectedWork.link} className="text-lg font-semibold text-red-500 hover:underline duration-500">
                                    @{selectedWork.name.toLowerCase()}
                                </a>
                                <br />

                                <div className="flex flex-row items-center gap-4">
                                    {/* <div className="w-2 h-2 rounded-full bg-red-500"></div> */}
                                    <FaAngleRight className='inline text-red-500 text-sm'/>
                                    {selectedWork.idid}  
                                </div>

                                <br />
                                <div className="text-md font-bold text-darker-2 font-roboto mb-2">
                                    Technologies / Frameworks I’ve used:
                                </div>

                                {selectedWork.techs.map((tech) => {
                                    return (
                                        <div className="flex gap-2 items-center mb-2">

                                            <FaAngleRight className='inline text-red-500 text-sm'/>
                                            <div className="text-sm font-mono "> {tech} </div>
                                        </div>
                                    );
                                })}

                                <br />

                                {selectedWork.source !== "" && (
                                    <div className="flex">
                                        <a href={selectedWork.source} className="flex gap-2 items-center group hover:cursor-pointer py-2 px-4 bg-darker-2 rounded-lg">
                                            <FaGithub className='text-lg text-white group-hover:text-red-300 duration-500'/>
                                            <div className="text-white group-hover:text-red-300 duration-500">
                                                Source code
                                            </div>
                                        </a>
                                    </div>
                                )}


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