// 'use client'
import React from 'react';
import { FiMinus } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItemQuantity } from '../../../redux/cartSlice';

interface ButtonCounterProps {
  productId: number;
}

const ButtonCounter: React.FC<ButtonCounterProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const currentItem = cartItems.find((item) => item.id === productId);

  const handleMinus = () => {
    if (currentItem && currentItem.quantity > 0) {
      dispatch(updateCartItemQuantity({ id: productId, quantity: currentItem.quantity - 1 }));
    }
  };

  const handlePlus = () => {
    dispatch(updateCartItemQuantity({ id: productId, quantity: (currentItem ? currentItem.quantity : 0) + 1 }));
  };

  return (
    <div>
      <button className="btnCoun">
        <FiMinus className="icons" onClick={handleMinus} />
        <span> {currentItem ? currentItem.quantity : 0}</span>
        <FaPlus className="icons" onClick={handlePlus} />
      </button>
    </div>
  );
};

export default ButtonCounter;
