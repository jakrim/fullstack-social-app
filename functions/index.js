const functions = require('firebase-functions');
const app = require('express')();

const FBAuth = require('./util/fbAuth');

const {
  getAllScreams,
  postOneScream,
  getScream,
  likeScream,
  unlikeScream,
  commentOnScream,
} = require('./handlers/screams');
const {
  signUp,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require('./handlers/users');
const fbAuth = require('./util/fbAuth');

// Screams routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);

app.get('/scream/:screamId/like', FBAuth, likeScream);
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream);
app.post('/scream/:screamId/comment', FBAuth, commentOnScream);
//TODO: Delete Scream

// Users Routes (Auth)
app.post('/signup', signUp);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
