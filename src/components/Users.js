import React from 'react'
import {useDispatch} from 'react-redux';
import {deleteUsersAction} from '../redux/actions/actions';
const Users = ({id,numero,name,country}) => {
    const dispatch = useDispatch();
    const deleteUser=(id)=>{
        dispatch(deleteUsersAction(id));
    }
    return (
        <tr>
            <td>{numero}</td>
            <td>{name}</td>
            <td>{country}</td>
            <td className="d-flex justify-content-center">
                <a href="#" className="btn btn-danger">Editer</a>
                <a href="#" className="btn btn-success" onClick={()=>deleteUser(id)}>Supprimer</a>
            </td>
        </tr>
    )
}

export default Users
