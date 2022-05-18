import React, {useEffect, useState} from 'react'
import './template/ContactHome.scss';
import {FaCommentDots, FaDotCircle, FaEdit, FaStar} from "react-icons/fa";
import SingleContact from "./homePage/SingleContact";

const ContactHome = () => {
const [contacts, setContacts ]=useState([])

    const addContact = () =>{

    let contact3 = {}
    contact3.name = "Micheal Jordan"
    contact3.image="home/joshua/Downloads/img4.jpeg"
    contact3.phoneNumber="+2345678912097"
        const newArray = [...contacts]
        newArray.push(contact3)
    setContacts(...contacts ,newArray)




    //       let contact2 = {}
    // contact3.name = "Micheal Owen"
    // contact3.image="home/joshua/Downloads/img4.jpeg"
    // contact3.phoneNumber=""
    //     const newValue = [...contacts]
    //     newValue.push(contact2)
    // setContacts(...contacts,newValue)
    //
    //
    //
    //
    //       let contact1 = {}
    // contact3.name = "Micheal Jackson"
    // contact3.image="home/joshua/Downloads/img4.jpeg"
    // contact3.phoneNumber="+23456789076"
    //     const newValue1 = [...contacts]
    //     newValue1.push(contact1)
    // setContacts(...contacts,newValue1)

        // console.log(contacts)

  }
  useEffect(()=>{
     addContact()
      console.log(contacts)

  },[])

  return (
    <div className="contactHome-page">
        { contacts.length > 0 && contacts.map(contact =>{return(<SingleContact contact={contact}  key={contact.name}/>)}) }

    {/*<div className="image-column">*/}
    {/*  <img/>*/}
    {/*    <p>Diego Jotta</p>*/}

    {/*  </div>*/}
    {/*  <div className="phoneNumber-section">*/}
    {/*    <p>+2348160450324</p>*/}
    {/*    <div className="icon-section">*/}
    {/*      <FaStar style={{marginRight:"20px"}}/>*/}
    {/*      <FaEdit style={{marginRight:"20px"}}/>*/}
    {/*      <FaCommentDots style={{marginRight:"10px"}}/>*/}

    {/*    </div>*/}


    {/*  </div>*/}
       
    </div>
  )
}

export default ContactHome;