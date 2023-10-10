import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
//compoents
import Nav from '@/components/Navbar/Nav'
export default function Home() {
  return (
     <main>
        <Nav></Nav>
     </main>
  )
}
