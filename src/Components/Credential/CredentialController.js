import axios from "axios";

export const logInWithCredentials = (username, password) => {
    const loginAPI = `http://localhost:8080/login`;

    return axios.post(loginAPI, {
        username: username,
        password: password
    })
        .then(response => {
            console.log("response if heree")
            //   console.log(response);
            const { config, headers } = response;
            const newUser = JSON.parse(config.data);
            const jwtToken = headers.pragma;
            const user = {
                name: newUser.username,
                header: jwtToken,
            }
            localStorage.setItem('token', jwtToken);
            console.log(jwtToken);
            return user;

        })
        .catch(err => console.log(err));
}

export const singUPWithCredentials = (username, password) => {
    const loginAPI = `http://localhost:8080/users`;

    return axios.post(loginAPI, {
        username: username,
        password: password
    })
        .then(response => {
            console.log("Account created successfully")
            console.log(response);

            return response;
        })
        .catch(err => signUpErrorNotification(err));
}

const signUpErrorNotification = (error) => {

    const errResponse = error.response.data.message;
    const firstChar = errResponse.charAt(0);


    switch (firstChar) {
        case '-': alert("User  name already exist \nTry another name");
            break;
        case '~': alert("User name should be at least 3 characters");
            break;
        case '>': alert("Password should be 6 characters and contains with any symbol");
            break;
        default: alert("username and password can not be empty");

    }

}