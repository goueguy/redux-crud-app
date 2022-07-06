import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {deleteUsersAction,editUsersAction} from '../redux/actions/actions';
import { EditPopup } from './EditPopup';

const Users = ({id,numero,name,country}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteUser=(id)=>{
        if(window.confirm("Êtes-vous sure de vouloir supprimer ?")){
            dispatch(deleteUsersAction(id));
        }
    }

    const editUser = (id)=>{
        dispatch(editUsersAction(id));
    }
    return (

            <tr>
                <td>{numero}</td>
                <td>{name}</td>
                <td>{country}</td>
                <td className="d-flex justify-content-center">
                    <button type="button" onClick={()=>navigate(`user/${id}`)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Editer User
                    </button>
                    <button type="button" onClick={()=>deleteUser(id)} className="btn btn-success">
                        Delete User
                    </button>
                </td>
            </tr>
    )
}

export default Users
