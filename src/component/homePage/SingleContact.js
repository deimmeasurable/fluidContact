import React from "react";
import {FaCommentDots, FaEdit, FaStar} from "react-icons/fa";
import '../template/SingleContact.scss';



const SingleContact =(props)=>{
    console.log(props, "jii")

    return(
        <div className="head-container">
        <h5>Starred contacts</h5>

        <div className="header-container">

          <div className="detail-section">
         <img src={props.contact.image} alt=""/>
            <p>{props.contact.name}</p>
            </div>

            <div className="icon-section">
             <p>{props.contact.phoneNumber}</p>
          <FaStar style={{marginRight:"20px"}}/>
          <FaEdit style={{marginRight:"20px"}}/>
          <FaCommentDots style={{marginRight:"10px"}}/>

        </div>
      </div>
       </div>





    )
}
export default SingleContact;