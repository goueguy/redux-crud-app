import { Routes,Route } from "react-router-dom";
import './App.css';
import AddUser from './components/AddUser'
import { EditUser } from './components/EditUser';
function App() {
  return (
    <div className="App">
      <Routes>
         
          <Route path="/" element={ <AddUser/>}/>
          <Route path="/user/:id" element={ <EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
