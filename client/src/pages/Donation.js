import React, { useState } from 'react';
import {
  Alert,
  Collapse,
} from "@mui/material";
import './Donation.css';
import bannerImage from './scwi-banner.jpg';


const Donation = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formErrors = {};
    if (!name.trim()) {
      formErrors.name = 'Name is required';
    }
    if (!address.trim()) {
      formErrors.address = 'Address is required';
    }
    if (!phone.trim()) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^(\+?)(\d{10,12})$/.test(phone.trim())) {
      formErrors.phone = 'Please enter a valid phone number';
    }

    if (!cardNumber.trim()) {
      formErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(cardNumber.trim())) {
      formErrors.cardNumber = 'Please enter a valid card number';
    }
    if (!expiryMonth.trim()) {
      formErrors.expiryMonth = 'Expiry month is required';
    } else if (!/^\d{2}$/.test(expiryMonth.trim())) {
      formErrors.expiryMonth = 'Please enter a valid expiry month';
    }
    if (!expiryYear.trim()) {
      formErrors.expiryYear = 'Expiry year is required';
    } else if (!/^\d{4}$/.test(expiryYear.trim())) {
      formErrors.expiryYear = 'Please enter a valid expiry year';
    }
    if (!cvv.trim()) {
      formErrors.cvv = 'CVV is required';
    } else if (!/^\d{3}$/.test(cvv.trim())) {
      formErrors.cvv = 'Please enter a valid CVV';
    }
    setErrors(formErrors);

    if (Object.keys(formErrors).length == 0) {
      setSuccess(true);
      setName('');
      setAddress('');
      setPhone('');
      setCardNumber('');
      setExpiryMonth('');
      setExpiryYear('');
      setCvv('');
      setAmount('');
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }

  };

  return (
    <div className="donation-container">
      <div className="banner">
        <img src={bannerImage} id="donate_img" alt="Banner Image" />
      </div>
      <h1>Make a Donation</h1>
      <Collapse in={success}>
        <Alert severity="success" sx={{ mb: 2 }}>
          Thank you for your Donations!
        </Alert>
      </Collapse>
      <form onSubmit={handleFormSubmit}>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name}
          onChange={(event) => setName(event.target.value)} required />
        {errors.name && <div className="error">{errors.name}</div>}

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address}
          onChange={(event) => setAddress(event.target.value)} required />
        {errors.address && <div className="error">{errors.address}</div>}

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone}
          onChange={(event) => setPhone(event.target.value)} required />
        {errors.phone && <div className="error">{errors.phone}</div>}

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount}
          onChange={(event) => setAmount(event.target.value)} required />
        {errors.amount && <div className="error">{errors.amount}</div>}

        <label htmlFor="card-number">Card Number:</label>
        <input type="tel" id="card-number" value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)} required />
        {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}

        <label htmlFor="expiry-month">Expiry Month:</label>
        <input type="text" id="expiry-month" value={expiryMonth}
          onChange={(event) => setExpiryMonth(event.target.value)} required />
        {errors.expiryMonth && <div className="error">{errors.expiryMonth}</div>}

        <label htmlFor="expiry-year">Expiry Month:</label>
        <input type="text" id="expiry-year" value={expiryYear}
          onChange={(event) => setExpiryYear(event.target.value)} required />
        {errors.expiryYear && <div className="error">{errors.expiryYear}</div>}

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" value={cvv}
          onChange={(event) => setCvv(event.target.value)} required />
        {errors.cvv && <div className="error">{errors.cvv}</div>}

        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donation;