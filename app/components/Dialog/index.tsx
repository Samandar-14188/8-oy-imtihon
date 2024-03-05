// 'use client'
import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import SimpleDialog from './SimpleDialog';

const emails = ['username@gmail.com'];

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <MdOutlineShoppingCart className="shoppingIcon" onClick={handleClickOpen}>
        Open simple dialog
      </MdOutlineShoppingCart>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
