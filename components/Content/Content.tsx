
import { Shadows_Into_Light
} from 'next/font/google'

const sil = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400'
})
const Content=()=>{
  return (
    <div className="px-3 flex flex-col">
       <div className="pt-20">
         <span className={`text-[57px] font-semibold ${sil.className}`}>Hello,</span>
       </div>
       <div>
           <span className={`${sil.className} px-1 font-semibold`}>I am Elayabharathi</span>
       </div>
       <div>
          <span className={`${sil.className} px-1 text-[12px]`}>
             As a professional web developer, I'm passionate about creating exceptional digital experiences that help businesses achieve their goals. I'm proficient in all aspects of web development and have an impressive portfolio that showcases my abilities. From startups to large corporations, I have the skills and knowledge to elevate any digital project.
          </span>
       </div>
       <div className='grid grid-cols-3 mt-1'>
          <div className='flex justify-center items-center'>
            <span className='w-100 h-100 bg-yellow-500 rounded-full'></span>   
          </div>
          <div className='flex justify-center items-center'>
            <span className='w-100 h-100 bg-blue-400 rounded-full'></span> 
          </div>
          <div className='flex justify-center items-center'>
          <span className='w-100 h-100 bg-red-300 rounded-full'></span> 
          </div>
       </div>
    </div>
  )
}
export default Content;