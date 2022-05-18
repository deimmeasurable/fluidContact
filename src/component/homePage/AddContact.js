import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import ContactModal from "../homePage/ContactModal";



const AddContact = () => {
   


    return (
        <div style={{height:"70%",width:"40%"}}className="handleRegister">
            <button style={{height: "50%",width: "10%",borderRadius:"10%",backgroundColor:"red"}}onClick={ContactModal}><AiOutlinePlus/></button>

        </div>
    );
};

export default AddContact;
