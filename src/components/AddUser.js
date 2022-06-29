import { useState } from "react";
import UserList from "./UserList";
import {useDispatch} from 'react-redux';

import {addUsersAction} from '../redux/actions/actions';
const AddUser = ()=>{
    const [name,setName] = useState("");
    const [country,setCountry] = useState("");
    const dispatch = useDispatch();
    const handleStoreUser = ()=>{
        let user ={
            id:new Date(),
            name,
            country
        }
        dispatch(addUsersAction(user))
    }
    return(
        <div className="container mt-5 mx-auto">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 d-flex">
                    <input type="text" className="form-control" name="name" value={name} placeholder="Entrer le nom" onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" className="form-control" name="country" value={country} placeholder="Entrer le pays" onChange={(e)=>setCountry(e.target.value)}/>
                    <div style={{fontSize:"30px",marginLeft:"10px"}}>
                        <i className="bi bi-plus-square-fill" onClick={()=>handleStoreUser()}></i>
                    </div>
                </div>
                <UserList/>
            </div>
        </div>
    )
}
export default AddUser;