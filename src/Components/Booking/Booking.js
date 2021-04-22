import React, {useEffect, useState} from 'react';
import {Button, Card} from "react-bootstrap";
import './Booking.css';
import {bookingController} from "./BookingController";
import SuggestRooms from "./SuggestRooms";

const Booking = () => {

    const [confirmation, setConfirmation] = useState(false);
    const [roomSuggestion, setRoomSuggestion] = useState(false);
    const [title, setTitle] = useState(false);
    const [personList, setPersonList] = useState(false);

    const [booking, setBooking] = useState({
        room: 'Private Room',
        date: new Date(),
        name: ''
    })

    const handleResponse = (response) => {
        // console.log(response);
        // console.log(typeof(response));
        if (!response.bookedRoom) {
            setTitle(response[0]);
            setPersonList(response[1])
            console.log(response[2]);
            // response[2].map(room => setRoomSuggestion(room));
            setRoomSuggestion(response[2]);
            setConfirmation(false);
        } else {
            console.log("Confirmation Handle");
            setRoomSuggestion(false);
            setConfirmation(response);
        }
    }


    const {room, date, name} = booking;

    const bookingConfirmation = (event) => {
        event.preventDefault();
        console.log(room);
        bookingController(booking)
            .then((response) => {
                handleResponse(response);
            })
    }

    const handleChange = (event) => {

        const bookInfo = {...booking};
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
        <div >

            <div className=" bookingDiv mt-5 p-3">
                <h2>Booking working place</h2>
                <br/>

                <form onSubmit={bookingConfirmation} className="container mb-2 mt-2">
                    <label htmlFor="">Working Place</label>
                    <br/>
                    <select className="mb-2" value={room} onChange={handleChange} id="rooms">
                        <option id="" value="Private Room">Individual </option>
                        <option value="Business Room">Business </option>
                        <option value="Meeting Room">Meeting </option>
                        <option value="Hall Room">Convention Hall</option>
                        <option value="Office Room">Official </option>
                    </select>
                    <br/>

                    <label htmlFor="">Date</label>
                    <br/>
                    <input onChange={handleChange} className="inp-style mb-2" type="date" value={date} placeholder="/ /"
                           required/>


                    <br/>
                    <label htmlFor="">Your name</label>
                    <br/>
                    <input onChange={handleChange} className="inp-style" type="text" value={name}
                           placeholder="your name" required/>
                    <br/>
                    <Button type="submit" className="btn btn-primary mt-3">Book</Button>
                </form>
                <br/>
            </div>


            <div className="justify-content-center text-center mt-5">

                {
                    confirmation &&

                    <div className="container bookingNotification w-50 m-auto pt-3">
                        <h1 style={{color:"green"}}>Booking Successful</h1>
                        <h4>Working place type: {confirmation.bookedRoom}</h4>
                        <h4>Booking Date: {confirmation.bookedDate}</h4>
                    </div>
                }

                {
                    roomSuggestion &&
                    <div className="container  bookingNotification m-auto pt-3">
                        {
                            title
                        }
                        <br/>
                        <h4>Room is already booked by "{
                            personList
                        }"</h4>
                        <h4>Try another rooms:</h4>
                        <div className="d-flex justify-content-center row">{
                            roomSuggestion
                                .map(room =>
                                    <SuggestRooms room={room}/>
                                )
                        }
                        </div>

                    </div>
                }
            </div>


        </div>
    );
};

export default Booking;