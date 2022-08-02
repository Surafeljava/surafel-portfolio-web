import Spline from '@splinetool/react-spline';

import profile from '../../asset/profile.png';

import { FaChevronRight } from "react-icons/fa";

function HomePage(){
    return (
        <div id="about" className="text-stone-300 w-full h-full grow grid grid-cols-12 grid-flow-row justify-start items-center gap-2">

            <div className="col-span-12 md:col-span-8 lg:col-span-7 flex flex-col px-2 md:px-6 text-darker-2 rounded-xl items-start">
                
                <div className="grid grid-cols-6 grid-flow-row w-full gap-2 md:gap-4">
                    <div className="col-span-6 md:col-span-2 w-full flex flex-col">
                        <img src={profile} alt="profile pic" className="rounded-xl hover:cursor-pointer duration-300 -ml-2 hover:ml-0" />
                    </div>
                    <div className="col-span-6 md:col-span-4 w-full flex flex-col">
                        <p className="text-xl text-slate-500 font-roboto font-normal tracking-widest mx-0">👋 Hi, I'm </p>
                        <br />
                        <p className="text-4xl md:text-7xl font-roboto font-bold">SURAFEL KINDU</p>
                        <p className="text-xl md:text-2xl text-slate-500 font-roboto font-normal hover:text-red-500 duration-500"> Software Engineer 💻 | UI/UX Designer 🎨</p>
                        <br />
                        <div className="font-roboto font-normal text-md text-slate-500">
                            Self-driven and passionate software engineer. Research enthusiast on AI, specifically on <span className='text-red-500'>NLP</span>. 
                            Fullstack web and mobile application developer. I also love to work on Graphics Designing and 3D rendering.
                        </div>
                        <br />
                        <div className="flex">
                            <div className="flex group items-center">
                                <FaChevronRight className='w-4 h-4 invisible -ml-4 group-hover:ml-0 group-hover:visible duration-200'/>
                                <a href="https://linktr.ee/surafelkindu" 
                                className="px-4 py-2 rounded-lg font-roboto text-darker-1 text-md bg-yellow-1 ml-0 group-hover:ml-2 group-hover:bg-darker-1 group-hover:text-light-1 duration-200">
                                    Read More 😎
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