import {FC} from 'react'
import {Bebas_Neue,Poppins
} from 'next/font/google'
const pop=Poppins({
    subsets: ['latin'],
    weight: '300'
  })
const BN = Bebas_Neue({
    subsets: ['latin'],
    weight: '400'
  })
export interface NavProps{
    bg?:any;
}
const Nav:FC<NavProps>=({bg})=>{
    return (
        <nav id="art-menu" className={`bg-[#2F3238] bg-opacity-5 h-85 px-40 p-4 fixed top-0 w-full z-100 ${pop.className}`}>
             <div className="flex h-full">
                <div className={`text-white flex-[2] text-left text-[25px]`}><span></span></div>
                <div className="flex-1 flex justify-center items-center">
                    <ul className="grid grid-cols-4 space-x-4 text-white">
                        <li className="text-[#de5e60]">HOME</li>
                        <li className="cursor-pointer">ABOUT</li>
                        <li className="cursor-pointer">PROJECTS</li>
                        <li className="px-1">CONTACT</li>
                    </ul>
                </div>
             </div>
        </nav>
    )
}
export default Nav;