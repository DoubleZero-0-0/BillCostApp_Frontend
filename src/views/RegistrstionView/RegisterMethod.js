import axios from "@/axios";
import { alertSuccess, alertError } from "@/components/JS/alertToster";

// validation.js
export const validateEmail = (rule, value, callback) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(value)) {
    callback();
  } else {
    callback(new Error("Please Write a valid Email"));
  }
};

export const validateName = (rule, value, callback) => {
  if (value) {
    callback();
  } else {
    callback(new Error("Please write a valid name."));
  }
};


export async function RegisterPost(name,email, passowrd) {
  try {
    const postData = {
      userName: name,
      userEmail: email,
      userPassword: passowrd,
    };

    const headers = {
      'Content-Type': 'application/json',
    }

    const dataJson = JSON.stringify(postData);
    //Request send to api
    axios.post("/register",dataJson, { headers })
    .then(res => {
        if (res.data['code'] === 0) {
          alertSuccess("Registrations Success");
        } else {
          alertError("Registrations Failed");
        }
        
    }).catch(error => {
      console.log(error)
    })
  } catch (error) {
    console.log(error);
  }
}
