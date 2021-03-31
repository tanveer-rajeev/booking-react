import axios from "axios";


export const bookingController = (bookingInfo) => {

    const token = localStorage.getItem("token");
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
        const successMessage = {
            bookingDate: date,
            workingPlace:room
        }
        return successMessage;
    }).catch(err => {
        const errMessage = err.response.data;
        if (errMessage.message) {
          bookingErrorNotification(errMessage);  
        } else {
            return errMessage;
        }
        
    })

}

const successNotification = (response, workingPlace) => {

    const successMessage =
        `<h3 id="confirmation">Booking Confirmation</h3>
    <p id="successMessage">
    We booked successfully a place in ${workingPlace} 
    on ${response.data.bookingDate} for you.</p>`;

    // showNotification(successMessage);

}

const bookingErrorNotification = (errMessage) => {
    

        if (errMessage.message.charAt(0) === '!') {
            alert("User name not found in the system");
        } else {
            alert("Invalid booking date");
        }
    

}
const errorNotification = (errorMessage) => {
    console.log(errorMessage)
    const personList = errorMessage.bookedPersonsList;
    const roomList = [...errorMessage.roomList];
    const roomNames = roomList.map(room => room.roomName);
    let roomSuggestedMessage = "";

    const title = `<h3 id="suggestion"> Another room suggestion </h3>`

    if (roomNames.length == 0) {
        roomSuggestedMessage = `${title} There have no available room  on this day.`
    }
    else {
        roomSuggestedMessage =
            `${title}
             <h4 id="suggestionMessage"> Room is already booked out by
             ${personList} on this day.
             Try room(s): ${roomNames}</h4>`;

    }

    // showNotification(roomSuggestedMessage);
}

// const showNotification = (message) => {
//     document.getElementById("bookingNotification").innerHTML = "";
//     const bookingInfo = document.createElement("div");
//     bookingInfo.className = "bookingDetails";
//     bookingInfo.innerHTML = message;
//     document.getElementById("bookingNotification").appendChild(bookingInfo);

//     document.getElementById("bookingNotification").style.display = "block";
// }