let container=document.querySelector(".container-rotation");
let rotateAngle=0;
let up=document.querySelector(".up");
let down=document.querySelector(".down");
// shop nowbutton code 
let shopNow=document.querySelector(".shop-now");
let homeConatiner=document.querySelector(".home-container");
up.addEventListener("click",upWard);
down.addEventListener("click",downWard);
function upWard(){
   
    rotateAngle-=90;
    if(rotateAngle<-360){
        shopNow.style.display="flex";
rotateAngle=-360
    }
    container.style.transform=`rotate(${rotateAngle}deg)`;

}
function downWard(){
    rotateAngle+=90;
    if(rotateAngle>360){
        shopNow.style.display="flex";
rotateAngle=360;
    }
    container.style.transform=`rotate(${rotateAngle}deg)`
}

//shopnow display none and open page
shopNow.addEventListener("click",()=>{
homeConatiner.style.display="none"
});


// carousel
let leftControl=document.querySelector(".left");
let rightControl=document.querySelector(".right");
let flexBox=document.querySelector(".sec-1-con-1-flexbox");
leftControl.addEventListener("click",left);
rightControl.addEventListener("click",right);
let movement=0;
function left(){
 

 
    movement+=25;
    flexBox.style.transform=`translateX(${movement}%)`;
}
function right(){
    movement-=25;
    flexBox.style.transform=`translateX(${movement}%)`;
}

let mobiles=[
    {brand:"oppo",modelName:"OPPO A31",category:"androidPhone",strikeprice:"15,990",price:"11,990",image:"images/mobiles/oppo1.jpg"},
    {brand:"oppo",modelName:"OPPO A74 5G",category:"androidPhone",strikeprice:"20,990",price:"14,990",image:"images/mobiles/oppo2.jpg"},
    {brand:"oppo",modelName:"OPPO A54",category:"androidPhone",strikeprice:"15,990",price:"11,990",image:"images/mobiles/oppo3.jpg"},
    {brand:"oppo",modelName:"OPPO A15s",category:"androidPhone",strikeprice:"14,990",price:"10,990",image:"images/mobiles/oppo4.jpg"},
    {brand:"oppo",modelName:"OPPO K10 5G",category:"androidPhone",strikeprice:"22,990",price:"14,990",image:"images/mobiles/oppo5.jpg"},
    {brand:"oppo",modelName:"OPPO A17K",category:"androidPhone",strikeprice:"12,990",price:"9,999",image:"images/mobiles/oppo6.jpg"},
    {brand:"oppo",modelName:"OPPO F21s",category:"androidPhone",strikeprice:"31,990",price:"25,999",image:"images/mobiles/oppo7.jpg"},
    {brand:"oppo",modelName:"OPPO A16",category:"androidPhone",strikeprice:"15,990",price:"12,999",image:"images/mobiles/oppo8.jpg"},
    {brand:"oppo",modelName:"OPPO A96",category:"androidPhone",strikeprice:"15,990",price:"11,999",image:"images/mobiles/oppo9.jpg"},
    {brand:"vivo",modelName:"vivo Y21",category:"androidPhone",strikeprice:"17,990",price:"12,999",image:"images/mobiles/vivo1.jpg"},
    {brand:"vivo",modelName:"vivo V23 5G",category:"androidPhone",strikeprice:"34,990",price:"26,999",image:"images/mobiles/vivo2.jpg"},
    {brand:"vivo",modelName:"vivo V23e 5G",category:"androidPhone",strikeprice:"28,990",price:"21,999",image:"images/mobiles/vivo3.jpg"},
    {brand:"vivo",modelName:"vivo Y15C",category:"androidPhone",strikeprice:"14,990",price:"10,999",image:"images/mobiles/vivo4.jpg"},
    {brand:"vivo",modelName:"vivo Y01",category:"androidPhone",strikeprice:"12,990",price:"7,999",image:"images/mobiles/vivo5.jpg"},
    {brand:"vivo",modelName:"vivo Y35",category:"androidPhone",strikeprice:"22,990",price:"18,999",image:"images/mobiles/vivo6.jpg"},
    {brand:"vivo",modelName:"vivo Y33T",category:"androidPhone",strikeprice:"22,990",price:"17,999",image:"images/mobiles/vivo7.jpg"},
    {brand:"vivo",modelName:"vivo V19 Mystic",category:"androidPhone",strikeprice:"25,990",price:"17,509",image:"images/mobiles/vivo8.jpg"},

    {brand:"iphone",modelName:"Apple iphone 11",category:"IPHONE",strikeprice:"45,990",price:"45,509",image:"images/mobiles/iphone1.jpg"},
    {brand:"iphone",modelName:"Apple iphone 12(128GP)",category:"IPHONE",strikeprice:"70,990",price:"58,509",image:"images/mobiles/iphone2.jpg"},
    {brand:"iphone",modelName:"Apple iphone 12(64GP)",category:"IPHONE",strikeprice:"70,990",price:"58,509",image:"images/mobiles/iphone3.jpg"},
    {brand:"iphone",modelName:"Apple iphone 5S 16GP GOLD",category:"IPHONE",strikeprice:"24,990",price:"13,509",image:"images/mobiles/iphone4.jpg"},
    {brand:"iphone",modelName:"Apple iphone 14 128GP Midnight",category:"IPHONE",strikeprice:"79,990",price:"77,400",image:"images/mobiles/iphone5.jpg"},
    {brand:"iphone",modelName:"Apple iphone 14 Pro 128GP Spaceblack",category:"IPHONE",strikeprice:"1,39,000",price:"1,37,000",image:"images/mobiles/iphone6.jpg"},
    {brand:"iphone",modelName:"Apple iphone 14 Plus 128GP blue",category:"IPHONE",strikeprice:"89,000",price:"87,000",image:"images/mobiles/iphone7.jpg"},

    {brand:"iphone",modelName:"Apple iphone 14 Plus 128GP blue",category:"TABLETS",strikeprice:"89,000",price:"87,000",image:"images/mobiles/tablet1.jpg"},
    {brand:"iphone",modelName:"Apple iphone 14 Plus 128GP blue",category:"TABLETS",strikeprice:"89,000",price:"87,000",image:"images/mobiles/tablet2.jpg"},
    {brand:"iphone",modelName:"Apple iphone 14 Plus 128GP blue",category:"TABLETS",strikeprice:"89,000",price:"87,000",image:"images/mobiles/tablet3.jpg"},
    {brand:"iphone",modelName:"Apple iphone 14 Plus 128GP blue",category:"TABLETS",strikeprice:"89,000",price:"87,000",image:"images/mobiles/tablet4.jpg"},
    {brand:"iphone",modelName:"Apple iphone 14 Plus 128GP blue",category:"TABLETS",strikeprice:"89,000",price:"87,000",image:"images/mobiles/tablet5.jpg"},
    {brand:"iphone",modelName:"Apple iphone 14 Plus 128GP blue",category:"TABLETS",strikeprice:"89,000",price:"87,000",image:"images/mobiles/tablet6.jpg"},
    {brand:"iphone",modelName:"Apple iphone 14 Plus 128GP blue",category:"TABLETS",strikeprice:"89,000",price:"87,000",image:"images/mobiles/tablet7.jpg"},


]

let newProduct=[
    {category:"SmartPhone",modelName:"POCO C31",rating:"5",strikeprice:"Rs 15,000",price:"Rs 13,000",image:"images/newproduct/poco3.jpg"},
    {category:"SmartPhone",modelName:"realme C33",rating:"5",strikeprice:"Rs 11,999",price:"Rs 8,999",image:"images/newproduct/realmec33.jpg"},
    {category:"SmartPhone",modelName:"REDMI 10",rating:"5",strikeprice:"Rs 14,999",price:"Rs 9,999",image:"images/newproduct/redmi10.jpg"},
    {category:"SmartPhone",modelName:"MOTORLA e40",rating:"5",strikeprice:"Rs 10,999",price:"Rs 8,599",image:"images/newproduct/motorlae40.jpg"},
    {category:"accessories",modelName:"ELV protable Stand",rating:"5",strikeprice:"Rs 699",price:"Rs 299",image:"images/newproduct/accessoies1.jpg"},
    {category:"accessories",modelName:"Cafun Back Cover",rating:"5",strikeprice:"Rs 999",price:"Rs 199",image:"images/newproduct/accessoies2.jpg"},
    {category:"accessories",modelName:"KWIN case Back Cover",rating:"5",strikeprice:"Rs 1266",price:"Rs 399",image:"images/newproduct/accessoies3.jpg"},
    {category:"accessories",modelName:"WEBCREATURE back cover",rating:"5",strikeprice:"Rs 999",price:"Rs 219",image:"images/newproduct/accessies4.jpg"},

    {category:"Iphone",modelName:"APPLE iphone 11",rating:"5",strikeprice:"Rs 48,000",price:"Rs 43,599",image:"images/newproduct/iphone1.jpg"},
    {category:"Iphone",modelName:"APPLE iphone 13",rating:"5",strikeprice:"Rs 69,000",price:"Rs 65,000",image:"images/newproduct/iphone2.jpg"},
    {category:"Iphone",modelName:"APPLE iphone 14",rating:"5",strikeprice:"Rs 79,000",price:"Rs 76,000",image:"images/newproduct/iphone3.jpg"},
    {category:"Iphone",modelName:"APPLE iphone 12 mini",rating:"5",strikeprice:"Rs 59,000",price:"Rs 32,000",image:"images/newproduct/iphone4.jpg"},
    {category:"tablets",modelName:"OPP PAD AIR",rating:"5",strikeprice:"Rs 48,000",price:"Rs 43,599",image:"images/newproduct/tablet1.jpg"},
    {category:"tablets",modelName:"I KALL N7 PRO",rating:"5",strikeprice:"Rs 69,000",price:"Rs 65,000",image:"images/newproduct/tablet2.jpg"},
    {category:"tablets",modelName:"APPLE IPAD PRO",rating:"5",strikeprice:"Rs 98,000",price:"Rs 86,000",image:"images/newproduct/tablet3.jpg"},
    {category:"tablets",modelName:"TCL TAB 10",rating:"5",strikeprice:"Rs 29,000",price:"Rs 12,000",image:"images/newproduct/tablet4.jpg"},
];
function operate(categor){
let accesor=newProduct.filter((el)=>{
    return el.category==categor;
});
accesor.forEach((el,i)=>{
    let sec2FlexParent=document.querySelector(".sec-2-con-2-flex");
    let sec2Flex1=document.createElement("div");
    sec2Flex1.className="sec-2-con-2-flex-1";
    sec2FlexParent.append(sec2Flex1);
    let sec2flexImage=document.createElement("div");
    sec2flexImage.className="sec-2-con-2-flex-1-img";
    let sec2fleximg=document.createElement("img");
    sec2fleximg.src=el.image;
    if(categor=="tablets"){
        sec2fleximg.style.height="50%";
    }
    sec2flexImage.append(sec2fleximg);
    sec2Flex1.append(sec2flexImage);
    let sec2flexcon=document.createElement("div");
    sec2flexcon.className="sec-2-con-2-flex-1-con";
    let sec2FlexConH3=document.createElement("h3");
    sec2FlexConH3.innerHTML=el.modelName;
    sec2flexcon.append(sec2FlexConH3);
    let sec2FlexConfp=document.createElement("p");
    sec2FlexConfp.className="star";
    for(i=0;i<5;i++){
    let star=document.createElement("i");
    star.className="fa-solid fa-star";
    sec2FlexConfp.append(star);
    }
    sec2flexcon.append(sec2FlexConfp);
    let sec2FlexConsp=document.createElement("p");
    let sec2FlexConSpspan1=document.createElement("span");
    sec2FlexConSpspan1.innerHTML=el.strikeprice;
    sec2FlexConsp.append(sec2FlexConSpspan1);
    let sec2FlexConSpspan2=document.createElement("span");
    sec2FlexConSpspan2.innerHTML=el.price;
    sec2FlexConsp.append(sec2FlexConSpspan2);
    sec2flexcon.append(sec2FlexConsp);
    let sec2FlexContp=document.createElement("p");
    sec2FlexContp.className="addToCart";
    sec2FlexContp.innerHTML="Add to cart"
    sec2flexcon.append(sec2FlexContp);
    sec2Flex1.append(sec2flexcon);
    
});}
let newProductCategories=document.querySelectorAll(".sec-2-con-2-head > ul > li");
newProductCategories.forEach((el)=>{el.addEventListener("click",accelerate);})
function accelerate(e){
  
  let target=e.target;
    let targetName=target.getAttribute("name");
    let sec2Con2Flex1=document.querySelectorAll(".sec-2-con-2-flex-1");
    let sec2Con2FlexItems=[...sec2Con2Flex1];
    sec2Con2FlexItems.forEach((el)=>{
     el.remove();
    });
    operate(targetName);
}
operate("accessories");
/*
mbiles list start here
*/
let mobileptions=document.querySelectorAll("nav>ul>li");
mobileptions.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        console.log(e.target);
        if(e.target.innerHTML=="HOME"){
            home(e);
        }
        else if(e.target.innerHTML=="IPHONE" || e.target.innerHTML=="ANDROID MOBILES" || e.target.innerHTML=="TABLETS"){
            phoneShort(e);
        }
       
    })
});
function home(){
    let mainPage=document.querySelector(".mainpage");
    let homePage=document.querySelector(".homepage");
    let children=[...mainPage.children];
    children.forEach((el)=>{
        el.style.display="none";
    })
    homePage.style.display="block";
}
function phoneShort(e){
    let mainPage=document.querySelector(".mainpage");
    let children=[...mainPage.children];
    children.forEach((el)=>{
        el.style.display="none";
    });
    let phonePage=document.querySelector(".smart-phone");
    phonePage.style.display="block";
    phoneList(e);

}
function phoneList(e){
    let cat=e.target;
    let att=cat.getAttribute("name");
phoneByCategory(att)
}

function phoneByCategory(cat){
    let smartPhoneFlexParent=document.querySelector(".smartphone-card-flex");
    let children=[...smartPhoneFlexParent.children];
    children.forEach((ch)=>{
        ch.remove();
    })
    let filterItem=mobiles.filter((el,i)=>{
        return el.category==cat;
    });
    let phoneTitle=document.querySelector("#Phone-heading");
    phoneTitle.innerHTML=cat.toUpperCase();;
    filterItem.forEach((e)=>{
        let smartPhoneCardFlex=document.createElement("div");
        smartPhoneCardFlex.className="smartphone-card1";
        let smartPhoneCardImage=document.createElement("div");
        smartPhoneCardImage.className="smartphone-card1-img";
        let smartPhoneCardImg=document.createElement("img");
        smartPhoneCardImg.src=e.image;
        smartPhoneCardImage.append(smartPhoneCardImg);
        smartPhoneCardFlex.append(smartPhoneCardImage);
        let smartPhoneCardCon=document.createElement("div");
        smartPhoneCardCon.className="smartphone-card1-con";
        let smartPhoneCardConFp=document.createElement("p");
        smartPhoneCardConFp.innerHTML=e.modelName;
        smartPhoneCardCon.append(smartPhoneCardConFp);
        let smartPhoneCardConSp=document.createElement("p");
        smartPhoneCardConSp.className="star";
        for(i=0;i<5;i++){
            let a=document.createElement("i");
            a.className="fa-sharp fa-solid fa-star";
            smartPhoneCardConSp.append(a);
        }
        smartPhoneCardCon.append(smartPhoneCardConSp);
        let smartPhoneCardConTp=document.createElement("p");
          let span1=document.createElement("span");
          span1.innerHTML="Rs"+" "+e.strikeprice;
          smartPhoneCardConTp.append(span1);
          let span2=document.createElement("span");
          span2.innerHTML="Rs"+" "+e.price;
          smartPhoneCardConTp.append(span2);
          smartPhoneCardCon.append(smartPhoneCardConTp);
          let smartPhoneCardConFop=document.createElement("p");
          smartPhoneCardConFop.innerHTML="Add to cart";
          smartPhoneCardConFop.addEventListener("click",addToCart)
          smartPhoneCardCon.append(smartPhoneCardConFop);
          smartPhoneCardFlex.append(smartPhoneCardCon);
          smartPhoneFlexParent.append(smartPhoneCardFlex);
    })
    // high();
}
function high(){
    let a=document.querySelector(".smartphone-card");
    let b=document.querySelector(".smartphone-filter");
    let c=getComputedStyle(a).height;
    b.style.height=c;
    console.log(c);
}

function addToCart(e){
let a=e.target;
let card=a.closest(".smartphone-card1-con");
let modelName=card.querySelector("p:nth-child(1)").innerHTML;
let price=card.querySelector("p:nth-child(3)").querySelector("span:nth-child(2)").innerHTML.split(" ")[1];
console.log(price);
let imageSrc=a.closest(".smartphone-card1").querySelector(".smartphone-card1-img img").src;
cartAccelerate(modelName,price,imageSrc,e);
}

function cartAccelerate(modelname,price,image,event){
let count;
    let cartParent=document.querySelector(".smart-phone-filter-cart");
    let children=[...cartParent.children];

    if(children.length==0){
        count=1;
        newCart(modelname,price,image,event,count);
    }
else{
   let result=children.findIndex((el)=>{
        let attr=el.getAttribute("modelname");
        return el.getAttribute("modelname")==modelname;
    });

    if(result==-1){
        count=1;
        newCart(modelname,price,image,event,count);
    }
    else{
        let b=children[result];
        let counte=b.querySelector(".smart-phone-filter-cart1-con > p:nth-child(2)");
        let coun=b.querySelector(".smart-phone-filter-cart1-con p:nth-child(2) span:nth-child(1)").innerHTML;
        let c=Number(coun)+1;
updateCart(price,b,event,c);
    }
}
}
function newCart(modelname,price,image,event,count){
    let parent=document.querySelector(".smart-phone-filter-cart");
    
    let cartOne=document.createElement("div");
    cartOne.className="smart-phone-filter-cart1";
    cartOne.setAttribute("modelname",`${modelname}`);
    let cartImage=document.createElement("div");
    cartImage.className="smart-phone-filter-cart1-img";
    let images=document.createElement("img");
    images.src=image;
    cartImage.append(images);
    cartOne.append(cartImage);
    let cartContent=document.createElement("div");
    cartContent.className="smart-phone-filter-cart1-con";
    let cartFp=document.createElement("p");
    cartFp.innerHTML=modelname;
    cartContent.append(cartFp);
    let cartSp=document.createElement("p");
    let spanF=document.createElement("span");
    spanF.innerHTML=count;
    let spant=document.createElement("span");
    spant.innerHTML=" X Rs "
    let spanS=document.createElement("span");
    spanS.innerHTML=price;
    cartSp.append(spanF);
    cartSp.append(spant);
    cartSp.append(spanS);
    cartContent.append(cartSp);
cartOne.append(cartContent);
parent.append(cartOne);
let cancel=document.createElement("div");
cancel.className="smart-phone-filter-cart1-cancel";
let cancelIcon=document.createElement("i");
cancelIcon.className="fa-solid fa-xmark";
cancel.append(cancelIcon);
cartOne.append(cancel);
cancel.addEventListener("click",removeCart)
}

function updateCart(price,element,event,c){
    let elemntP=element.querySelector(".smart-phone-filter-cart1-con p:nth-child(2) span:nth-child(3)");
    let elemntc=element.querySelector(".smart-phone-filter-cart1-con p:nth-child(2) span:nth-child(1)");
    let n=price.split(",").join("");
    let num=Number(n);
    elemntP.innerHTML=num*c;
    elemntc.innerHTML=c;
}
function removeCart(e){
    let element=e.target.closest(".smart-phone-filter-cart1");
    element.remove();
}