// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email.endsWith('@school.edu')) {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                document.getElementById('login').style.display = 'none';
                document.getElementById('post-section').style.display = 'block';
            })
            .catch(error => {
                console.error('Login Error:', error);
            });
    } else {
        alert('Please use your school email.');
    }
}

// Submit post function
function submitPost() {
    const content = document.getElementById('post-content').value;
    db.collection('posts').add({
        content: content,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert('Post submitted successfully!');
        document.getElementById('post-content').value = '';
    }).catch(error => {
        console.error('Error adding post:', error);
    });
}