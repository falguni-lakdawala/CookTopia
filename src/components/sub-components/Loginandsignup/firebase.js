import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDZMQTshUKvJhewu6ElLU-X5YOGSwJf7aM",
    authDomain: "done-ninja.firebaseapp.com",
    databaseURL: "https://done-ninja-default-rtdb.firebaseio.com",
    projectId: "done-ninja",
    storageBucket: "done-ninja.appspot.com",
    messagingSenderId: "361469444727",
    appId: "1:361469444727:web:9ffa642d9916e347f93c72",
    measurementId: "G-LLDCSBDFNF"
};

let instance;

export default function getFirebase() {
    if (typeof window !== "undefined") {
        if (instance) return instance
        instance = firebase.initializeApp(firebaseConfig);
        return instance
    }

    return null
}