import React, {useContext} from 'react';
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css'

const Cart = (props)=> {

    const cartCtx = useContext(CartContext);

    const cartItems = ( 
    <ul className={classes['cart-items']}>  
    {cartCtx.items.map((item)=> (<li>Name:{item.name} Description:{item.description} Price:{item.price} Quantity:{item.quantity}</li>))}
    </ul>)
    
    let price = 0;
    cartCtx.items.forEach(item => {
        price = price + Number(item.price);
        price = Math.round((price + Number.EPSILON) *100)/100
    })

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{price}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onHideCart} >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;