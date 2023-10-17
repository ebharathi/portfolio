//components
import Content from "../Content/Content";

const Main=()=>{
    return (
       <div className="flex flex-row">
                <div className="flex-1 md:flex-[2]"></div>
                <div className="flex-[3] mt-20 flex flex-col md:flex-row mx-2">
                    <div className="pt-20 flex-1 flex justify-center items-center">
                            <img style={{objectFit:'cover'}} className="cursor-pointer rounded-full w-300 h-300 lg:w-400 lg:h-400" src="https://res.cloudinary.com/dommky0uu/image/upload/v1697030549/1676809451987_yfc1kb.jpg"/>
                    </div>
                    <div className="flex-1">
                          <Content/>
                    </div>
                </div>
                <div className="flex-1 md:flex-[2]"></div>
       </div> 
    )
}
export default Main;