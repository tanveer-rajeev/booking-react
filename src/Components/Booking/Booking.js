
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router';
import './Booking.css';
import { bookingController } from './BookingController';
const Booking = () => {

    const history = useHistory();

    const [booking, setBooking] = useState({
        room: 'Office 1',
        date: new Date(),
        name: ''
    })

    const handleResponse = (res, redirect) => {
   
            history.push(`notification/${res}`);
       
    }
    const { room, date, name } = booking;

    const bookingConfirmation = (event) => {
        event.preventDefault();
         bookingController(booking)
            .then((response) => {
                handleResponse(response,true);
            }).catch((error) => {
                handleResponse(error,false);
            })

    }

    const handleChange = (event) => {

        const bookInfo = { ...booking };
        if (event.target.type === 'select-one') {
            bookInfo.room = event.target.value;
            setBooking(bookInfo);
        } else if (event.target.type === 'date') {
            bookInfo.date = event.target.value;
            setBooking(bookInfo);
        } else if (event.target.type === 'text') {
            bookInfo.name = event.target.value;
            setBooking(bookInfo);
        }
    }
    return (
        <div className="container mt-5 p-5 bookingDiv">
            <h2>Booking working place</h2>
            <br />


            <form onSubmit={bookingConfirmation} className="container">
                <label htmlFor="">Room</label>
                <select value={room} onChange={handleChange} id="rooms">
                    <option id="" value="Office 1">Office 1</option>
                    <option value="Office 2">Office 2</option>
                    <option value="Office 3">Office 3</option>
                    <option value="Big Office">Big Office</option>
                    <option value="Boss Office">Boss Office</option>
                    <option value="Additional Office">Additional Office</option>
                </select>
                <br />
                <label htmlFor="">Date</label>

                <input id="bookingDate" onChange={handleChange} className="inp-style" type="date" value={date} placeholder="/ /" required />
                <br />
                <label htmlFor="">Your name</label>

                <input id="name" onChange={handleChange} className="inp-style" type="text" value={name} placeholder="your name" required />
                <br />
                <Button type="submit" className="btn btn-primary style">Book</Button>
            </form>

        </div>
    );
};

export default Booking;