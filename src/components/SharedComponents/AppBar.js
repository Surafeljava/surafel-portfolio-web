import { FaDownload } from "react-icons/fa";

const menus = [
    {id:1, name:'About', url:'#about'},
    {id:3, name:'Work', url:'#work'},
    {id:2, name:'Projects', url:'#projects'},
    {id:4, name:'Contact', url:'#contact'},
    {id:5, name:'Socials', url:'#'},
]

// FaDownload

function AppBar({scrolldown}){
    const topClass = "fixed top-0 z-9999 bg-darker-1 flex flex-col md:flex-row w-full md:h-24 items-center justify-center gap-6 px-8 py-6 md:py-0 duration-500 drop-shadow-xl";
    const  topClassScroll = topClass + " -translate-y-44 md:-translate-y-24 duration-500";
    return(
        <div className={scrolldown ? topClassScroll : topClass}>

            <div className="flex grow w-full items-center justify-between md:gap-4">
                <div className="text-yellow-1 font-roboto font-bold text-2xl flex flex-col"> 
                    <div> SURAFEL KINDU. </div>
                    {/* <div className="text-stone-400 font-roboto text-sm font-normal"> You can call me CJ </div> */}
                </div>
                <a href="/assets/resume/myresume.pdf" className="px-2 py-1 rounded-md bg-black text-light-1 font-roboto text-md hover:text-yellow-1">
                    <div className="flex gap-2 items-center">
                        Resume <FaDownload/>
                    </div>
                </a>
            </div>

            <ul className="inline flex gap-6 md:gap-8 items-center justify-center h-full">
                {menus.map((menu) => {
                    return (
                        <li id={menu.id}>
                            <a href={menu.url} className="tracking-wider md:tracking-widest text-md font-thin text-light-1 inline hover:text-yellow-1 hover:cursor-pointer font-roboto">
                                {menu.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
            
        </div>
    );
}

export default AppBar;