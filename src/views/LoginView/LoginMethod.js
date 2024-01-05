
// validation.js
export const validateEmail = (rule, value, callback) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
        callback();
    } else {
        callback(new Error('Please Write a valid Email'));
    }
};
