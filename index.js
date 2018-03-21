var menu = document.getElementById("menu"),
    bgInp = document.getElementById("bgImgInp"),
    title= document.getElementById("title"),
    desInp = document.getElementById("des"),
    cInp = document.getElementById("colorInp"),
    create = document.getElementById("creatingBut"),
    bg = document.getElementById("bg");

function expandMenu(ele,pxs){
    ele.style.bottom = pxs;
};

menu.addEventListener("click",function(){
    expandMenu(menu,"110px");
    expandMenu(bgInp,"86px");
    expandMenu(title,"65px");
    expandMenu(desInp,"30px");
    expandMenu(cInp,"0px");
    expandMenu(create,"0px");
    create.style.left="60%";
});

function changeBG(bgsrc){
    bg.style.backgroundImage ="url("+bgsrc+")"
};

bgInp.addEventListener("keyup",function(ev){
    if(bgInp.value=="horse" && ev.keyCode=="13"){
        changeBG("img/b1.jpg");
    }else if(bgInp.value=="night" && ev.keyCode=="13"){
        changeBG("img/b2.jpg");
    }else if(bgInp.value=="mountain" && ev.keyCode=="13"){
        changeBG("img/b3.jpg");
    }else if(bgInp.value.indexOf("epic") !=-1 && ev.keyCode=="13"){
        changeBG("img/b4.jpg");
    }else if(ev.keyCode=="13"){
        changeBG(bgInp.value);
    }
    
});

function changeTitle(){
    document.getElementById("titleDiv").innerHTML = title.value;
};

title.addEventListener("keyup",function(ev){
    if(ev.keyCode=="13"){
        changeTitle();
    }
});

function changeDes(){
    document.getElementById("desDiv").innerHTML = desInp.value;
};

desInp.addEventListener("keyup",function(ev){
    if(ev.keyCode=="13"){
        changeDes();
    }
});

function changeColor(){
    document.getElementById("titleDiv").style.color=cInp.value;
    document.getElementById("desDiv").style.color=cInp.value;
};

cInp.addEventListener("change",function(){
    changeColor();
});


menu.addEventListener("keydown",function(ev){
    var inpX = 0,
        inpY= 0,
        num = 300;  
    
    if(ev.keyCode=="38"){
        inpY1 = inpY+10;
    }
    else if(ev.keyCode=="40"){
        inpY = inpY-10;
    }else if(ev.keyCode=="37"){
        inpX = inpX+10;
    }else if(ev.keyCode=="39"){
        inpX = inpX-10;   
    }else if(ev.keyCode=="107"){
        num = num+10;
        bg.style.height = num+"px";
    }else if(ev.keyCode=="109"){
        num = num-10;
        bg.style.height = num+"px";
    };
    bg.style.backgroundPositionY= inpY+"px";
    bg.style.backgroundPositionX= inpX+"px";
});

create.addEventListener("click",function(){
    var newBG = document.createElement("div"),
        newTitle = document.createElement("div"),
        newDes = document.createElement("div");
    
    newTitle.className="titles";
    newDes.className="des";
    newBG.className="BgCl";
    newBG.id ="newD";
    document.getElementById("display").appendChild(newBG);
    newBG.appendChild(newTitle);
    newBG.appendChild(newDes);
    document.getElementById("newD").style.cssText="width:100%;height:300px;position:relative;background-size:cover;";
    document.getElementById("newD").style.backgroundImage = bg.value;
});