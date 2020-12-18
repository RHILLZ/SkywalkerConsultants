 (function() {



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

     const email = document.querySelector('#email');
     const subscribe = document.querySelector('#subscribe');
     const text = document.querySelector('#validator-text');
     var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


     email.addEventListener('keydown', () => {

         if (email.value.match(pattern)) {
             subscribe.removeAttribute('disabled', false);
             text.innerHTML = "Email is Valid. Please submit";
             text.classList.add('valid');
             text.classList.remove('invalid');

         } else {
             subscribe.setAttribute('disabled', true);
             text.innerHTML = "Email is invalid, Please input a valid email address.";
             text.classList.add('invalid');
             text.classList.remove('valid');
         }

         if (email.value == "") {
             text.removeAttribute('class');
             text.innerHTML = '';
         }

     })

     subscribe.addEventListener('click', () => {
         const subscribersEmail = email.value;

         docRef.update({ emails: firebase.firestore.FieldValue.arrayUnion(subscribersEmail) });

         console.log("Done adding email to list!");
     })


     var showInfo = document.querySelectorAll(".show-info");
     var infoNodeList = document.querySelectorAll('.mobile-services-info');
     const rollovers = infoNodeList[0];
     const longTerm = infoNodeList[1];


     var icon;
     var i;
     // console.log(showInfo.length);

     for (i = 0; i < 6; i++) {
         showInfo[i].addEventListener('click', (e) => {
             //  infoNodeList[i].classList.contains('info-hide') ? infoNodeList[i].classList.remove('info-hide') : infoNodeList[i].classList.add('info-hide');
             console.log(i);
         })

     }







 })();