import "./contact.scss"
import { useState } from "react";

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://c4.wallpaperflare.com/wallpaper/497/350/500/800-endoskeleton-red-eyes-robot-wallpaper-preview.jpg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :</span>}
                </form>
            </div>
        </div>
    )
}
