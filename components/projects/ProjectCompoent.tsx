import { Shadows_Into_Light
} from 'next/font/google'

const sil = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400'
})

const ProjectComponent=()=>{
    return(
        <div className="mt-20 mx-10 flex flex-col space-y-6">
               <div className="flex flex-col md:flex-row space-x-2 space-y-2 mx-8 lg:mx-28">
                  <div className="flex-1 flex justify-center items-center">
                    <img className='cursor-pointer ' src="https://res.cloudinary.com/dommky0uu/image/upload/v1697273609/bus_xfrxcx.png"/>
                  </div>
                  <div className="flex-1 flex flex-col space-y-3">
                     <span className={`${sil.className} text-[24px]`}>Bus Booking App</span>
                     <span className={`${sil.className} text-[19px]`}>This is my first MERN satck project i have done. This app helps user to search or select a bus and book multiple seats. Designed with Interactive payment section with selected ticket details. Also with user login and signup functionality. It was developed using ReactJS, Bootstrap CSS, SASS, NodeJS and MongoDB.</span>
                     <span className={`${sil.className} text-[19px]`}>Frontend Code available in github & hosted in Netilfy meanwhile the backend code was hosted on heroku server when i did this project few years back  </span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row space-x-2 space-y-2 mx-8 lg:mx-28">
                  <div className="flex-1 flex justify-center items-center">
                    <img className='cursor-pointer ' src="https://res.cloudinary.com/dommky0uu/image/upload/v1697276503/url_pinkpd.png"/>
                  </div>
                  <div className="flex-1 flex flex-col space-y-3">
                     <span className={`${sil.className} text-[24px]`}>Next.js URL shortner</span>
                     <span className={`${sil.className} text-[19px]`}>A url shortner website with the help of API provided from rapidAPI. This is my first next.js project i did after i learnt the basics of it.</span>
                     <span className={`${sil.className} text-[19px]`}> </span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row space-x-2 space-y-2 mx-8 lg:mx-28">
                  <div className="flex-1 flex justify-center items-center">
                    <img className='cursor-pointer ' src="https://res.cloudinary.com/dommky0uu/image/upload/v1697275305/db_b0uxam.png"/>
                  </div>
                  <div className="flex-1 flex flex-col space-y-3">
                     <span className={`${sil.className} text-[24px]`}>Database Management Application</span>
                     <span className={`${sil.className} text-[19px]`}>A Web application that lets user to implement Create, Read, Update and Delete operations with database. User can create a database that stores the data permanently and via login credentials, it can be accessed anywhere.</span>
                     <span className={`${sil.className} text-[19px]`}>For the backend, i used Nodejs and mongoDB as the database to store all the data.Frontend stack includes React.js, Bootstrap, HTML and SASS  </span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row space-x-2 space-y-2 mx-8 lg:mx-28">
                  <div className="flex-1 flex justify-center items-center">
                    <img className='cursor-pointer ' src="https://res.cloudinary.com/dommky0uu/image/upload/v1697275830/news_gf8bvg.png"/>
                  </div>
                  <div className="flex-1 flex flex-col space-y-3">
                     <span className={`${sil.className} text-[24px]`}>News Application</span>
                     <span className={`${sil.className} text-[19px]`}>This web app fetch world wide live news and helps you to know current affairs on day to day life. Allows users to search news articles and select news in various categories. I used real time API from rapidAPI to get live news sources.</span>
                     <span className={`${sil.className} text-[19px]`}>Designed with ReactJS, NodeJS and RestAPI.</span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row space-x-2 space-y-2 mx-8 lg:mx-28">
                  <div className="flex-1 flex justify-center items-center">
                    <img className='cursor-pointer ' src="https://res.cloudinary.com/dommky0uu/image/upload/v1697276220/chat_mfdfrv.png"/>
                  </div>
                  <div className="flex-1 flex flex-col space-y-3">
                     <span className={`${sil.className} text-[24px]`}>Socket Chat App</span>
                     <span className={`${sil.className} text-[19px]`}>I used basic concept of communication for this project. Dynamic real time web chat that provides end to end encryption. Multiple users can join the live chat room simultaneously.</span>
                     <span className={`${sil.className} text-[19px]`}>It displays the message, time received and the user who sent it. Developed using ReactJS and socket.io</span>
                  </div>
               </div>
               <div className='flex justify-center items-center py-5'>
                  <span  className={`${sil.className} text-[25px]`}>More Projects Coming soon.....Visit my git profile to view the websites/codes. A sweet Thank You!</span>

               </div>
        </div>
    )
}
export default ProjectComponent;