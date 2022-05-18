import React, {useState} from "react";

const Register = () => {
    const [name, setName,email,setEmail,phoneNumber,setPhoneNumber,favourite,setFavourite]= useState({name:'',email:'',phoneNumber:"",favourite:""})

    const handleName=(e)=>{
        setName({...name,[e.target.value]:e.target.value})
    }
    const handleEmail =(e)=>{
        setEmail({...email,[e.target.value]:e.target.value})

    }
    const handlePhoneNumber = (e) => {
        setPhoneNumber({...phoneNumber,[e.target.value]:e.target.value})

    }
    const handleFavourite =(e)=>{
        setFavourite({...favourite,[e.target.value]:e.target.value})
    }
    const handleButton=(e)=>{

    }

    return (
        <div className="handleRegister">
            <div>
                
            </div>
            <p>Name</p>
            <input onChange={handleName}/>
            <p>Email</p>
            <input onChange={handleEmail}/>
            <p>PhoneNumber</p>
            <input onChange={handlePhoneNumber}/>
            <p></p>

        </div>
    );
};

export default Register;