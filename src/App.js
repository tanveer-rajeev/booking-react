
import './App.css';
import Booking from './Components/Booking/Booking';
import Login from './Components/Credential/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import WorkingPlaceCapacity from './Components/WorkingPlaceCapacity/WorkingPlaceCapacity';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

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
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/roomCapacity">
            <Header />
            <WorkingPlaceCapacity/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
