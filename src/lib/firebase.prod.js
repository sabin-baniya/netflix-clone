import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'


const config = {
    apiKey: "AIzaSyD51dD76SPOnmtTp7eonM6Sa8QfZrJUBIA",
    authDomain: "netflix-clone-by-sabinbaniya.firebaseapp.com",
    projectId: "netflix-clone-by-sabinbaniya",
    storageBucket: "netflix-clone-by-sabinbaniya.appspot.com",
    messagingSenderId: "427954982171",
    appId: "1:427954982171:web:6de774935427def4f797be"
};

const firebase = initializeApp(config);

// seedDatabase(firebase)

export { firebase }