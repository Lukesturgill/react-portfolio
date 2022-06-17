import "./contact.css"
import Email from "../../img/mail.png"
import Phone from "../../img/phone.png"
import LinkedIn from "../../img/linkedin.png"
import { useRef, useState } from "react"

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault()
        .sendForm()
        .then(
            (result) => {
                console.log(result.text);
                setDone(true)
            },
            (error) => {
                console.log(error.text);
            }
        )
    };

  return (
    <div id="contact-me" className="contact">
        <div className="contact-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">How to reach me</h1>
                    <div className="c-info">
                        <div className="c-item-info">
                            <img 
                            src={Phone}
                            alt="phone"
                            className="c-icon"
                            />
                            586-382-4400
                        </div>
                        <div className="c-item-info">
                            <img 
                            src={Email}
                            alt="email"
                            className="c-icon"
                            />
                            lukesturgill@gmail.com
                        </div>
                        <div className="c-item-info">
                            <img 
                            src={LinkedIn}
                            alt="linked in"
                            className="c-icon"
                            />
                            LinkedIn
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"><b>Any questions?</b> Send me a message and I will get back to you as soon as possible.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_name" />
                        <input type="text" placeholder="Email" name="user_name" />
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button className="submit">Submit</button>
                        {done && "Thank you!"}
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Contact