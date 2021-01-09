// const admin = require('firebase-admin');

// var serviceAccount = require('../../serviceAccountKey.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://social-appfs.firebaseio.com"
// });

// // admin.initializeApp();

// const db = admin.firestore();

// module.exports = { admin, db };

const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };
