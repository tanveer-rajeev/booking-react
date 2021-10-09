import './App.css';
import Booking from './Components/Booking/Booking';
import Login from './Components/Credential/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import {createContext, useState} from 'react';
import WorkingPlaceCapacity from './Components/WorkingPlaceCapacity/WorkingPlaceCapacity';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (

        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Header/>
                <Sidebar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/login" exact component={Login}/>

                    <Route path="/booking" exact component={Booking}/>

                    <Route path="/roomCapacity">
                        <Header/>
                        <WorkingPlaceCapacity/>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>


    );
}

export default App;
