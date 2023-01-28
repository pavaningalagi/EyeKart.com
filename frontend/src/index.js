
import { navbar } from '../component/navbar.js';
import {carousel,trendone} from '../component/carousel.js';
import { footer } from '../component/footer.js';
// import { signup } from '../component/signup.js';
const nav = document.getElementById('nava');
      nav.innerHTML = navbar();
const ft = document.getElementById('ft');
      ft.innerHTML =footer();
const url = ``;
      
let loginbtn = document.getElementById('loginbtn');
      
      loginbtn.onclick=() =>{
            document.querySelector(".popup").classList.add('active');
      };
document.querySelector('.popup .close-btn').addEventListener("click", () =>{
      document.querySelector(".popup").classList.remove('active');
});

let create_acc = document.getElementById('create_acc');
      create_acc.onclick = () =>{
            document.querySelector(".popup").classList.remove('active');
            document.querySelector(".popups").classList.add('active');
      };
document.querySelector('.popups .close-btns').addEventListener("click", () =>{
            document.querySelector(".popups").classList.remove('active');
      });

let signin = document.getElementById('signin');
      signin.onclick=() =>{
            document.querySelector(".popups").classList.remove('active');
            document.querySelector(".popup").classList.add('active');
      };
document.querySelector('.popup .close-btn').addEventListener("click", () =>{
document.querySelector(".popup").classList.remove('active');
});


// singup

let createaccount = document.getElementById('createaccount');
createaccount.onclick = async()=> {
//     e.preventDefault();
    let user_data = {
      f_name:document.getElementById('f_names').value,
      l_name:document.getElementById('l_names').value,
      mobile:document.getElementById('mobiles').value,
      email:document.getElementById('emails').value,
      pass:document.getElementById('passwords').value,
    }
// console.log(user_data);
try {
    let res = await fetch(`${url}/users/register`,{
        method: "POST",
        body: JSON.stringify(user_data),
        headers:{"content-type": "application/json"}
    }) ;
    console.log(res);
      document.querySelector(".popups").classList.remove('active');
      document.querySelector(".popup").classList.add('active');
} catch (error) {
    console.log(error);
}
    
};


// login 
let login = document.getElementById('logins');
login.onclick = async(e)=> {
    e.preventDefault();
    let user_data = {
        email:document.getElementById('email').value,
        pass:document.getElementById('password').value,
    }
// console.log(user_data);


try {
    let res = await fetch (`${url}/users/login`,{
        method: "POST",
        body: JSON.stringify(user_data),
        headers:{"content-type": "application/json"}
    }) ;
    res = await res.json();
    const token = res.token;
    localStorage.setItem("token", token);
    console.log(res);
//     console.log(token);
document.querySelector(".popup").classList.remove('active');

let usernames=[];
let nam=user_data.email.length-11;
for(let i=0;i<=nam;i++){
usernames.push(user_data.email[i]);
}
// console.log(usernames);
localStorage.setItem("username", usernames.join(""));

let logginbtn = document.getElementById('logginbtn');
      logginbtn.innerText = localStorage.getItem("username");
} catch (error) {
    console.log(error);
}
    
};


      



      
      
