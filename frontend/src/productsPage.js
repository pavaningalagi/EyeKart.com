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

const url = `https://gray-hilarious-hedgehog.cyclic.app/`;

const getdata = async()=> {
      // e.preventDefault();
      // console.log("heloo");
  try {
      let res = await fetch (`${url}/products`) ;
      let data=await res.json();
      console.log(data);
      append(data);
  } catch (error) {
      console.log(error);
  }
      
};
  
getdata();
  
const append = (data) => {
      const coniner  = document.getElementById('productsdiv');
      coniner.innerHTML = null;
  
      data.forEach((el) => {
          let subcont = document.createElement("div");
              subcont.innerHTML = null;
              subcont.setAttribute("class", "subproductdiv");

              subcont.onclick = () =>{
                  console.log(el._id);
                  localStorage.setItem("product",JSON.stringify(el));
                  window.location.href = `./productinfo.html`

              }
          let img = document.createElement("img");
            img.src = el.photos[0];
          let title = document.createElement("h4");
              title.innerHTML = el.title;
          let price = document.createElement("p");
              price.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>`+ el.price + ` (+tax)`;

      //     let addtocart = document.createElement("button");
      //     addtocart.innerText = "addtocart";
      //     addtocart.onclick =(e)=>{
      //             e.preventDefault();
      //             add_cart(el._id);
      //         }
  
              subcont.append(img,title,price);
              coniner.append(subcont);
      });
  
};

let logginbtn = document.getElementById('logginbtn');
      logginbtn.innerText = localStorage.getItem("username");







// cart
// try {
      //             let res = await fetch (`${url}/cart/add`,{
      //                 method: "POST",
      //                 body: JSON.stringify(product),
      //                 headers:{
      //                     "content-type": "application/json",
      //                     "Authorization": localStorage.getItem("token")
      //             }
      //             });
      //             console.log(res);
              
      //   } catch (error) {
      //             console.log(error);
      // }