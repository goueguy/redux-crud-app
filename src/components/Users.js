import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {deleteUsersAction,editUsersAction,findUsersAction} from '../redux/actions/actions';
import { EditPopup } from './EditPopup';

const Users = ({id,numero,name,country}) => {
    const dispatch = useDispatch();
    
    const users = useSelector(state=>state.users.users)
    const [editing,setEditing]=useState(true);
    const deleteUser=(id)=>{
        dispatch(deleteUsersAction(id));
    }
   
    const showModal = (id)=>{
        setEditing(true)
        dispatch(findUsersAction(id));
    }
    return (

            <tr>
                <td>{numero}</td>
                <td>{name}</td>
                <td>{country}</td>
                <td className="d-flex justify-content-center">
                    <button type="button" onClick={()=>showModal(id)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Editer User
                    </button>
                    <button type="button" onClick={()=>deleteUser(id)} className="btn btn-success">
                        Delete User
                    </button>
                </td>
                <td>
                    {
                        editing && (
                          <EditPopup user={id}/>    
                        )
                    }
                   
                </td>
            </tr>
    )
}

export default Users
