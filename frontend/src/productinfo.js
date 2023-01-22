import { navbar } from '../component/navbar.js';
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

const url = `https://gray-hilarious-hedgehog.cyclic.app`;
  
const append = () => {
      const product = JSON.parse(localStorage.getItem("product")); 

      const coniner  = document.getElementById("productinfo_lhs");
      coniner.innerHTML = null;
      
  
product.photos.forEach((el) => {
          let subcont = document.createElement("div");
              subcont.innerHTML = null;
              subcont.setAttribute("class", "subproductdiv");

          let img = document.createElement("img");
            img.src = el;
              subcont.append(img);
              coniner.append(subcont);
  
});

const cat = document.getElementById("cat");
      cat.innerText = product.category.toUpperCase();
const titlle = document.getElementById("titlle");
      titlle.innerText=product.title
const sizee = document.getElementById("sizee");
      sizee.innerText=`Size: ${product.size}`
const pricee= document.getElementById("pricee");
      pricee.innerHTML=`<i class="fa-solid fa-indian-rupee-sign"></i>`+product.price;

}
append();


const buynow = document.getElementById("buynow");
      buynow.onclick = async() =>{
            const product = JSON.parse(localStorage.getItem("product")); 

            try {
                  if(localStorage.getItem("token")){
                  let res = await fetch(`${url}/cart/add`,{
                      method: "POST",
                      body: JSON.stringify(product),
                      headers:{
                          "content-type": "application/json",
                          "Authorization": localStorage.getItem("token")
                  }
                  }) ;
                  // res.send(res.status);
                  // console.log(res);
                  console.log("added product to cart");
                  window.location.href = "./cart.html";
            }else{
                  alert("Please login");
                  window.location.href = "./index.html";
            }
              
              } catch (error) {
                  console.log(error);
                  alert("Error: " + error);
              }
      };






