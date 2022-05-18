import React, {useState} from 'react'
import {IoMdContact} from 'react-icons/io'
import {FiSettings, FiHelpCircle} from 'react-icons/fi'
import '../template/Sidebar.scss';

const Sidebar = () => {
    const [contactCounter,setContactCounter]=useState(0)

    const handleContactCounter=()=>{
        setContactCounter(contactCounter+1)
    }
  return (
    <div className="sidebar-container">
    <div className="contact-section">
    <IoMdContact/>
     <h3 onChange={handleContactCounter}>Contacts</h3>
     </div>
        <div className="setting-section">
            <FiSettings/>
            <h5>Settings</h5>
            </div>
        <div className="help-section">
            <FiHelpCircle/>
            <h5>Help</h5>
        </div>


    </div>
  )
}

export default Sidebar