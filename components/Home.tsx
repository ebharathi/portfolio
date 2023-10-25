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
                <h1 className="text-[50px] pt-40">Hello, Im Elayabharathi,</h1>
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