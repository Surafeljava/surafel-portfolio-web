import Spline from '@splinetool/react-spline';

import profile from '../../asset/profile.png';

import { FaChevronRight } from "react-icons/fa";

const techs = [
    {id:1, name: "Reactjs"}, 
    {id:2, name: "Node.js/Express"}, 
    {id:3, name: "Mongodb"}, 
    {id:4, name: "Graphql"}, 
    {id:5, name: "Postgres SQL"}, 
    {id:6, name: "Flutter"},
    {id:7, name: "Tensorflow"},
];

function HomePage(){
    return (
        <div id="about" className="text-stone-300 w-full min-h-screen grow grid grid-cols-12 grid-flow-row justify-start items-center gap-2">

            <div className="col-span-12 md:col-span-8 lg:col-span-7 flex flex-col px-2 md:px-6 text-darker-2 rounded-xl items-start">
                
                <div className="grid grid-cols-6 grid-flow-row w-full gap-2 md:gap-6">
                    <div className="col-span-6 md:col-span-2 w-full flex flex-col">
                        <img src={profile} alt="profile pic" className="rounded-xl hover:cursor-pointer duration-300" />
                    </div>
                    <div className="col-span-6 md:col-span-4 w-full flex flex-col">
                        <p className="text-xl text-slate-500 font-roboto font-normal tracking-widest mx-0">👋 Hi, I'm </p>
                        <br />
                        <a href="https://linktr.ee/surafelkindu"  
                        className="text-4xl md:text-7xl font-roboto font-bold hover:text-red-400 duration-500 hover:cursor-pointer">SURAFEL KINDU</a>
                        <p className="text-xl md:text-2xl text-slate-500 font-roboto font-normal"> Software Engineer | UI/UX Designer</p>
                        <br />
                        <div className="font-roboto font-normal text-md text-slate-500">
                            Self-Driven and passionate software engineer. Fullstack web and mobile application developer. 
                            I am able to work well under pressure and adhere to strict deadlines.I'm also very passionate about AI, specifically Natural Language Processing and Image Processing.
                        </div>

                        <br />

                        <p className="text-xl md:text-xl text-slate-500 font-roboto font-normal mb-4"> Here are a few technologies/frameworks I’ve been working with recently : </p>

                        <div className="grid grid-cols-6">
                            {techs.map((tech) => {
                                return (
                                    <div id={tech.id} className="col-span-2 flex items-center gap-2 group py-1 hover:cursor-default">
                                        <FaChevronRight className='w-2 h-2 m-0 opacity-100 group-hover:opacity-0 group-hover:m-1 duration-500'/> 
                                        <div className="text-dark-1 group-hover:text-red-500 font-mono">{tech.name}</div>
                                        <FaChevronRight className='w-2 h-2 -m-2 opacity-0 group-hover:opacity-100 group-hover:m-0 duration-500'/> 
                                    </div>
                                );
                            })}
                        </div>

                        <br />
                        <div className="flex gap-6">
                            <div className="flex group items-center">
                                <FaChevronRight className='w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200'/>
                                <a href="https://drive.google.com/file/d/10aGkgkTrCIfSUxFHaOAEUd-Na3FOdob_/view?usp=sharing" 
                                className="px-4 py-2 rounded-lg font-roboto text-darker-1 text-md bg-yellow-1 ml-0 group-hover:ml-2 group-hover:bg-darker-1 group-hover:text-light-1 duration-200">
                                    My Resume 📄
                                </a>
                            </div>

                            <div className="flex group items-center">
                                <FaChevronRight className='w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200'/>
                                <a href="https://linktr.ee/surafelkindu" 
                                className="px-4 py-2 rounded-lg font-roboto text-darker-1 text-md bg-yellow-1 ml-0 group-hover:ml-2 group-hover:bg-darker-1 group-hover:text-light-1 duration-200">
                                    My Socials 😎
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="invisible md:col-span-4 lg:col-span-5 md:visible md:h-full md:w-full md:flex md:items-center md:justify-center ">
                <Spline scene="https://prod.spline.design/Qnd2Hq1ZC9JEdnlJ/scene.splinecode" />
            </div>

        </div>
    );
}

export default HomePage;