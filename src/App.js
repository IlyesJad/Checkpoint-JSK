// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import React from "react";
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';

      const App = () => {
        return (
   <>
     <h2>Hello from my first component !!</h2>
     <ProfilePhoto />
     <FullName />
     <Address />
   </>
 );
};
export default App;
      
   

