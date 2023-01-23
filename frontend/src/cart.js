const url = `https://gray-hilarious-hedgehog.cyclic.app/`;

const getdata = async()=> {
try {
    let res = await fetch(`${url}/cart`,{
        headers:{
            "Authorization": localStorage.getItem("token")
                }
    });
    let data=await res.json();
        // let actualdata =await JSON.parse(data);
        console.log(data);
    append(data);
    // bill(data);
} catch (error) {
    console.log(error);
}
    
};

getdata();

const append = (data) => {
    document.getElementById("cartcount").innerText=data.length;
    
    
    const coniner = document.getElementById('detailsdiv');
        coniner.innerHTML = null;
        let total_price =0;
        

    data.forEach((el) => {
        let maindiv = document.createElement("div");
            maindiv.setAttribute("id" ,"maindivs");
        let imgdiv = document.createElement("div");
            imgdiv.setAttribute("id" ,"cimgdiv");
        let img = document.createElement("img");
            img.src = el.photos[0];
            imgdiv.append(img);

        let datadiv = document.createElement("div");
            datadiv.setAttribute("id", "cdatadiv");
        let title = document.createElement("p");
            title.innerText = el.title;

        let pricediv = document.createElement("div");
            pricediv.setAttribute("id","cpricediv" );
        let fprice = document.createElement("p");
            fprice.innerText = "FinalPrice";
        let price = document.createElement("p");
            price.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>`+el.price;
            pricediv.append(fprice,price);
            total_price = total_price + el.price;
        let deleteit = document.createElement("button");
            deleteit.innerText = "Remove";
            deleteit.setAttribute("id","deleteit" );
            deleteit.onclick =(e)=>{
                e.preventDefault();
                delete_note(el._id);
            }

            datadiv.append(title,pricediv,deleteit);
            maindiv.append(imgdiv,datadiv)
            coniner.append(maindiv);
    });
    document.getElementById("totalprice").innerHTML =`<i class="fa-solid fa-indian-rupee-sign"></i>`+ total_price;
    if(data.length>1){
    let diccount = total_price/2
    document.getElementById("gold").innerHTML =`<i class="fa-solid fa-indian-rupee-sign"></i>`+ Math.floor(diccount);
    document.getElementById("tfdic").innerHTML =`<i class="fa-solid fa-indian-rupee-sign"></i>`+ Math.floor(total_price-diccount);
    document.getElementById("tax").innerHTML =`<i class="fa-solid fa-indian-rupee-sign"></i>`+ Math.floor((total_price-diccount)*0.18);
    document.getElementById("payable").innerHTML =`<i class="fa-solid fa-indian-rupee-sign"></i>`+ Math.floor(((total_price-diccount)*0.18)+total_price-diccount);
}else{
    
    document.getElementById("gold").innerHTML =`<i class="fa-solid fa-indian-rupee-sign"></i>`+ 0;
    document.getElementById("tfdic").innerHTML =`<i class="fa-solid fa-indian-rupee-sign"></i>`+ Math.floor(total_price);
    document.getElementById("tax").innerHTML =`<i class="fa-solid fa-indian-rupee-sign"></i>`+ Math.floor((total_price)*0.18);
    document.getElementById("payable").innerHTML =`<i class="fa-solid fa-indian-rupee-sign"></i>`+ Math.floor(((total_price)*0.18)+total_price);

    let element = document.getElementById("bogo");
        element.style.display = "none";
    
}
    
    // console.log(total_price);


    
};


const delete_note = async(id) =>{
    try {
        let res = await fetch(`${url}/cart/delete/${id}`,{
            method: "DELETE",
            headers:{
                "Authorization": localStorage.getItem("token")
        }
        });
        console.log(res);
        // window.location.reload();
        getdata();
    
    } catch (error) {
        console.log(error);
    }
    

}

