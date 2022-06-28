import { ACTIONS_TYPE } from './../constants/actions-type';
export const addUsers = (user)=>{
    return {
        type:ACTIONS_TYPE.,
        payload:user
    }
}

export const deleteUsers = (id)=>{
    return {
        type:"DELETE-USER",
        payload:id
    }
}

export const updateUsers = (user)=>{
    return {
        type:"UPDATE-USER",
        payload:user
    }
}
