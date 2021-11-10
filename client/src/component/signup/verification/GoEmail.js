import axios from "axios"

export const email = {
    email: 'godtjrdl98@kakao.com'
}

export const call = () => {
    try {
        axios.post("http://localhost:5000/sendEmail", email)
        console.log('갔을까?')
    } catch (error) {
        console.log(error);
    }
}
