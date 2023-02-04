

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUzf-YsG251Uuu1UkM0zXnGk1phwCAtXU",
    authDomain: "fir-frontend-c7f17.firebaseapp.com",
    projectId: "fir-frontend-c7f17",
    storageBucket: "fir-frontend-c7f17.appspot.com",
    messagingSenderId: "535828322647",
    appId: "1:535828322647:web:afbabcfa95994e5dd18612"
});


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user);
        })
        .catch((err) => {
            alert(err.message);
            console.log(err.code);
            console.log(err.message);
        })
}

const login = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user);
        })
        .catch((err) => {
            alert(err.message);
            console.log(err.code);
            console.log(err.message);
        })
}

const saveData = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    db.collection('users')
        .add({
            email: email,
            password: password
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
}

const readData = () => {
    db.collection('users')
        .get()
        .then((data) => {
            console.log(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }));
        })
}

const updateData = () => {
    db.collection('users').doc('EPFJf4nH0MLcw7ciq0Yb')
        .update({
            email: 'apurvAnandIsAGoodBoy@gmail.com',
            password: '12345678910'
        })
        .then(() => {
            alert('Data updated!')
        })
}

const deleteData = () => {
    db.collection('users').doc('EPFJf4nH0MLcw7ciq0Yb').delete()
        .then(() => {
            alert('Data deleted!')
        })
        .catch((err) => {
            console.log(err);
        })
}