import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = ()=> {
    const cartItems = ( <ul className={classes['cart-items']}>  {[{id: '1', name: 'Sushi', amount: 2, price: "120Rs"},].map((item)=> (<li>{item.name}</li>))}
    </ul>)
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>150Rs</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;