


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

  return (
    <div>
      {/* <Navbar />
      <div className="app">
        <Sidebar/>
        <ContactHome/>
      </div> */}
{/* <ContactModal/> */}
    <AddContact/>
    </div>
  );
}

export default App;
