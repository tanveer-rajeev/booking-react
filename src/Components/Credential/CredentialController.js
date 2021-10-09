import axios from "axios";

export const logInWithCredentials = (username, password) => {
    const loginAPI = `http://localhost:8080/login`;

    return axios.post(loginAPI, {
        username: username,
        password: password
    })
        .then(response => {
            const {config, headers} = response;
            const newUser = JSON.parse(config.data);
            const jwtToken = headers.pragma;
            const user = {
                name: newUser.username,
                header: jwtToken,
            }
            sessionStorage.setItem('token', jwtToken);
            return user;

        })

}

export const signUPWithCredentials = (username, password) => {
    const signUpAPI = `http://localhost:8080/signusers`;

    return axios.post(signUpAPI, {
        username: username,
        password: password
    })
        .then(response => {
            return response;
        })
        .catch(err => {
            let errorMessage= signUpErrorNotification(err);
            console.log(errorMessage);
            return errorMessage;
        });
}

const signUpErrorNotification = (error) => {
    
    const errResponse = error.response.data.message;
    const firstChar = errResponse.charAt(0);
    
    switch (firstChar) {
        case '-':
            return "User  name already exist \nTry another name";
           
        case '~':
            return  "User name should be at least 3 characters";
          
        case '>':
            return"Password should be 6 characters and contains with any symbol";
           
        default:
            return "username and password can not be empty";

    }

}