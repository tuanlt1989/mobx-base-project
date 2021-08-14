
import AsyncStorage from '@react-native-community/async-storage';

export default class StorageUtil {

    static USER_PROFILE = "userProfile"; // User profile
    static USER_TOKEN = "userToken"; // Save user token
    static FCM_TOKEN = "fcmToken"; // Fcm token

    /// Store item
    static async storeItem(key: string, item: unknown) {
        try {
            //we want to wait for the Promise returned by AsyncStorage.setItem()
            //to be resolved to the actual value before returning the value
            let jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
            console.log(jsonOfItem);
            return jsonOfItem;
        } catch (error) {
            console.log(error.message);
        }
    }

    /// Delete item
    static async deleteItem(key: string) {
        try {
            let deleteItem = await AsyncStorage.removeItem(key);
            return deleteItem;
        } catch (error) {
            console.log(error.message);
        }
    }

    /// Retrieve item
    static async retrieveItem(key: string) {
        try {
            let retrievedItem = await AsyncStorage.getItem(key);
            let item = JSON.parse(retrievedItem as string);
            return item;
        } catch (error) {
            console.log(error.message);
        }
        return
    }
}
