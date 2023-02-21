import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import Button from 'react-bootstrap/Button';

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);

  return (
    <div>
      <p>Resumen de compra</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <Button variant="danger" onClick={clearProductCartList}>Vaciar el carrito</Button>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}
