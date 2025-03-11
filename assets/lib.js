import { ToastAndroid } from "react-native";

export const API_URL = 'https://pokerapi.jumatechs.xyz/telegram'; //rest api url base

export const toasts = (message)=>{
    return ToastAndroid.show(message, ToastAndroid.SHORT);
}