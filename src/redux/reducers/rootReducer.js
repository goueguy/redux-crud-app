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
  return state;
}

export default rootReducer;
