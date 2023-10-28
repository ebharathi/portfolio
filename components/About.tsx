import {Bebas_Neue,Poppins
} from 'next/font/google'
const pop=Poppins({
    subsets: ['latin'],
    weight: '100'
  })
const About=()=>{
    return(
        <div id="about-img" className={`bg-[#2F3238] px-60 ${pop.className}`}>
            <div className="text-center pt-32">
                <span className="text-[30px] font-bold text-white bottom-border">ABOUT Me</span>
            </div>
            <div className="flex px-36 pt-10">
                <div className="flex-1 flex flex-col space-y-3 justify-center items-center text-white">
                    <p>As a web developer, I'm passionate about creating exceptional digital experiences that help businesses achieve their goals. I'm proficient in all aspects of web development.
From startups to large corporations, I have the skills and knowledge to elevate any digital project. I will be glad to implement my innovative ideas, skills & creativity for accomplishing the projects.</p>
                    <p>My passion for computer science ignited when I entered college, when I started learning Javascript. By the end of first year, I was already a frontend developer. Not only did this give me valuable insights into my future career, but it also allowed me to earn through internships or part-time jobs. Although I wasn't officially hired due to my age, my determination led me to gain the experience I craved.</p>
                    <p>Though im very good at frameworks like React, Angular, Nextjs, Typescript and Nodejs, I have a great understanding of C/C++ programming language.Im fundamentally strong at solving problems which helped me a lot during my college placement drives.</p>
                    {/* <p>I still like to continue my career through the way I always desired which is web development and will always give my full effort to any startups or organizations that I work for.</p> */}
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img className="w-300 h-300 rounded-full" src="https://res.cloudinary.com/dommky0uu/image/upload/v1697030549/1676809451987_yfc1kb.jpg" alt="" />
                </div>
            </div>
            <div className="text-center mt-20">
                <span className="text-white text-[22px]">"We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein."</span>
            </div>
            <div className="text-center mt-10">
                <button className="bg-[#de5e60] text-white px-5 py-3 rounded-md hover:bg-[#d33e41]">Get in touch</button>
            </div>
        </div>
    )
}
export default About