import React, {useState,useEffect} from 'react';
import  '../template/Navbar.scss';
import { FaAlignJustify} from "react-icons/fa";

const Navbar = () => {
    const[search,setSearch]=useState('')
    const[imageUrl,setImageUrl] = useState('')

    useEffect(() => {
    const time=imageUrl ? 2000:0;
       setTimeout(async() =>{
           try{
               const res= await fetch("https://robohash.org/");
               const data= await res.json();
               setImageUrl(data.message);
           }catch(e){
               console.error(e);
           }
       },time);
        
    },[imageUrl])
   


    const handleSearch =(e)=>{
        setSearch({...search,[e.target.value]:e.target.value})
    }
    return (
        
        <div className="homepage-handle">

            <FaAlignJustify style={{color: 'white',marginLeft:'5em',marginTop:'2.5em'}}/>

            <h1>Fluid Contacts</h1>

            <div style={{width:"80%", display: "flex", alignItems: "center", justifyContent: "center",height:"5em"}} className="search-label">

                    <input style={{height:"3.5em",width:"90%", border: "none", borderRadius:"1%",marginRight:"3em"}} onChange={handleSearch} placeholder="Search"/>

            </div>
            <div  className="image-section">
            
            <img src={imageUrl}/>
            </div>
            </div>
       

  )
}

export default Navbar