import React, { useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateUsersAction } from '../redux/actions/actions';

export const EditUser = () => {
  let id = useParams().id;
  console.log(id);
  let users = useSelector(state=>state.users.users);
  let userData = users.find(user=>user.id===parseInt(id));
  const [userId,setUser]=useState(userData.id);
  const [name, setName]=useState(userData.name);
  const [country, setCountry]=useState(userData.country);
   const navigate = useNavigate();
  const nameRef= useRef()
  const countryRef= useRef();
  const dispatch = useDispatch();

  const editUser = (e)=>{
    e.preventDefault();
  
    let user = {
        id:userId,
        name:nameRef.current.value,
        country:countryRef.current.value
    }
    dispatch(updateUsersAction({user}))
    navigate("/")
  }
  return (
    <div className="container mx-auto mt-5">
        <div className="row">
            <form>
               <div className="col-lg-6 offset-lg-3">
                    <div className="form-group">
                        <input type="text" className='form-control' ref={nameRef} defaultValue={name} placeholder='Nom...'/>
                    </div>
               </div>
               <div className="col-lg-6 offset-lg-3 mt-3">
                    <div className="form-group">
                        <input type="text" className='form-control' ref={countryRef} defaultValue={country} placeholder='Filiale...' />
                    </div>
               </div>
               <button className='btn btn-danger btn-block mt-3' onClick={(e)=>editUser(e)}>EDIT USER</button>
            </form>
            <Link to={"/"} className="mt-4">RETOUR</Link>
        </div>
    </div>
  )
}
