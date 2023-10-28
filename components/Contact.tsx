const Contact=()=>{
    return (
        <div  className="bg-[#2F3238] px-60">
             <div className="text-center pt-32">
                <span className="text-[30px] font-bold text-white bottom-border">Get in Touch</span>
            </div>
            <div id="contact" className="text-center">
    <div className="container">
        <div className="address">Want to get in touch with me?  just feel free to drop me a line anytime. </div>
        <div id="contact-form">
            <div id="message"></div>
            <form method="post" action="" name="contactform" id="contactform">
                <input name="name" type="text" id="name"  className="inputForm2" placeholder="Name" />
                <input name="email" type="text" id="email" placeholder="Email"/>
                <textarea name="comments"  id="comments" placeholder="Message"  ></textarea>
                <input type="submit" className="send_message transition" id="submit" value="Send Message" />
            </form>
        </div>
    </div>
</div>
        </div>
    )

}
export default Contact;