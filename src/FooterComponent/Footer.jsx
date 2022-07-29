import React from "react";
import './Footer.css';
import facebook from '../assets/icons/facebook.svg';
import github from '../assets/icons/github.svg';
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';
import codepen from '../assets/icons/codepen.svg';
import portfolio from '../assets/icons/portfolio1.svg';

export default function Footer() {
    return(
        <div className="footer">
            <ul className="footer-icons">
                <li><a href="https://www.facebook.com/abarojohncleo/" target="_blank"><img src={facebook} alt="" /></a></li>
                <li><a href="https://github.com/abarojohncleo" target="_blank"><img src={github} alt="" /></a></li>
                <li><a href="https://codepen.io/abarojohncleo" target="_blank"><img src={codepen} alt="" /></a></li>
                <li><a href=""><img src={portfolio} alt="" /></a></li>
            </ul>
        </div>
    )
}