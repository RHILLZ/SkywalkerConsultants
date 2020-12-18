 (function(){
    

     
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


  email.addEventListener('keydown', ()=>{

    if(email.value.match(pattern)){
        subscribe.removeAttribute('disabled', false);
        text.innerHTML = "Email is Valid. Please submit";
        text.classList.add('valid');
        text.classList.remove('invalid');
        
    }else{
        subscribe.setAttribute('disabled', true);
        text.innerHTML = "Email is invalid, Please input a valid email address.";
        text.classList.add('invalid');
        text.classList.remove('valid');
    }

    if(email.value == ""){
        text.removeAttribute('class');
        text.innerHTML = '';
    }
      
  })

  subscribe.addEventListener('click', ()=>{
      const subscribersEmail = email.value;

      docRef.update({emails : firebase.firestore.FieldValue.arrayUnion(subscribersEmail)});

      console.log("Done adding email to list!");
  })


  const services = document.querySelectorAll(".service");
  const infoDivs = document.querySelectorAll('.mobile-services-info');
  var service;
  var info;


//   for(service of services){
//       service.addEventListener('click',(e)=>{
//           console.log(e.target);
//       })
//   }
  for(info of infoDivs){
      info.addEventListener('click', (e)=>
      {
        info.classList.remove('info-hide');
        
        
        
        })
  }





})();