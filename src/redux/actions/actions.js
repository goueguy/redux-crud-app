import constants from './../constants/actions-type';
export const addUsers = (user)=>{
    return {
        type: constants.ADD_USER,
        payload:user
    }
}

export const deleteUsers = (id)=>{
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
