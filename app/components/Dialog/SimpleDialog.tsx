"use client";
import TengPicture from "../../../public/twoPicture.png";
import Checkout from "../checkout/checkout";
import PictureCards from "@/app/earphones/components/PictureCards";
import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import ButtonCounter from "@/app/earphones/[id]/buttonCounter";
import { clearCart } from "../../redux/cartSlice";

interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Dialog onClose={handleClose} open={open} className="Dialog-wrapper">
      <div className="Dialog-main">
        <span>CART</span>
        <p className="Remove" onClick={() => dispatch(clearCart())}>
          Remove all
        </p>
        {cartItems.map((item) => (
          <div className="dialog-card" key={item.id}>
            <div className="dialogCard-img">
              <PictureCards img={TengPicture} />
              <div className="Dialog-info">
                <h6>{item.name}</h6>
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
            <ButtonCounter productId={item.id} />
          </div>
        ))}
        <p className="total">TOTAL</p>
        <span className="price-dialog">${total}</span>
        <Checkout text="CHECKOUT" />
      </div>
    </Dialog>
  );
}

export default SimpleDialog;
