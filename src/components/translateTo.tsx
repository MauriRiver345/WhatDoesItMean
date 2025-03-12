import './translateTo.css'
import { FaExchangeAlt } from "react-icons/fa";
import { PiSpeakerHighFill } from "react-icons/pi";
import { FaCopy } from "react-icons/fa";

export function TranslateTo(){
    return(
    <div className="translate">
        <div className="header">
            <p>English</p>
            <p>French</p>
            <p>Spanish</p>
            <p>Italian</p>
            <a href=""><FaExchangeAlt  id='iconExchange'/></a>
        </div>
        <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint qui accusantium ad aut distinctio est fugiat aspernatur natus repudiandae dolore possimus, excepturi modi voluptate aperiam maiores et saepe tenetur.</p>
        </div>
        <div className="footer">
            <a href=""><PiSpeakerHighFill /></a>
            <a href=""><FaCopy /></a>
        </div>
    </div>
    )
}