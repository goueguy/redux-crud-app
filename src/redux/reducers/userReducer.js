import constants from './../constants/actions-type';

const initialeState= {
    users:[
        {
            "id":1,
            "name":"NSIA Participations",
            "country":"CÔTE D'IVOIRE"
        },
        {
            "id":2,
            "name":"NSIA Banque",
            "country":"SENEGAL"
        },
        {
            "id":3,
            "name":"NSIA Finance",
            "country":"CÔTE D'IVOIRE"

        },
        {
            "id":4,
            "name":"NSIA Asset Management",
            "country":"CÔTE D'IVOIRE"
        },
        {
            "id":5,
            "name":"NSIA Assurances",
            "country":"CAMEROUN"
        }
    ]
}


function userReducer(state=initialeState, action){
    switch (action.type) {
        case constants.ADD_USER:
            return {
                users:[
                    ...state.users,action.payload
                ]
            }
        break;
        case constants.DELETE_USER:
            let index = state.users.findIndex(user=>user.id===action.payload);
            state.users.splice(index,1)
            return{
                users:[
                    ...state.users
                ]
            }
        break;
        case constants.EDIT_USER:
            
            return {
                users:[
                    ...state.users
                ]
            }
        break;
        case constants.FIND_USER:
            console.log(state.users,action.payload);
            return {
                users: [
                    ...state.users
                ]
            }
        break;
        case constants.GET_USER:
            return {
                users: [
                    ...state.users
                ]
            }
        break;
         case constants.UPDATE_USER:
           
            
        break;
            
        default:
            return state;
    }
 
}

export default userReducer;