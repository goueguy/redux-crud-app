import constants from './../constants/actions-type';
import { useSelector } from 'react-redux';


export const addUsersAction = (user)=>{
    return {
        type: constants.ADD_USER,
        payload:user
    }
}

export const deleteUsersAction = (id)=>{
    return {
        type: constants.DELETE_USER,
        payload:id
    }
}

export const editUsersAction = (id)=>{
    return {
        type: constants.EDIT_USER,
        payload:id
    }
}

export const findUsersAction = (id)=>{
    return {
        type: constants.FIND_USER,
        payload:id
    }
}
export const getUsersAction = (users)=>{
    return {
        type: constants.GET_USER,
        payload:users
    }
}
export const updateUsersAction = (user)=>{
    return {
        type: constants.UPDATE_USER,
        payload:user
    }
}
