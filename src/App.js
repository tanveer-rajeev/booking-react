import logo from './logo.svg';
import './App.css';
import Booking from './Components/Booking/Booking';
import Login from './Components/Credential/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Notification from './Components/Notification/Notification';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Login />
          </Route>
          <Route path="/booking">
            <Header />
            <Booking />
          </Route>
          <Route path="/notification/:message"
            render={(props) => <Notification {...props}/>}>
            {/* <Header />
            <Notification/> */}
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
