import React, {useState, useEffect} from "react";

import { FiFolder, FiArrowRightCircle, FiGithub } from "react-icons/fi";

import otherworks from "../../json/otherworks.json";

function Experience() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        console.log(otherworks.otherworks);
        setProjects(otherworks.otherworks);
    }, []);

    return (
        <div id="projects" className="text-slate-400 font-roboto w-full flex flex-col gap-4 justify-center md:py-8 md:px-20 md:mb-32"> 
            <div className="font-bold text-2xl text-darker-2">
                Other Projects
            </div>
            {projects !== null && (
                <div className="grid grid-cols-5 gap-4">
                    {projects.map(({title, description, link, techs, github}) => {
                        return (
                            <a href={link}>
                                <div className="col-span-1 h-full flex hover:-translate-y-2 hover:shadow-lg rounded-2xl duration-300 hover:cursor-pointer group">
                                    <div className="w-full flex flex-col p-6 rounded-2xl bg-darker-2">
                                        <div className="flex justify-between">
                                            <FiFolder className=" w-10 h-10 text-red-400"/>
                                            <div className="flex gap-4">
                                                <a href={link} className="hover:text-red-400"> <FiArrowRightCircle className="w-6 h-6 "/> </a>
                                                <a href={github} className="hover:text-red-400"> <FiGithub className="w-6 h-6"/> </a>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="text-xl font-bold mb-2 group-hover:text-red-400 duration-200">
                                            {title}
                                        </div>
                                        <div className="text-md font-normal mb-4">
                                            {description}
                                        </div>

                                        <div className="grow"></div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {techs.map((tech) => {
                                                return (
                                                    <div className="text-sm font-normal font-mono mr-2">
                                                        {tech}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Experience;