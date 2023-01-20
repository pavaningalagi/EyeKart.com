
import { navbar } from '../component/navbar.js';
import {carousel,trendone} from '../component/carousel.js';
import { footer } from '../component/footer.js';

const nav = document.getElementById('nava');
      nav.innerHTML = navbar();
const ft = document.getElementById('ft');
      ft.innerHTML =footer();

const loginbtn = document.getElementById('loginbtn');
      loginbtn.onclick=() =>{
            document.querySelector(".popup").classList.add('active');
      };
document.querySelector('.popup .close-btn').addEventListener("click", () =>{
      document.querySelector(".popup").classList.remove('active');
});

const create_acc = document.getElementById('create_acc');
      create_acc.onclick = () =>{
            document.querySelector(".popup").classList.remove('active');
            document.querySelector(".popups").classList.add('active');
      };
document.querySelector('.popups .close-btns').addEventListener("click", () =>{
            document.querySelector(".popups").classList.remove('active');
      });

const signin = document.getElementById('signin');
      signin.onclick=() =>{
            document.querySelector(".popups").classList.remove('active');
            document.querySelector(".popup").classList.add('active');
      };
document.querySelector('.popup .close-btn').addEventListener("click", () =>{
document.querySelector(".popup").classList.remove('active');
});


      



      
      