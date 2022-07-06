import constants from './../constants/actions-type';

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

export const editUsersAction = (user)=>{
    return {
        type: constants.EDIT_USER,
        payload:user
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
