import React, {useState, useEffect} from "react";

import { FiAward, FiArrowRightCircle } from "react-icons/fi";

import certifications from "../../json/certifications.json";

function Certification() {

    const [certificates, setCertificates] = useState(null);

    useEffect(() => {
        setCertificates(certifications.certificates);
    }, []);

    return (
        <div id="certificates" className="text-slate-400 font-roboto w-full flex flex-col gap-4 justify-start md:py-8 md:px-20 md:mb-32 md:pt-24"> 
            <div className="font-bold text-5xl text-darker-2">
                Certifications
            </div>
            <br />
            {certificates!==null && (
                <div className="grid grid-cols-5 gap-4">
                    {certificates.map(({name, org, date, id, link, techs}) => {
                        return (
                            <a href={link}>
                                <div className="col-span-1 h-full flex hover:-translate-y-2 hover:shadow-lg rounded-2xl duration-300 hover:cursor-pointer group">
                                    <div className="w-full flex flex-col p-6 rounded-2xl bg-darker-2">
                                        <div className="flex justify-between">
                                            <FiAward className=" w-10 h-10 text-red-400"/>
                                            <div className="flex gap-4">
                                                <a href={link} className="hover:text-red-400"> <FiArrowRightCircle className="w-8 h-8 "/> </a>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="text-xl font-bold mb-2 group-hover:text-red-400 duration-200">
                                            {name}
                                        </div>
                                        <div className="text-md font-normal mb-4">
                                            {date}
                                        </div>

                                        
                                        <div className="text-sm font-normal mr-2">
                                            Issued By:
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {org.map((tech) => {
                                                return (
                                                    <div className="text-md font-bold mr-2">
                                                        {tech}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="grow"></div>

                                        <br />
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {techs.map((tech) => {
                                                return (
                                                    <div className="text-sm font-normal font-mono mr-2 ">
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

export default Certification;