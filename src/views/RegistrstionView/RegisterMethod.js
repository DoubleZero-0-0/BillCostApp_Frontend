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

export async function RegisterPost(email, passowrd) {
  try {
    const postData = {
      email: email,
      passowrd: passowrd,
    };
    const dataJson = JSON.stringify(postData);
    alertSuccess("Registrations Success");
  } catch (error) {
    console.log(error);
  }
}
