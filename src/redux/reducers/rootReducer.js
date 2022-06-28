import constants from './../constants/actions-type';
const initialeState= {
    users:[
        {
            "id":1,
            "name":"NSIA Participations"
        },
        {
            "id":2,
            "name":"NSIA Banque"
        },
        {
            "id":3,
            "name":"NSIA Finance"
        },
        {
            "id":4,
            "name":"NSIA Asset Management"
        },
        {
            "id":5,
            "name":"NSIA Assurances"
        }
    ]
}

function rootReducer(state=initialeState, action){
    switch (action.type) {
        case constants.ADD_USER:
            return {
                users:[
                    ...state.users,action.payload
                ]
            }
            break;
            
        default:
            return state;
    }
 
}


export default rootReducer;
