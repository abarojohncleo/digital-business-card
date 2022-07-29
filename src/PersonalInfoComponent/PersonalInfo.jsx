import React from "react";
import './PersonalInfo.css'
import profile from '../assets/JohnProfile.png'

export default function PersonalInfo(){
    return (
        <div className="personal-info">
            <img src={profile} alt="" className="profile"/>
            <h1 className="name">John Cleo Abaro</h1>
            <h3 className="job-position">FullStack Developer</h3>
            <p className="email">abarojohncleo@gmail.com</p>
            <div className="btn">
                <button className="email-btn"><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Email</a></button>
                <button className="linkedin-btn"><a href="https://www.linkedin.com/in/john-cleo-abaro-7a403b196/" target="_blank">LinkedIn</a></button>
            </div>
        </div>
    )
}