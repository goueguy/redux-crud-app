import React from 'react'
import { useSelector } from 'react-redux'
import Users from './Users'

const UserList = () => {
    const users = useSelector(state=>state.users.users);
    return (
        <div className="col-lg-8 offset-lg-2 mt-4">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NOM</th>
                        <th>PAYS</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (users.length>0)?(
                            users.map((user,key)=>(
                                <Users numero={key+1} id={user.id} key={user.id} name={user.name} country={user.country}/>
                            ))
                        ):(
                            <span className='text-center'>Pas d'Utilisateurs disponibles</span>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default UserList
