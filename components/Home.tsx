const HomeComponent=()=>{
    const scollDown=()=>{
        window.scrollTo({
            top:window.innerHeight,
            behavior:'smooth'
        })
    }
    return (
        <div id="home" className="text-center flex justify-center items-center">
            <div>
                <h1 className="text-[50px] pt-40">
                    <span className="span">H</span>
                    <span className="span">E</span>
                    <span className="span">L</span>
                    <span className="span">L</span>
                    <span className="span">O</span>
                    <span className="span">,</span>
                    <span className="span-space"> </span>
                    <span className="span">I</span>
                    <span className="span">'</span>
                    <span className="span">M</span>
                    <span className="span-space"> </span>
                    <span className="span">E</span>
                    <span className="span">L</span>
                    <span className="span">A</span>
                    <span className="span">Y</span>
                    <span className="span">A</span>
                    <span className="span">B</span>
                    <span className="span">H</span>
                    <span className="span">A</span>
                    <span className="span">R</span>
                    <span className="span">A</span>
                    <span className="span">T</span>
                    <span className="span">H</span>
                    <span className="span">I</span>
                </h1>
                <p>Portfolio currently under development</p>
                <div className="flex justify-center items-center mt-80">
                <span className="border-1 rounded-full p-3 hover:border-[#DE5E60] cursor-pointer" onClick={scollDown}>
                <div className="arrow"></div>
                </span>
                </div>
            </div>
        </div>
    )
}
export default HomeComponent;