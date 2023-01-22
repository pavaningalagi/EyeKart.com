const url = `https://gray-hilarious-hedgehog.cyclic.app`;

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
} catch (error) {
    console.log(error);
}
    
};

getdata();

const append = (data) => {
    document.getElementById("cartcount").innerText=data.length;

    const coniner = document.getElementById('detailsdiv');
    const cartpricediv = document.getElementById('cartpricediv');
        coniner.innerHTML = null;

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

        // let rhsdiv=document.createElement("div");
        //     rhsdiv.setAttribute("id", "rhsdiv");
        // let totalprice = document.createElement("div");
        //     totalprice.setAttribute("id", "totalprice" );
        // let tprice = document.createElement("p");
        //     tprice.innerText = "Total Price";
        // let price = document.createElement("p");
        //     price.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>`+el.price;
        //     pricediv.append(fprice,price);


    });

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