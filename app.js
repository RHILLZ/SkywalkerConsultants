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

     });

     subscribe.addEventListener('click', () => {
         const subscribersEmail = email.value;

        docRef.update({ emails: firebase.firestore.FieldValue.arrayUnion(subscribersEmail) });
        
        email.style.display ='none';
        subscribe.style.display = 'none';
        text.innerHTML = 'Thank You for Subscribing!';
        
     });


     var showInfo = document.querySelectorAll(".show-info");
     var infoNodeList = document.querySelectorAll('.service');
     const rollovers = infoNodeList[0];
     const longTerm = infoNodeList[1];
     const collegePlan = infoNodeList[2];
     const lifeInsurance = infoNodeList[3];
     const legacyPlan = infoNodeList[4];
     const willsAndTrust = infoNodeList[5];


     

     rollovers.addEventListener('click', ()=>{
        const icon = rollovers.children[0].children[1];
         if(rollovers.children[1].classList.contains('info-hide')){

             rollovers.children[1].classList.remove('info-hide');
             icon.style.transform = "rotate(180deg)";
            }else{
                
                rollovers.children[1].classList.add('info-hide');
                icon.style.transform = "rotate(0deg)";
         }
     });
     longTerm.addEventListener('click', ()=>{
        const icon = longTerm.children[0].children[1];
         if(longTerm.children[1].classList.contains('info-hide')){

             longTerm.children[1].classList.remove('info-hide');
             icon.style.transform = "rotate(180deg)";
            }else{
                
                longTerm.children[1].classList.add('info-hide');
                icon.style.transform = "rotate(0deg)";
         }
     });
     collegePlan.addEventListener('click', ()=>{
        const icon = collegePlan.children[0].children[1];
         if(collegePlan.children[1].classList.contains('info-hide')){

             collegePlan.children[1].classList.remove('info-hide');
             icon.style.transform = "rotate(180deg)";
            }else{
                
                collegePlan.children[1].classList.add('info-hide');
                icon.style.transform = "rotate(0deg)";
         }
     });
     lifeInsurance.addEventListener('click', ()=>{
        const icon = lifeInsurance.children[0].children[1];
         if(lifeInsurance.children[1].classList.contains('info-hide')){

             lifeInsurance.children[1].classList.remove('info-hide');
             icon.style.transform = "rotate(180deg)";
            }else{
                
                lifeInsurance.children[1].classList.add('info-hide');
                icon.style.transform = "rotate(0deg)";
         }
     });
     legacyPlan.addEventListener('click', ()=>{
        const icon = legacyPlan.children[0].children[1];
         if(legacyPlan.children[1].classList.contains('info-hide')){

             legacyPlan.children[1].classList.remove('info-hide');
             icon.style.transform = "rotate(180deg)";
            }else{
                
                legacyPlan.children[1].classList.add('info-hide');
                icon.style.transform = "rotate(0deg)";
         }
     });
     willsAndTrust.addEventListener('click', ()=>{
         const icon = willsAndTrust.children[0].children[1];
    
         if(willsAndTrust.children[1].classList.contains('info-hide')){

            willsAndTrust.children[1].classList.remove('info-hide');
            icon.style.transform = "rotate(180deg)";
        }else{
            
            willsAndTrust.children[1].classList.add('info-hide');
            icon.style.transform = "rotate(0deg)";
         }
     });



const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click',()=>{
    // hamburger.style.transform = "rotate(360deg)";
    // hamburger.style.opacity = '0';
    hamburger.classList.toggle('show');
    // close.style.transform = "rotate(-360deg)";
    // close.style.opacity = '1';
    close.classList.toggle('show');
    mobileNav.classList.toggle('mobile-nav-active');
    
});

close.addEventListener('click', ()=>{
    close.classList.toggle('show');
    hamburger.classList.toggle('show');
    mobileNav.classList.toggle('mobile-nav-active');
});

const navLinks = document.querySelectorAll('a');

for(var navLink of navLinks){

    
    navLink.addEventListener('click', ()=>{
        close.classList.toggle('show');
        hamburger.classList.toggle('show');
        mobileNav.classList.toggle('mobile-nav-active');
    });
}
    



 })();