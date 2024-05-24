import axios from "axios";

async function CreateUserApi(userName, userEmail, userPassword) {
    const data = {
        name: userName,
        email : userEmail,
        password : userPassword
    }
    axios.post('http://localhost:3000/api/user/create', data).then(
        res => {
            console.log(res.data)
        }
    ).catch(error =>{
        console.log(error);
    })
}

export {CreateUserApi}; 