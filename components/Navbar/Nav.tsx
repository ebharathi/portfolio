import TopNav from "./TopNav";
import { Caveat } from 'next/font/google'
const caveat =Caveat({
   subsets: ['latin'],
   weight: '600'
 })
const Nav=()=>{
    return (
        <nav className="py-4">
           <div className="flex mx-8">
                 <div className="flex-[5] flex space-x-2">
                       <div className="bg-yellow-400 py-1 mb-1 text-yellow-400 text-[23px]" style={{borderRadius:'50%',fontFamily:"'Lato',sans-seriff"}}>sssds</div>
                       <div className={`${caveat.className} pt-2 text-[20px]`}>
                              Elayabharathi M V
                       </div>
                       <div className={`${caveat.className} pt-4 text-[13px]`}>
                          Engineering student
                       </div>
                 </div>
                 <div className="flex-1 flex mt-2">
                       <div className="flex-1 text-center px-3 cursor-pointer hover:text-[#909692] h-5 text-[15px]" style={{borderRight:"2px solid black"}}>
                          Projects
                       </div>
                       <div  className="flex-1 text-center px-3 cursor-pointer hover:text-[#909692] h-5 text-[15px]" style={{borderRight:"2px solid black"}}>
                          Resume
                       </div>
                       <div  className="flex-1 text-center px-3 cursor-pointer hover:text-[#909692] h-5 text-[15px]" style={{borderRight:"2px solid black"}}>
                          Contact
                       </div>
                       <div  className="flex-1 text-center px-3 cursor-pointer hover:text-[#909692] h-5 text-[15px]">
                          Portfolio
                       </div>
                 </div>
           </div>
        </nav>
    )
}
export default Nav;