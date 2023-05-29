import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  // Your Firebase configuration details
};

const app = initializeApp(firebaseConfig);
function uploadImage() {
    // Get the selected image file
    const file = document.getElementById('photo').files[0];
  
    // Create a storage reference
    const storageRef = firebase.storage().ref();
  
    // Generate a unique name for the image file
    const imageName = new Date().getTime() + '-' + file.name;
  
    // Upload the image file to Firebase Storage
    const uploadTask = storageRef.child('images/' + imageName).put(file);
  
    // Register the upload progress event
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Display the upload progress (optional)
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload Progress: ' + progress + '%');
      },
      (error) => {
        // Handle any errors during the upload
        console.error('Upload Error:', error);
      },
      () => {
        // Handle the successful upload
        console.log('Upload Complete');
  
        // Get the download URL of the uploaded image
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('Download URL:', downloadURL);
  
          // Perform any additional operations with the download URL,
          // such as saving it to a database or displaying the image on your website.
        });
      }
      
    );
  }
  