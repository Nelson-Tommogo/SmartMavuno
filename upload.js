const firebaseConfig = {
    apiKey: "AIzaSyApU7_YcSXNXzixSxD8KBRtivt5oVuyj2c",
    authDomain: "smartmavuno.firebaseapp.com",
    databaseURL: "https://smartmavuno-default-rtdb.firebaseio.com",
    projectId: "smartmavuno",
    storageBucket: "smartmavuno.appspot.com",
    messagingSenderId: "298910741240",
    appId: "1:298910741240:web:dbbe6e3dfcfc1568e9c10d",
    measurementId: "G-N1C5FBGVEE"
  };
  const form = document.getElementById('imageUploadForm');
const imageInput = document.getElementById('imageInput');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const file = imageInput.files[0];
  const storageRef = firebase.storage().ref();
  const imagesRef = storageRef.child('images/' + file.name);
  imagesRef.put(file)
    .then(function(snapshot) {
      console.log('Image uploaded successfully.');
    })
    .catch(function(error) {
      console.error('Error uploading image:', error);
    });
});