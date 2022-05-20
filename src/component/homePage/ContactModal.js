import React,{useState} from 'react';
import '../template/ContactModal.scss';
import {FaPhone,FaCut} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {BiNotepad} from "react-icons/bi";
import {AiOutlineContacts} from "react-icons/ai";

function ContactModal() {
        const[alert, setAlert] = useState({ishow:false, status:"", message:""})

    const[contactDetails,setContactDetails] =useState({firstname:"",lastName:"",jobTitle:"",phoneNumber:"",email:"",note:""})

    const handleInputField=(e)=>{
        setContactDetails({...contactDetails,[e.target.name]:e.target.value})
    }

    const handleSaveContactDetails=()=>{
        let {firstname,lastname,email,phoneNumber}=contactDetails

        let isFieldsIncomplete = Object.keys(contactDetails).some((detail) => detail==="")
        if(isFieldsIncomplete){
            setAlert({ishow:true, staus:"error", message:"Fields Incomplete"})

            console.log("Fields Incomplete")
            return 
        }
          //validate email is email
          let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          let isEmailCorrect = email.match(validRegex)
          if (!isEmailCorrect) {
              console.log("Email Incorrect")
              setAlert({iShow: true, status: "error", message: "Email incorrect"})
              return;
          }
        // validate if contact detail doesn't exist
            try{
                let usersRepository 
                usersRepository = JSON.parse(localStorage.getItem("users"))
                let isContactDetailExist = usersRepository.some((user)=> user.email ===email && user.firstname===firstname && user.lastname===lastname && user.phoneNumber===phoneNumber);

                if(isContactDetailExist){
                    setAlert({ishow:true, staus:"error", message:"Contact already exists"})

                    console.log("Contact already exists")
                    return;
                }

                let newUserRepository = [contactDetails,...usersRepository]
                localStorage.setItem("users", JSON.stringify(newUserRepository))
                setAlert({ishow:true, staus:"success", message:"Contact Registered successfully"})
                console.log(newUserRepository)
                
            }catch(error){
                localStorage.setItem("users", JSON.stringify([contactDetails]))
                setAlert({ishow:true, staus:"success", message:" contact registration successful"})
                console.log([contactDetails])
                setTimeout(()=>setAlert({ishow:false, staus:" ", message:""}), 5000)
            }
        

    }





    
    return (
        <div className="content-header">
            <div className="first-layer">
            <h1>Create Contact</h1>
           <button style={{border:"none"}}><FaCut/></button>
            </div>
            <div className="first-field">
                <img src="http://placehold.it/"/>
                <input onChange={handleInputField} placeholder="firstname"/>
                <input onChange={handleInputField} placeholder="lastname"/>
            </div>
            <div className="second-field">
                <AiOutlineContacts/> 
                <input onChange={handleInputField} style={{marginRight:"3em"}} placeholder="company"/>
                <input onChange={handleInputField} style={{marginRight:""}}placeholder="Job Title"/>
                </div>
                <div className="third-field">
                    <FiMail style={{marginLeft:"4.9em"}}/>
                    <input onChange={handleInputField}placeholder="Email"/>
                 </div>   
                <div className="fourth-field">
                 <FaPhone/>
                 <img/>
                <input onChange={handleInputField}style={{marginLeft:"13em"}} placeholder="Phone"/>
                 </div>
                 <div className="fifth-field">
                      <BiNotepad/> 
                    <input onChange={handleInputField}placeholder="Note"/>
                     </div>  
                     < div className="last-column">
                         <div style={{marginRight:"50px",height:"10px",width:"10px"}}className="cancel-button">
                         <button style={{backgroundColor:"blue", color:"white",border:"none"}}>cancel</button>
                         </div>
                         <div style={{marginRight:"50px",height:"10px",width:"10%"}} className="save-button">
                         <button onClick={handleSaveContactDetails} style={{backgroundColor:"blue",color:"white",border:"none"}}>save</button>
                         </div>
                     </div> 


            
        </div>
    );
}

export default ContactModal;