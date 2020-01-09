import axios, { AxiosResponse, AxiosError } from 'axios';
import config from '../../configs/config.json';

import { getItem, deleteItem } from '../services/asyncStorageService';
import { Alert } from 'react-native';
import { Pictures } from '../../models/Pictures.js';

/* Get me with token */
export async function getMe(callback: Function, errorCallback: Function) {
    const userToken = await getItem(config.token_storage_key);

    if (userToken) {
        // Fetch api to retrieve user infos and return them.
        axios.get(`${config.api_url}/users/me`, {
            headers: {
                "x-access-token": userToken
            }
        }).then((resp: AxiosResponse) => {
            if (resp.status === 404) {
                deleteItem(config.token_storage_key);
                errorCallback();
            } else {
                callback(resp.data)
            }
        }).catch((error:AxiosError) => {
            errorCallback();
        })
    } else {
        errorCallback()
    }
}

/* Get a user with his id */
export async function getUser(userId: string, callback: Function, errorCallback: Function) {
    axios.get(`${config.api_url}/users/${userId}`)
        .then((response: AxiosResponse) => {
            callback(response.data);
        })
        .catch((error: AxiosError) => {
            errorCallback(error);
        });
}

/* Post a new picture */
export async function postPicture(
        userId: string,
        base64: string,
        callback: Function,
        errorCallback: Function
    ) {
    axios.post(`${config.api_url}/users/${userId}/pictures`, {
        base64: base64
    })
        .then((response: AxiosResponse) => {
            callback(response.data);
        })
        .catch((error: AxiosError) => {
            console.log(error);
            errorCallback(error)
        })
}

/* Delete a picture */
export async function deletePicture(
        pictureId: string,
        userId: string,
        callback: Function,
        errorCallback: Function
    ) {
        axios.delete(`${config.api_url}/users/${userId}/pictures/${pictureId}`)
            .then((response: AxiosResponse) => {
                callback()
            })
            .catch((error) => {
                errorCallback(error.response)
            })
}

/* Update description */
export async function updateDesc(
    description: string,
    userId: string,
    callback: Function,
    errorCallback: Function
) {
    axios.patch(`${config.api_url}/users/${userId}`, {
        description: description
    })
        .then((response: AxiosResponse) => {
            console.log(response);
            callback()
        })
        .catch((error: AxiosError) => {
            console.log(error);
            errorCallback()
        })
}

/* Deconnection */
export function deconnection(callback: Function, errorCallback: Function) {
    deleteItem(config.token_storage_key)
        .then(() => {
            callback()
        })
        .catch(() => {
            errorCallback()
        })
}

/* Get all users */
export function getAll(callback: Function, errorCallback: Function) {
    axios.get(`${config.api_url}/users`)
        .then((response: AxiosResponse) => {
            callback(response.data);
        })
        .catch((error: AxiosError) => {
            errorCallback(error);
        })
}
