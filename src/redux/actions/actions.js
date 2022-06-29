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

export const updateUsers = (user)=>{
    return {
        type: constants.UPDATE_USER,
        payload:user
    }
}
