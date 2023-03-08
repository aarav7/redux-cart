import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, totalPrice, price } = props.item;

  const incrQuantity = () => {
    dispatch(cartActions.addItem({ id: id, quantity: quantity }));
  }

  const decrQuantity = () => {
    dispatch(cartActions.removeItem(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrQuantity}>-</button>
          <button onClick={incrQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
