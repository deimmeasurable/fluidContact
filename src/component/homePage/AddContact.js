import React,{useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import ContactModal from "../homePage/ContactModal";



const AddContact = ({show}) => {
    let [display,setDisplay]=useState(false)

  const  handleDisplay=() => {
      setDisplay(true)
      show()
      console.log(display)
  }
 

    return (
        <div style={{height:"5%",width:"5%",marginRight:"5%"}}className="handleRegister">
            <button onClick={handleDisplay} style={{height: "5%",width: "3%",borderRadius:"80%",backgroundColor:"red",position: "absolute",alignContent:"center",justifyContent:"flex-end",marginTop: "35%",border: "none",color: "white"}}><AiOutlinePlus /></button>

        </div>
    );
};

export default AddContact;
