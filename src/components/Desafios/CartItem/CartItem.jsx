import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import './CartItem.css';
import Button from 'react-bootstrap/Button';

export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='cart-info-container mb-2'>
                <p>{item.title}</p>
                <p>Precio unitario:${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio total: ${item.totalPrice}</p>
                <Button variant="danger" onClick={()=>removeProduct(item.id)}>Eliminar producto</Button>
            </div>
        </div>
    )
}
