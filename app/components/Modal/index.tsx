"use client"
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import Image from 'next/image';
import ButtonModal from './components/buton';
import Rasm from '../../../public/FourPicture.png';
import { selectCartItems, selectCartTotal } from '../../redux/cartSlice';

interface ModalProps {
  text: string;
  onClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ text, onClick }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Reduxdan kerakli ma'lumotlarni olish
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="Modal-container" onClick={onClick}>
      <button onClick={handleClickOpen} className="Modal-button">
        {text}
      </button>
      <Dialog open={open} onClose={handleClose}>
        <div className="Modal-dialog">
          <h1>THANK YOU FOR YOUR ORDER</h1>
          <p>You will receive an email confirmation shortly.</p>
          <div className="Product-main">
            <div className="modal-wrapper">

            
            {cartItems.map((item) => (
              <div className="Product-card" key={item.id}>
                <div className="cardModal">
                  <Image src={Rasm} alt=" " />
                  <div className="cardModal-info">
                    <h6>{item.name}</h6>
                    <p>${item.price}</p>
                  </div>
                  <span>{item.quantity}x</span>
                </div>
              </div>
            ))} </div>
            <div className="modal-wrapper black">
              GRAND TOTAL
              <p>${total}</p>
            </div>
          </div>

          <ButtonModal onClick={handleClose} />
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
