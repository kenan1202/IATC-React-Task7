import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import './EditItem.css';


function EditItem() {
    const { id } = useParams();
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeItem = () => {
        dispatch({type: 'REMOVE_ITEM', payload: state[Number(id) - 1]})
        navigate('/');
    }



    return (
        <div className='edit'>
            <img src = {state[Number(id) - 1].image} alt = "Item Image" width = "50px"></img>
            <h2>{state[Number(id) - 1].name}</h2>
            <p>{Math.floor(state[Number(id) - 1].price)}</p>
            <button onClick={() => removeItem()}>Remove Item</button>
        </div>
    )
}

export default EditItem