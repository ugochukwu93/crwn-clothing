import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyCZ_ka3MQxMG6nMg_swWpRCLw7DubPvvag",
        authDomain: "crwn-db-b7a0c.firebaseapp.com",
        projectId: "crwn-db-b7a0c",
        storageBucket: "crwn-db-b7a0c.appspot.com",
        messagingSenderId: "600789100163",
        appId: "1:600789100163:web:ab1ee2f165b1af6c80ddb6",
        measurementId: "G-QE7FH25Z3J"
}

export const createUserProfileDocument = async (userAuth, additionalData ) => {
     if (!userAuth) return

     const userRef = firestore.doc(`users/${userAuth.uid}`)

     const snapShot = await userRef.get();

     if (!snapShot.exists) {
         const { displayName, email } = userAuth;
         const createdAt = new Date()
     

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('error creating user', error.message)
        }
     }

    return userRef

     
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase






