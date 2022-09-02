import { FiUser, FiCode, FiGithub, FiAward, FiPhone } from "react-icons/fi";

const menus = [
    {id:1, name:'About', url:'#about', icon: <FiUser/>},
    {id:3, name:'Work', url:'#work', icon: <FiCode/>},
    {id:2, name:'Projects', url:'#projects', icon: <FiGithub/>},
    {id:2, name:'Certificates', url:'#certificates', icon: <FiAward/>},
    {id:4, name:'Contact', url:'#contact', icon: <FiPhone/>}
]

// FaDownload

function AppBar({scrolldown}){
    const topClass = "fixed top-0 z-50 bg-darker-1 flex flex-col md:flex-row w-full md:h-24 items-center justify-center gap-6 px-8 py-6 md:py-0 duration-500 drop-shadow-xl";
    const  topClassScroll = topClass + " -translate-y-44 md:-translate-y-24 duration-500";
    return(
        <div className={scrolldown ? topClassScroll : topClass}>

            <div className="flex grow w-full items-center justify-between md:gap-4">
                <div className="text-red-400 font-roboto font-bold text-2xl flex flex-col"> 
                    <div> CJ. </div>
                    {/* <div className="text-stone-400 font-roboto text-sm font-normal"> You can call me CJ </div> */}
                </div>
                <a href="https://drive.google.com/file/d/10aGkgkTrCIfSUxFHaOAEUd-Na3FOdob_/view?usp=sharing" className="px-2 py-1 rounded-md bg-black text-light-1 font-roboto text-md hover:text-red-400">
                    <div className="flex gap-2 items-center">
                        My Resume
                    </div>
                </a>
            </div>

            <ul className="inline flex gap-6 md:gap-8 items-center justify-center h-full">
                {menus.map((menu) => {
                    return (
                        <li id={menu.id}>
                            <a href={menu.url} className="group flex flex-col gap-1 tracking-wider md:tracking-widest text-md font-thin text-light-1 inline hover:text-red-400 hover:cursor-pointer font-roboto duration-200">
                                <div className="flex gap-2 items-center">
                                    {menu.icon} {menu.name}
                                </div>
                                <div className="flex w-0 group-hover:w-full h-0.5 bg-red-500 rounded-full duration-200">

                                </div>
                            </a>
                        </li>
                    );
                })}
            </ul>
            
        </div>
    );
}

export default AppBar;