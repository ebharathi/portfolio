const About=()=>{
    return(
        <div id="about-img" className="bg-[#2F3238] px-60">
            <div className="text-center pt-32">
                <span className="text-[30px] font-bold text-white bottom-border">ABOUT Me</span>
            </div>
            <div className="flex px-36 pt-10">
                <div className="flex-1 flex flex-col space-y-3 justify-center items-center text-white">
                    <p>My passion for computer science ignited when I entered college, when I started learning Javascript. By the end of first year, I was already a frontend developer. Not only did this give me valuable insights into my future career, but it also allowed me to earn through internships or part-time jobs. Although I wasn't officially hired due to my age, my determination led me to gain the experience I craved.</p>
                    <p>In India, computer education starts early, and I was no exception. I joined various computer-related clubs in school, including robotics, engineering basics, HTML, and game development. Through these clubs, I honed my coding skills, developed a strong foundation in math and science, and acquired essential skills in collaboration and leadership. I also gained in-depth knowledge of computer operating systems, hardware, and software.</p>
                    <p>Upon moving to America, I was surprised by the lack of such clubs in middle school. However, I rejoined the robotics club in 6th grade. Sadly, it didn't match my skill level, and I found myself helping my peers more than learning. In 7th grade, I stumbled upon "Girls Who Code," but it lacked the depth of programming I craved – it was more about basic blocks and lighting up boards. Undeterred, I continued my personal studies. While others were dragging code blocks in Scratch, I was exploring Python libraries and reading Java books that my dad had given me.</p>
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