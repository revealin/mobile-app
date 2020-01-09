import axios, { AxiosResponse, AxiosError } from 'axios';
import config from '../configs/config.json';
import { Alert } from 'react-native';

export async function inscription(
        mail: string,
        firstName: string,
        password: string,
        gender: string,
        birth: Date,
        description: string,
        localization: {
            lat: number,
            lon: number
        },
        callback: Function
    ) {
    axios.post(`${config.api_url}/auth/signup`, {
        email: mail,
        password: password,
        name: firstName,
        gender: gender,
        birth: birth,
        description: description,
        localization: localization
    })
    .then((response: AxiosResponse) => {
        // Store the token in the storage
        callback();
    })
    .catch((error) => {
        console.log(error.response);
        Alert.alert(error.response);
    })
};

// export async function getListMatch( 
    
//     ){
//     axios.get(`${config.api_url}/users/id/matchs`, {
       
//     })
//     .then((response: AxiosResponse) => {
//         // Store the token in the storage
//         callback();
//     })
//     .catch((error) => {
//         console.log(error.response);
//         Alert.alert(error.response);
//     })
// };