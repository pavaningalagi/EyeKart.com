const carousel = ()=>{
    let carousel_div= document.getElementById("carousel");
    let images= ['https://static1.lenskart.com/media/desktop/img/Jan23/desktoop.gif',
                'https://static1.lenskart.com/media/desktop/img/Dec22/new-collection/desktop.gif',
                'https://static1.lenskart.com/media/desktop/img/Dec22/blend-edit/web.jpg',
                'https://static1.lenskart.com/media/desktop/img/Nov22/airplay/desk-play.jpg',
                'https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif',
                'https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif',
                'https://static1.lenskart.com/media/desktop/img/Nov22/mens-edit/desktop.jpg',
                'https://static1.lenskart.com/media/desktop/img/Oct22/at/web.jpg',
                'https://static1.lenskart.com/media/desktop/img/Nov22/trans1.gif',
                'https://static1.lenskart.com/media/desktop/img/Jan23/23jan/hooper/hooper-web.jpg',
                'https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif',
                'https://static1.lenskart.com/media/desktop/img/Jan23/helios-plp/web%20banner.gif',
                'https://static1.lenskart.com/media/desktop/img/Dec22/5-Jan/1920x530(play-now)%20(1).gif'
                ];

    let imgElement = document.createElement('img');
    imgElement.setAttribute('class', "imgelement");
        imgElement.src =images[0];
        carousel_div.append(imgElement);

    let i=1;
    setInterval(function() {
        if(i==images.length){
            i=0;
        };

        // append images
        imgElement.src= images[i];
        carousel_div.append(imgElement);
        i++;
        }, 5000);
};

carousel();

const trendone = ()=>{
    let trend_div= document.getElementById("trend_rhs_div");
        trend_div.innerHTML = null;
    let images= ['https://static1.lenskart.com/media/desktop/img/Sep21/image179.png',
                'https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg'
                ];
    let div_element0 = document.createElement('div');
        div_element0.setAttribute('class', "trendelement");
    let imgElement0 = document.createElement('img');
        imgElement0.src =images[0];
    let p0 = document.createElement('p');
        p0.innerText="Round";
    let btn0 = document.createElement('button');
        btn0.innerText="Explore";
        btn0.onclick=()=>{
            window.location.href="https://www.lenskart.com/eyeglasses/frame-shape/round.html"
        }
        div_element0.append(imgElement0,p0,btn0);

    let div_element1 = document.createElement('div');
        div_element1.setAttribute('class', "trendelement");
    let imgElement1 = document.createElement('img');
        imgElement1.src =images[1];
    let p1 = document.createElement('p');
        p1.innerText="Cat-Eye";
    let btn1 = document.createElement('button');
        btn1.innerText="Explore";
        btn1.onclick=()=>{
            window.location.href="https://www.lenskart.com/eyeglasses/brands/vincent-chase-eyeglasses/cat-eye.html"
        }
        div_element1.append(imgElement1,p1,btn1);

    let div_element2 = document.createElement('div');
        div_element2.setAttribute('class', "trendelement");
    let imgElement2 = document.createElement('img');
        imgElement2.src =images[2];
    let p2 = document.createElement('p');
        p2.innerText="Clubmaster";
    let btn2 = document.createElement('button');
        btn2.innerText="Explore";
        btn2.onclick=()=>{
            window.location.href="https://www.lenskart.com/eyewear/promotion/frame-shape/clubmasters.html"
        }
        div_element2.append(imgElement2,p2,btn2);
        
    let div_element3 = document.createElement('div');
        div_element3.setAttribute('class', "trendelement");
    let imgElement3 = document.createElement('img');
        imgElement3.src =images[3];
    let p3 = document.createElement('p');
        p3.innerText="Transparent";
    let btn3 = document.createElement('button');
        btn3.innerText="Explore";
        btn3.onclick=()=>{
            window.location.href="https://www.lenskart.com/eyeglasses/promotions/vc-transparent.html"
        }
        div_element3.append(imgElement3,p3,btn3);

        
        trend_div.append(div_element0,div_element1,div_element2,div_element3);
};

const trendtwo = ()=>{
    let trend_div= document.getElementById("trend_rhs_div");
        trend_div.innerHTML = null;
    let images= ['https://static1.lenskart.com/media/desktop/img/Sep21/image179.png',
                'https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg',
                'https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg'
                ];
    let div_element0 = document.createElement('div');
        div_element0.setAttribute('class', "trendelement");
    let imgElement0 = document.createElement('img');
        imgElement0.src =images[4];
    let p0 = document.createElement('p');
        p0.innerText="Blend Edit";
    let btn0 = document.createElement('button');
        btn0.innerText="Explore";
        btn0.onclick=()=>{
            window.location.href="https://www.lenskart.com/eyeglasses/brands/vincent-chase-eyeglasses/blend-edit.html"
        }
        div_element0.append(imgElement0,p0,btn0);

    let div_element1 = document.createElement('div');
        div_element1.setAttribute('class', "trendelement");
    let imgElement1 = document.createElement('img');
        imgElement1.src =images[5];
    let p1 = document.createElement('p');
        p1.innerText="Air Clip On";
    let btn1 = document.createElement('button');
        btn1.innerText="Explore";
        btn1.onclick=()=>{
            window.location.href="https://www.lenskart.com/eyeglasses/brands/vincent-chase-eyeglasses/air-clip-on.html"
        }
        div_element1.append(imgElement1,p1,btn1);

    let div_element2 = document.createElement('div');
        div_element2.setAttribute('class', "trendelement");
    let imgElement2 = document.createElement('img');
        imgElement2.src =images[6];
    let p2 = document.createElement('p');
        p2.innerText="Air Flex";
    let btn2 = document.createElement('button');
        btn2.innerText="Explore";
        btn2.onclick=()=>{
            window.location.href="https://www.lenskart.com/eyeglasses/brands/vincent-chase-eyeglasses/air-flex.html"
        }
        div_element2.append(imgElement2,p2,btn2);
        
    let div_element3 = document.createElement('div');
        div_element3.setAttribute('class', "trendelement");
    let imgElement3 = document.createElement('img');
        imgElement3.src =images[7];
    let p3 = document.createElement('p');
        p3.innerText="Retro Aviator";
    let btn3 = document.createElement('button');
        btn3.innerText="Explore";
        btn3.onclick=()=>{
            window.location.href="https://www.lenskart.com/eyeglasses/brands/vincent-chase-eyeglasses/aviator.html"
        }
        div_element3.append(imgElement3,p3,btn3);

        
        trend_div.append(div_element0,div_element1,div_element2,div_element3);
};

trendone();
const leftarrow = document.getElementById('leftarrow');
      leftarrow.onclick = () => {
        trendone();
    };

const rightarrow = document.getElementById('rightarrow');
    rightarrow.onclick = () => {
        trendtwo();
    };


export {carousel, trendone, trendtwo};


