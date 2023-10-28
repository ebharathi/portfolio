import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
//compoents
import Nav from '@/components/Nav'
import HomeComponent from '@/components/Home'
import About from '@/components/About'
import { useState } from 'react'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default function Home() {
   const [bg,setBG]=useState(false);
  return (
     <>
       <div className='top'>
        <Nav bg={bg}/>
        <HomeComponent/>
       </div>
       <About/>
       {/* <Projects/> */}
       <Contact/>
       <Footer/>
     </>
  )
}
