import axios from "axios";


export const bookingController = (bookingInfo) => {

    const token = sessionStorage.getItem("token");
    console.log(token);
    const header = {
        "pragma": token
    }
    const { room, date, name } = bookingInfo;
    const bookingAPI = `http://localhost:8080/booking/${room}`

    return axios.post(bookingAPI, {
        bookingDate: date,
        username: name
    }, {
        headers: header
    }).then(res => {
        return {
            bookedDate: date,
            bookedRoom: room
        };

    }).catch(err => {
       
        return bookingErrorNotification(err);
        
    })

}



const bookingErrorNotification = (err) => {
    const errMessage = err.response.data;
    if (errMessage.message) {
        if (errMessage.message.charAt(0) === '!') {
            alert("User name not found in the system");
        } else {
            alert("Invalid booking date");
        }
    } else {
      return  errorNotification(errMessage);
    }
}


const errorNotification = (errorMessage) => {
    console.log(errorMessage)
    const {bookedPersonsList,roomList} = errorMessage;
    const personList = bookedPersonsList;
    const availableRoomList = [...roomList];
    const roomNames = availableRoomList.map(room => room.roomName);
    let roomSuggestedMessage = "";

    const title = " Another room suggestion";

    if (roomNames.length === 0) {
        roomSuggestedMessage = title;
    }
    else {
        roomSuggestedMessage = [title, personList, roomNames];
    }
     console.log(roomSuggestedMessage);
    return roomSuggestedMessage;
}
