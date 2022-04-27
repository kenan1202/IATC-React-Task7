import React from 'react'
import { useDispatch } from 'react-redux';
import './ListItem.css';
import { useNavigate } from 'react-router-dom'; 


function ListItem({item, id}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    return (
        <div className='listItem'>
            <img src = {item.image} alt = "Item Image" width = "50px"></img>
            <h2>{item.name}</h2>
            <p>{Math.floor(item.price) <= 0 ? 0 : Math.floor(item.price)}</p>
            <button onClick={() => dispatch({type: 'ADD_PRICE', payload: item})}>Increase Price</button>
            <button onClick = {() => dispatch({type: 'DECREASE_PRICE', payload: item})}>Decrease Price</button>
            <button onClick={() => navigate(`/items/${id + 1}`)}>Edit Item</button>
            {/* <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: item})}>Remove Item</button> */}
        </div>
    )
}

export default ListItem