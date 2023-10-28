import {Bebas_Neue,Poppins
} from 'next/font/google'
const pop=Poppins({
    subsets: ['latin'],
    weight: '100'
  })
const Projects=()=>{
  return (
    <div className={`bg-[#2F3238] px-5 md:px-20 lg:px-72 pt-2 ${pop.className}`}>
       <div className="text-center pt-32">
                <span className="text-[30px] font-bold text-white bottom-border hover:px-3">My WORKS</span>
            </div>
        <div id="portfolio" className="text-center pt-20">
        <div className="container">
        <section id="works" className="container">
            <ul className="portfolio-items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <li className="portfolio-item apps">
                    <div className="item-inner flex justify-center items-center">
                        <a target='_blank' href="https://github.com/stars/ebharathi/lists/angular-js-projects">
                        <img className='w-200 h-200' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png" alt=""/>
                        </a>
                    </div>
                </li>
                <li className="portfolio-item apps ">
                    <div className="item-inner flex justify-center items-center">
                      <a target='_blank' href="https://github.com/stars/ebharathi/lists/react-js-projects">
                        <img className='w-200 h-200' src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" alt=""/>
                      </a>
                    </div>
                </li>
                <li className="portfolio-item apps">
                    <div className="item-inner flex justify-center items-center">
                       <a target='_blank' href="https://github.com/stars/ebharathi/lists/next-js-projects">
                        <img className='w-200 h-200' src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png" alt=""/>
                       </a>
                    </div>
                </li>
                <li className="portfolio-item apps">
                    <div className="item-inner flex justify-center items-center">
                        {/* <img src="https://p7.hiclipart.com/preview/780/57/127/node-js-javascript-database-mongodb-native.jpg" alt=""/> */}
                    </div>
                </li>
            </ul>
        </section>
    </div>
</div> 
    </div>
  )
}
export default Projects;