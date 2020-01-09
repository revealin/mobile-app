import axios, { AxiosResponse, AxiosError } from 'axios';
import config from '../../configs/config.json';
import { saveItem } from '../services/asyncStorageService';
import { Alert } from 'react-native';
import { getMe } from '../http/userHttpService';

export async function connection(
        mail: string,
        password: string,
        callback: Function
    ) {
    axios.post(`${config.api_url}/auth/signin`, {
        email: mail,
        password: password
    })
    .then((response: AxiosResponse) => {
        // Store the token in the storage
        saveItem(config.token_storage_key, response.data.token)
            .then(() => {
                getMe()
                    .then((result: boolean) => {
                        if (!result) {
                            callback(false);
                        } else {
                            callback(true);
                        }
                    })
            })
    })
    .catch((error: AxiosError) => {
        console.log(error);
        Alert.alert("Error");
    })
};
