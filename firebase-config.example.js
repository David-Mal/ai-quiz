// Firebase configuration template
// Copy this file to firebase-config.js and fill in your project credentials
// from the Firebase Console: https://console.firebase.google.com/
//
// IMPORTANT: firebase-config.js is gitignored — never commit real credentials.
// For Netlify deployment, the build script generates this file automatically
// from environment variables (see netlify.toml).

const firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebasedatabase.app",
    projectId: "your-project-id",
    storageBucket: "your-project.firebasestorage.app",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
};

window.firebaseConfig = firebaseConfig;
