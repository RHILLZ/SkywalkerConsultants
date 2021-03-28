import firebaseConfig from "../secrets";
(()=>{

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhHpAx1zy0cVInPbCsh6H_wjJxAnvuEsM",
    authDomain: "skywalker-consulting.firebaseapp.com",
    databaseURL: "https://skywalker-consulting-default-rtdb.firebaseio.com",
    projectId: "skywalker-consulting",
    storageBucket: "skywalker-consulting.appspot.com",
    messagingSenderId: "337383931316",
    appId: "1:337383931316:web:712e404b0b3b03009c46e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const docRef = db.doc("Subscribers/email-list");

const generatorBtn = document.getElementById('generator');
const emailList = document.getElementById('email-list');

generatorBtn.addEventListener('click', () =>{
    db.collection('Subscribers').doc('email-list').get().then((snap) => 
    
    snap.data().emails.forEach(email => {

        let emailAddy = document.createElement('h5');
        emailAddy.innerHTML = email;
        emailList.appendChild(emailAddy);

        
    })
    
);

    


});



})();