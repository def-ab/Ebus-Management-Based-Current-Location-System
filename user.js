// Search Bus Location
const db = firebase.firestore();

document.getElementById('search-bus-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const source = document.getElementById('source').value;
  const destination = document.getElementById('destination').value;

  db.collection('buses').where('route', '==', `${source}-${destination}`).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const busData = doc.data();
      document.getElementById('bus-info').innerHTML = `
        <h3>Bus Type: ${busData.busType}</h3>
        <p>Contact: ${busData.contact}</p>
        <p>Location: ${busData.location}</p>
      `;
    });
  }).catch((error) => {
    alert(error.message);
  });
});
