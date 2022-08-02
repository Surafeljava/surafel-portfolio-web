
function Work(){
    return (
        <div id="about" className="text-stone-300 w-full h-full grow grid grid-cols-12 grid-flow-row justify-center">

            <div className="col-span-6 flex flex-col px-6 text-darker-2 rounded-xl items-start">
                <p className="text-2xl text-slate-500 font-roboto font-bold tracking-widest mx-0 peer"># Work </p>
                <br />
                <div className="grid grid-cols-5 grid-flow-row peer-hover:bg-red-500">
                    <div className="col-span-4 font-roboto font-normal text-md">
                        I'm self-driven and passionate software engineer. Research enthusiast on AI, specifically on NLP. 
                        Fullstack web and mobile application developer. I also love to work on Graphics Designing and 3D rendering.
                    </div>
                </div>
                <br />

            </div>

        </div>
    );
}

export default Work;