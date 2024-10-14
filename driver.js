// Posting Bus Info
const db = firebase.firestore();

document.getElementById('post-bus-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const busType = document.getElementById('busType').value;
  const contact = document.getElementById('contact').value;

  const user = firebase.auth().currentUser;
  
  db.collection('buses').add({
    driverId: user.uid,
    busType: busType,
    contact: contact,
    location: 'pending',
  }).then(() => {
    alert('Bus information posted!');
  }).catch((error) => {
    alert(error.message);
  });
});
