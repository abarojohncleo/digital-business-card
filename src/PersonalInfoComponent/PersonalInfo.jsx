import React from "react";
import './PersonalInfo.css';
import profile from '../assets/profile1.jpg';
import email from '../assets/icons/email.svg';
import linkedIn from '../assets/icons/linkedin.svg';

export default function PersonalInfo(){
    return (
        <div className="personal-info">
            <img src={profile} alt="" className="profile"/>
            <h1 className="name">John Cleo Abaro</h1>
            <h3 className="job-position">Full Stack Developer</h3>
            <p className="email">abarojohncleo@gmail.com</p>
            <div className="btn">
                <button className="email-btn">
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                        <img src={email} alt="" className='btn-icon'/>
                    </a>
                </button>
                <button className="linkedin-btn">
                    <a href="https://www.linkedin.com/in/john-cleo-abaro-7a403b196/" target="_blank">
                        <img src={linkedIn} alt="" className='btn-icon'/>
                    </a>
                </button>
            </div>
        </div>
    )
}