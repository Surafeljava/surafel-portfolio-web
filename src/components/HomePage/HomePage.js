// import Spline from '@splinetool/react-spline';

import profile from '../../asset/profile.png';

import { FaChevronRight } from "react-icons/fa";

// const techs = [
//     {id:1, name: "Reactjs"}, 
//     {id:2, name: "Node.js/Express"}, 
//     {id:3, name: "Mongodb"}, 
//     {id:4, name: "Graphql"}, 
//     {id:5, name: "Postgres SQL"}, 
//     {id:6, name: "Flutter"},
//     {id:7, name: "Tensorflow"},
// ];

function HomePage(){
    return (
        <div id="about" className="text-stone-300 w-full min-h-screen grow grid grid-cols-12 grid-flow-row justify-start items-center gap-2">

            <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col px-2 md:px-6 text-darker-2 rounded-xl items-start">
                
                <div className="grid grid-cols-12 grid-flow-row w-full items-center justify-center">
                    <div className="col-span-12 w-full flex flex-col items-center">
                        <img src={profile} alt="profile pic" className=" w-64 rounded-full hover:cursor-pointer duration-300 object-cover border-8 border-white" />
                        <p className="text-2xl md:text-3xl text-slate-500 font-roboto font-normal tracking-widest mx-0 pt-4">👋 Hi, I'm </p>
                        <br />
                        <a href="https://linktr.ee/surafelkindu"  
                        className="text-4xl md:text-7xl lg:text-8xl font-roboto font-bold text-center">SURAFEL KINDU</a>
                        <p className="text-xl md:text-4xl text-slate-500 font-roboto font-thin text-center"> Software Engineer | UI/UX Designer</p>
                        <br />
                        <div className="flex justify-center">
                            <div className="font-roboto font-normal text-md md:text-lg text-slate-500 text-center md:w-2/3">
                                Self-Driven and passionate software engineer. Fullstack web and mobile application developer. 
                                I am able to work well under pressure and adhere to strict deadlines.I'm also very passionate about AI, specifically Natural Language Processing and Image Processing.
                            </div>
                        </div>

                        <br />
                        <div className="flex gap-6">
                            <div className="flex group items-center">
                                <FaChevronRight className='w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200'/>
                                <a href="https://drive.google.com/file/d/10aGkgkTrCIfSUxFHaOAEUd-Na3FOdob_/view?usp=sharing" 
                                className="px-4 py-2 rounded-lg font-roboto text-white text-md bg-darker-2 ml-0 group-hover:ml-2 group-hover:text-red-400 duration-200">
                                    My Resume
                                </a>
                            </div>

                            <div className="flex group items-center">
                                <FaChevronRight className='w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200'/>
                                <a href="https://linktr.ee/surafelkindu" 
                                className="px-4 py-2 rounded-lg font-roboto text-white text-md bg-darker-2 ml-0 group-hover:ml-2 group-hover:text-red-400 duration-200">
                                    My Socials
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="invisible md:col-span-4 lg:col-span-5 md:visible md:h-full md:w-full md:flex md:items-center md:justify-center ">
                <Spline scene="https://prod.spline.design/Qnd2Hq1ZC9JEdnlJ/scene.splinecode" />
            </div> */}

        </div>
    );
}

export default HomePage;