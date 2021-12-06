import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { setMeasureData, setName } from '../../actions';
import { useSelector,useDispatch } from 'react-redux';
import {storeData } from '../../helpers/localStorage';
export default function Form(){
  const data =useSelector((state)=>state.setMeasure.data)
  const dispatch = useDispatch();
  const handlechange=(e)=>{
    const{name,value}=e.target
    dispatch(setMeasureData({...data,[name]:value}))

  }

  const history=useHistory();
  const handleSubmit=(e)=>{
    e.preventDefault();
    history.push('/app')

  }
  const lastRecord=JSON.parse(localStorage.getItem('data'))
  const final=lastRecord.slice(-5)
    return(
        <>
        
        <form onSubmit={handleSubmit}> 
        <label>user</label>
        <input className="form-control" type="text" name="name" onChange={handlechange}/>
        <button type= "submit">Submit</button>
        </form>
        {final.map((item)=>
        <li className="white-text">{item.name}</li>
        )}

        </>
    )
}