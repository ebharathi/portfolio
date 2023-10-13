//components
import Content from "../Content/Content";

const Main=()=>{
    return (
       <div className="flex">
                <div className="flex-[2]"></div>
                <div className="flex-[4] mt-20 flex flex-row mx-4 md:mx-16 lg:mx-24">
                    <div className="pt-20 flex-1 flex justify-center items-center">
                            <img style={{objectFit:'cover'}} className="rounded-full w-300 h-300 lg:w-400 lg:h-350" src="https://res.cloudinary.com/dommky0uu/image/upload/v1697030549/1676809451987_yfc1kb.jpg"/>
                    </div>
                    <div className="flex-1">
                          <Content/>
                    </div>
                </div>
                <div className="flex-[2]"></div>
       </div> 
    )
}
export default Main;