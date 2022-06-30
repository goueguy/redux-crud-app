import { Routes,Route } from "react-router-dom";
import './App.css';
import AddUser from './components/AddUser'
import {EditPopup} from './components/EditPopup'
function App() {
  return (
    <div className="App">
      <Routes>
         
          <Route path="/" element={ <AddUser/>}/>
          <Route path="/user/id" element={ <EditPopup/>}/>
      </Routes>
    </div>
  );
}

export default App;
