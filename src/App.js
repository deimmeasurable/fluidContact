

import React,{useState} from 'react';
import Navbar from "./component/homePage/Navbar";
import Sidebar from './component/homePage/Sidebar';
import './component/template/Sidebar.scss';
import ContactHome from "./component/ContactHome";
import './component/template/ContactHome.scss';
import './component/template/App.scss';
import './component/template/ContactModal.scss';
import ContactModal from "./component/homePage/ContactModal";
import AddContact from "./component/homePage/AddContact";

function App() {
  const[isDisplay,setIsDisplay] = useState (false)

  const starredContact = [1, 2, 3, 4, 5, 6];


  const handleShow=()=>{
    setIsDisplay(true)
  }
  return (
    <div>
        <Navbar />
      <div className="app">
        {/* {starredContact.map(data => { return <div className="hello">{data}</div>})} */}
        <Sidebar/>
        <ContactHome/>
      
      {isDisplay && <ContactModal/>}
    <AddContact show={handleShow}/>
    </div>
    </div>

  
  );
}

export default App;
