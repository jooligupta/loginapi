import React,{useState,useEffect} from "react";
import Login from './components/Login';
import { useImmer } from "use-immer";
import axios from "./utils/Axios";
import useLocalstorage from './Hooks/useLocalstorage';


export default function App(){
  const [user, setUser] = useImmer({
    mobileNumber: "",
    verificationCode : "",
    verificationSent : false,
  });
  const [storedToken, setToken] = useLocalstorage('token', null);

  


  function sendSMSCode() {
    axios.post("https://bringonstore-backend.herokuapp.com/api/v1/auth/loginviaOtp", {
      to: user.mobileNumber,
      channel : 'sms'
    });

    setUser((draft) => {
      draft.verificationSent = true;
    });

  }
  async function sendverificationCode() {
    console.log('Verify mobile number')
    const response = await axios.post('https://bringonstore-backend.herokuapp.com/api/v1/auth/verifyOtp', {
      to: user.mobileNumber,
      code : user.verificationCode,
    });
    console.log('received token', response.data.token);
    setToken(response.data.token)
  }



  return(
    <div>
  
 <Login user={user} setUser={setUser} sendSMSCode={sendSMSCode} sendverificationCode={sendverificationCode}  />


    </div>
  )
}