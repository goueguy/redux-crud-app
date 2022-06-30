import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {deleteUsersAction,editUsersAction,findUsersAction} from '../redux/actions/actions';
import { EditPopup } from './EditPopup';

const Users = ({id,numero,name,country}) => {
    const dispatch = useDispatch();
    const [userId,setUserId]=useState();
    const users = useSelector(state=>state.users.users)
    const [editing,setEditing]=useState(true);
    const deleteUser=(id)=>{
        if(window.confirm("Êtes-vous sure de vouloir supprimer ?")){
            dispatch(deleteUsersAction(id));
        }
    }

    const editUser = (id)=>{
        setEditing(true)
        dispatch(editUsersAction(id));
        se
    }
    return (

            <tr>
                <td>{numero}</td>
                <td>{name}</td>
                <td>{country}</td>
                <td className="d-flex justify-content-center">
                    <button type="button" onClick={()=>editUser(id)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
