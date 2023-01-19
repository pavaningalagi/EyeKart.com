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
        p0.innerText="Blend Edit";
    let btn1 = document.createElement('button');
        btn1.innerText="Explore";
        btn1.onclick=()=>{
            window.location.href="https://www.lenskart.com/eyeglasses/brands/vincent-chase-eyeglasses/blend-edit.html"
        }
        div_element0.append(imgElement0,p0,btn1);

    let div_element1 = document.createElement('div');
        div_element1.setAttribute('class', "trendelement");
    let imgElement1 = document.createElement('img');
        imgElement1.src =images[1];
    let p1 = document.createElement('p');
        p1.innerText="Air Clip On";
        div_element1.append(imgElement1,p1);

    let div_element2 = document.createElement('div');
        div_element2.setAttribute('class', "trendelement");
    let imgElement2 = document.createElement('img');
        imgElement2.src =images[2];
        div_element2.append(imgElement2);
        
    let div_element3 = document.createElement('div');
        div_element3.setAttribute('class', "trendelement");
    let imgElement3 = document.createElement('img');
        imgElement3.src =images[3];
        div_element3.append(imgElement3);

        
        trend_div.append(div_element0,div_element1,div_element2,div_element3);
};

trendone();
export {carousel, trendone};


let imgElement4 = document.createElement('img');
imgElement4.setAttribute('class', "trendelement");
imgElement4.src =images[4];
let imgElement5 = document.createElement('img');
imgElement5.setAttribute('class', "trendelement");
imgElement5.src =images[5];
let imgElement6 = document.createElement('img');
imgElement6.setAttribute('class', "trendelement");
imgElement6.src =images[6];
let imgElement7 = document.createElement('img');
imgElement7.setAttribute('class', "trendelement");
imgElement7.src =images[7];