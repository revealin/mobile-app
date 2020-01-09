import { AsyncStorage } from 'react-native';

export async function saveItem(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log(e);
    }
};

export async function getItem(key: string) {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.log(e);
    }
};

export async function deleteItem(key: string) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log(e);
    }
}
