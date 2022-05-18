import React from 'react';
import '../template/ContactModal.scss';
import {FaPhone} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {BiNotepad} from "react-icons/bi";
import {AiOutlineContacts} from "react-icons/ai";

function ContactModal() {
    return (
        <div className="content-header">
            <h1>Create Contact</h1>
            <div className="first-field">
                <img src="http://placehold.it/"/>
                <input placeholder="firstname"/>
                <input placeholder="lastName"/>
            </div>
            <div className="second-field">
                <AiOutlineContacts/> 
                <input style={{marginRight:"3em"}} placeholder="company"/>
                <input placeholder="Job Title"/>
                </div>
                <div className="third-field">
                    <FiMail style={{marginLeft:"4.9em"}}/>
                    <input style={{marginLeft:""}}placeholder="Email"/>
                 </div>   
                <div className="fourth-field">
                 <FaPhone style={{marginLeft:""}}/>
                 <img/>
                <input style={{marginLeft:"13em"}} placeholder="Phone"/>
                 </div>
                 <div className="fifth-field">
                      <BiNotepad/> 
                    <input placeholder="Note"/>
                     </div>   


            
        </div>
    );
}

export default ContactModal;