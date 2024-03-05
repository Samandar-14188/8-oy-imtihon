"use client";
import React, { useState, ChangeEvent } from "react";
import Dialog from "@mui/material/Dialog";
import Image from "next/image";
import Modal from "../Modal";
import RadioInput from "../RadioIput";
import Shape from "../../../public/Shape.png";
import Input from "../input";
interface Option {
  id: string;
  name: string;
  value: string;
  label: string;
}

interface CheckoutProps {
  text: string;
}

const options: Option[] = [
  { id: "option1", name: "radioGroup", value: "option1", label: "e-Money" },
  {
    id: "option2",
    name: "radioGroup",
    value: "option2",
    label: "Cash on Delivery",
  },
];

const Checkout: React.FC<CheckoutProps> = ({ text }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [eMoneyNumber, setEMoneyNumber] = useState<string>("");
  const [eMoneyPin, setEMoneyPin] = useState<string>("");
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (!phoneNumber.trim()) {
      alert("Phone Number is required");
      return;
    }

    if (!address.trim()) {
      alert("Address is required");
      return;
    }

    if (!zipCode.trim()) {
      alert("ZIP Code is required");
      return;
    }

    if (!city.trim()) {
      alert("City is required");
      return;
    }

    if (!country.trim()) {
      alert("Country is required");
      return;
    }

    if (!selectedPaymentOption.trim()) {
      alert("Payment Method is required");
      return;
    }

    if (!eMoneyNumber.trim()) {
      alert("e-Money Number is required");
      return;
    }

    if (!eMoneyPin.trim()) {
      alert("e-Money PIN is required");
      return;
    }

    alert("CONTINUE button clicked!");
  };

  return (
    <div className="checkout-container">
      <button onClick={handleClickOpen} className="Checkout-button">
        {text}
      </button>
      <Dialog open={open} onClose={handleClose} className="checkout-dialog">
        <div className="Checkout">
          <h1>CHECKOUT</h1>
          <p>Billing Details</p>
          <div className="Input-wrapper">
            <Input
              type="text"
              label="Name"
              className="text-input"
              placeholder="Alexei Ward"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              label="Email Address"
              className="text-input"
              placeholder="alexei@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Input-wrapper">
            <Input
              type="number"
              label="Phone Number"
              className="text-input"
              placeholder="+1 202-555-0136"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <p>Shipping Info</p>
          <div className="Input-addres">
            <Input
              type="number"
              label="Address"
              className="text-input"
              placeholder="1137 Williams Avenue"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="Input-wrapper">
            <Input
              type="number"
              label="ZIP Code"
              className="text-input"
              placeholder="10001"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <Input
              type="text"
              label="City"
              className="text-input"
              placeholder="New York"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="Input-wrapper">
            <Input
              type="text"
              label="Country"
              className="text-input"
              placeholder="United States"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <p>Payment Details</p>
          <div className="RadioInput">
            <span>Payment Method</span>
            <RadioInput
              options={options}
              onChange={(value) => setSelectedPaymentOption(value)}
            />
          </div>
          <div className="Input-wrapper">
            <Input
              type="text"
              label="e-Money Number"
              className="text-input"
              placeholder="238521993"
              value={eMoneyNumber}
              onChange={(e) => setEMoneyNumber(e.target.value)}
            />
            <Input
              type="text"
              label="e-Money PIN"
              className="text-input"
              placeholder="6891"
              value={eMoneyPin}
              onChange={(e) => setEMoneyPin(e.target.value)}
            />
          </div>
          <div className="Checkout-info">
            <Image src={Shape} alt="rasm" />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be canceled.
            </p>
          </div>
          <Modal text="CONTINUE" onClick={handleClick} />
        </div>
      </Dialog>
    </div>
  );
};

export default Checkout;
