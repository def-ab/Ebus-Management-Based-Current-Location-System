// Firebase Authentication and Firestore
const auth = firebase.auth();
const db = firebase.firestore();

// Create Driver Account
document.getElementById('create-driver-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
    const user = userCredential.user;
    db.collection('drivers').doc(user.uid).set({
      email: user.email,
      role: 'driver',
    });
    alert('Driver account created successfully!');
  }).catch((error) => {
    alert(error.message);
  });
});
