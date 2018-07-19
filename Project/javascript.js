"use strict"
var i = 0; 
var images = [];
var time = 5000;
var car_description=[];
var id=0;
var width=0;
var elem=document.getElementById("myBar");
var desc=document.getElementsByClassName("info-car");
images[0] = 'img/slide1.jpg';
images[1] = 'img/slide2.jpg';
images[2] = 'img/slide3.jpg';
images[3] = 'img/slide4.jpg';
images[4] = 'img/slide5.jpg';
images[5] = 'img/slide6.jpg';
car_description[0]="BMW I8";
car_description[1]="Mercedes Benz AMG GT";
car_description[2]="BMW M3";
car_description[3]="Mercedes Benz GLE";
car_description[4]="BMW X5";
car_description[5]="Mercedes Benz S-CLASS MAYBACH";
document.slide.src = images[i];
desc[0].innerHTML=car_description[i];
    function frame(){
        if(width>=100){
            width=0;
            if(i < images.length-1){
                i++;
            }
            else {i=0;}
            document.slide.src=images[i];
            desc[0].innerHTML=car_description[i];
        }
        else{
            width++;
            elem.style.width = width +'%';   
        }
    }
    function move() {
        var elem=document.getElementById("myBar");
        id=setInterval(frame,time/100);
    }
        window.onload = move;
    function stop(){  
        clearInterval(id);       
    }
        function start(){
            id=setInterval(frame,time/100);
    }
    desc[0].addEventListener("mouseover",stop);
    desc[0].addEventListener("mouseleave",start);
var prev=document.getElementsByClassName('slider-prev');
var next=document.getElementsByClassName('slider-next');
    function prevclick(){
        if(i<1){
            width=0;
            i=images.length-1;
            document.slide.src=images[i];
            desc[0].innerHTML=car_description[i];
        }
        else{
            width=0;
            document.slide.src=images[--i];
            desc[0].innerHTML=car_description[i];
        }
    }
desc[0].innerHTML=car_description[i];
    function nextclick(){
        if(i>=images.length-1){
            width=0;
            i=0;
            document.slide.src=images[i];
            desc[0].innerHTML=car_description[i];
        }
        else{
            width=0;
            document.slide.src=images[i=i+1];
            desc[0].innerHTML=car_description[i];  
        }
    }
    next[0].addEventListener("click",nextclick);
    prev[0].addEventListener("click",prevclick);
var buttonSearch=document.getElementsByClassName('button_for_search');
var buttonSearchBack=document.getElementsByClassName('button_for_turn_back');
var lot=document.getElementsByClassName('lot');
var searchText=[];
var searchCar=[];
    function searchLot(){
        for(var k=0;k<lot.length;k++){
            lot[k].classList.remove('lot-disable');
        }
        var search=document.getElementById('text-to-find').value;

        for (var k=0;k<lot.length;k++)
        {   
            searchCar[k]=lot[k].childNodes[1].innerHTML;
            searchText[k]=lot[k].childNodes[5].innerHTML;
        }
         for (var j=0;j<searchText.length;j++)
        { 
            if(search.toLowerCase()=="discounts"){
                location.href = '#discounts-navigation'
            }
            else if(search.toLowerCase()==="news"){
                location.href = '#news-navigation';
            }
            else if(search.toLowerCase()=="about"){
                location.href = '#about-navigation';
            }
            else if(search.toLowerCase()=="contacts"){
                location.href = '#footer';
            }
            else if(searchText[j].toLowerCase().indexOf(search.toLowerCase())==-1 && searchCar[j].toLowerCase().indexOf(search.toLowerCase())==-1){
                lot[j].classList.add('lot-disable');
                location.href = '#lots-navigation';
            }
        }
    }
    function searchLotBack(){
        for(var k=0;k<lot.length;k++){
            document.getElementById('text-to-find').value="";
            lot[k].classList.remove('lot-disable');
        } 
    }
    buttonSearch[0].addEventListener('click',searchLot);
    buttonSearchBack[0].addEventListener('click',searchLotBack);
var form_register = document.getElementById('register');
var form_login = document.getElementById('login');
var close1 = document.getElementById('close_register');
var close2 = document.getElementById('close_login');
var button1=document.getElementById('registration');
var button2=document.getElementById('sign_in');
var sing_in_but=document.getElementsByClassName("sign_in");
    sing_in_but[0].addEventListener("click",function(){
        form_register.style.display="none";
    })
    function show_register_form(){
        form_register.style.display="flex";
    }
    function close_register_form(){
        form_register.style.display="none";
    }
    button1.addEventListener("click",show_register_form);
    close1.addEventListener("click",close_register_form);

    function show_login_form(){
        form_login.style.display="flex";
    }
    function close_login_form(){
        form_login.style.display="none";
    }
    button2.addEventListener("click",show_login_form);
    close2.addEventListener("click",close_login_form);
var total=0;
var price=0;
var end_price=0;
var basket=document.getElementsByClassName('total_price')[0];
var buttons = document.getElementsByClassName('buy');
var lot_view=document.getElementsByClassName('lots-view-wrapper');
var elements=[];
    for (var l = 0; l < buttons.length; l++) {
        buttons[l].addEventListener('click', function() {
            var target = event.target;
            lot_view[0].style.display="none";
            price=parseInt(target.parentNode.getElementsByClassName('price')[0].innerHTML.replace(' ',''));
            end_price+=price;
            basket.innerHTML=end_price+"$";
            elements[l]+=target.parentNode.getElementsByClassName('model')[0].innerHTML+"\n";
            alert("Your purchase has been moved to the shopping cart");
            clearInterval(auction_time);
            document.getElementById("timer").innerHTML="30";
        }
    , false);}
var checkout=document.getElementsByClassName('checkout')[0];
    checkout.addEventListener('click',function(){
        alert('You have acquired:\n'+elements[l].replace("undefined","")+'Total price: '+ basket.innerHTML);
        basket.innerHTML=0+"$";
        price=0;
        end_price=0;
        elements[l]="";
    })
var menuIcon = document.querySelector('.toggle');
var menu=[];
    menu[0]=document.getElementsByClassName('network-icons')[0];
    menu[1]=document.getElementsByClassName('menu-list')[0];
    menu[2]=document.getElementsByClassName('basket')[0];
    if(menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
    function toggleMenu() {
        menu[0].classList.toggle('network-icons_active');
        menu[1].classList.toggle('menu-list_active');
        menu[2].classList.toggle('basket_active');
    }
var car_names=document.getElementsByClassName("car-header");
var view_all =document.getElementsByClassName("all-cars")[0];
    view_all.addEventListener("click",function(){
        for(var k=0;k<lot.length;k++){
            lot[k].classList.remove('lot-disable');
        }
    })
var bmw_cars =document.getElementById("bmwonly");
    bmw_cars.addEventListener("click",function(){
        for(var q=0;q<car_names.length;q++){
            lot[q].classList.remove("lot-disable");
            var test = car_names[q].innerHTML;
            if(test === "Mercedes"){
                lot[q].classList.add("lot-disable");
            } 
        }  
    })
var mercedes_cars =document.getElementById("mercedesonly");
    mercedes_cars.addEventListener("click",function(){
        for(let q=0;q<car_names.length;q++){
            lot[q].classList.remove("lot-disable");
            var test = car_names[q].innerHTML;
            if(test === "BMW"){
                lot[q].classList.add("lot-disable");        
            }
        }  
    })
var add_lot_form=document.getElementById("add-lot-form");
var add_lot_button=document.getElementById("add-lot-button");
var close_add_lot_form=document.getElementsByClassName("close-add-lot-form");
    close_add_lot_form[0].addEventListener("click",function(){
        add_lot_form.style.display="none";
    })
    add_lot_button.addEventListener("click",function(){
        add_lot_form.style.display="flex";
    })
var lot=document.getElementsByClassName('lot');
var lot_view=document.getElementsByClassName('lots-view-wrapper');
var car_header=document.getElementsByClassName('car-header');
var view_car_header=document.getElementsByClassName("lot-header-view");
var car_history=document.getElementsByClassName("car_history");
var form_lot_car_history=document.getElementsByClassName('lot-car-history');
var view_image=document.getElementsByClassName('lot-view-image');
var view_model=document.getElementsByClassName("lot-model-view");
var view_price=document.getElementsByClassName("lot-view-price");
var car_characteristic=document.getElementsByClassName("lot-car_characteristics");
var close_view_icon=document.getElementsByClassName("close-view-icon");
var timer=document.getElementById("timer");
var auction_time=0;
var go=0;
var auction_price=document.getElementsByClassName("lot-view-auction");
    for (var t = 0; t < lot.length; t++) {
            lot[t].addEventListener('click', function show_view() {
            lot_view[0].style.display="flex";
            var target = event.target;
            view_car_header[0].innerHTML=(target.parentNode.getElementsByClassName('car-header')[0].innerHTML);
            view_image[0].src=target.parentNode.children[1].src;
            form_lot_car_history[0].innerHTML=(target.parentNode.getElementsByClassName('car_history')[0].innerHTML);
            view_model[0].innerHTML=(target.parentNode.getElementsByClassName('model')[0].innerHTML);
            car_characteristic[0].innerHTML=(target.parentNode.getElementsByClassName('car_characteristics')[0].innerHTML);
            view_price[0].classList.add("price");
            view_price[0].innerHTML=(target.parentNode.getElementsByClassName('price')[0].innerHTML);
            auction_price[0].value=(target.parentNode.getElementsByClassName('price')[0].innerHTML).replace(" ","");
            var tmp=(auction_price[0].value).replace("$","");
            var tmp2=parseInt(tmp/2);
            auction_price[0].value=String(tmp2)+"$";
            go=30;
            function updateTime() {
                go=go-1;
                document.getElementById("timer").innerHTML =String(go) ;
                if(document.getElementById("timer").innerHTML=="0"){
                clearInterval(auction_time);
            function func() {
                alert("The car was sold for: "+document.getElementsByClassName("lot-view-auction")[0].value);
                lot_view[0].style.display="none";
                go=0;
            }
            setTimeout(func, 1000);
            }
            }
            auction_time=setInterval(updateTime, 1000);
            }, false);
    }

document.getElementById("raise-price").addEventListener("click",function(){
    var view=document.getElementsByClassName("lot-view-auction")[0].value;
    var current=view.replace("$","");
    var price=parseInt(current);
    price=price+1000;
    document.getElementsByClassName("lot-view-auction")[0].value=String(price)+"$";
})
document.getElementById("reduce-price").addEventListener("click",function(){
    var view=document.getElementsByClassName("lot-view-auction")[0].value;
    var current=view.replace("$","");
    var price=parseInt(current);
    if(price<=current){
        alert("The bid can not be less");
    }
    else {
        price=price-1000;
        document.getElementsByClassName("lot-view-auction")[0].value=String(price)+"$";
    }
})
close_view_icon[0].addEventListener('click',function(){
    clearInterval(auction_time);
    document.getElementById("timer").innerHTML="30";
    lot_view[0].style.display="none";
})
var view_button=document.getElementsByClassName("view-button");
view_button[0].addEventListener("click",function(){
    lot_view[0].style.display="none";
})
var save_new_lot=document.getElementById("add-lot-accept");
var parentNode = document.getElementById("lots");
save_new_lot.addEventListener("click",function(){
    var newlot = document.createElement('div');
    newlot.className = "lot";
    var newlot_header = document.createElement('h2');
    newlot_header.innerHTML = document.getElementById('car_name').value;
    var check_car_name= newlot_header.innerHTML;
    newlot_header.classList.add("car-header");
    newlot.appendChild(newlot_header);
    if(newlot_header.innerHTML == "BMW"){
        newlot.classList.add("bmwonly");
    }
    else if(newlot_header.innerHTML == "Mercedes"){
        newlot.classList.add("mercedesonly");
    }
    var newlot_img = document.createElement('img');
    if (document.getElementById('photo').files && document.getElementById('photo').files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            newlot_img.setAttribute('src', e.target.result);
            newlot_img.classList.add("view-img");
            newlot_img.classList.add("testik");
            newlot.appendChild(newlot_img);   
        }
        reader.readAsDataURL(document.getElementById('photo').files[0]);     
    }
    var newlot_model = document.createElement('p');
    newlot_model.innerHTML ="Model: "+document.getElementById('model').value;
    var check_model=newlot_model.innerHTML;
    newlot_model.classList.add("model");
    newlot_model.style.order="3";
    newlot.appendChild(newlot_model);
    var newlot_engine = document.createElement('p');
    newlot_engine.innerHTML = "Engine: "+document.getElementById('engine').value;
    var check_engine = newlot_engine.innerHTML;
    newlot_engine.classList.add("car_characteristics");
    newlot_engine.style.order="4";
    newlot.appendChild(newlot_engine);
    var newlot_speed = document.createElement('p');
    newlot_speed.innerHTML = "Max speed: "+document.getElementById('speed').value+"(k/h)";
    var check_speed=newlot_speed.innerHTML;
    newlot_speed.classList.add("car_characteristics");
    newlot_speed.style.order="5";
    newlot.appendChild(newlot_speed);
    var newlot_drive_unit = document.createElement('p');
    newlot_drive_unit.innerHTML ="Drive unit: "+document.getElementById('drive-unit').value;
    var check_drice_unit=newlot_drive_unit.innerHTML;
    newlot_drive_unit.classList.add("car_characteristics");
    newlot_drive_unit.style.order="6";
    newlot.appendChild(newlot_drive_unit);
    var newlot_price_block = document.createElement('div');
    var price_text = document.createElement('p');
    price_text.innerHTML = "Price: ";
    price_text.classList.add("car_characteristics");
    newlot_price_block.appendChild(price_text);
    var price_value = document.createElement('span');
    price_value.innerHTML = document.getElementById('price').value+"$";
    var check_price=price_value.innerHTML;
    price_value.classList.add("price");
    newlot_price_block.appendChild(price_value);
    newlot_price_block.classList.add("price-block");
    newlot_price_block.style.order="7";
    newlot.appendChild(newlot_price_block);
    var newlot_button = document.createElement('INPUT');
    newlot_button.setAttribute("type", "submit");
    newlot_button.setAttribute("value", "Buy now");
    newlot_button.classList.add("buy");
    newlot_button.style.order="8";
    newlot.appendChild(newlot_button);
    if(check_car_name.length>2 && check_model.length>7 && check_engine.length>8 && check_speed.length>16 && check_drice_unit.length>12 && check_price.length>1){
        parentNode.insertBefore(newlot, add_lot_button);
        add_lot_form.style.display="none";
    }
    else{
        alert("Fill out all of the fields");
        return false;
    }
    document.getElementById('car_name').value="";
    document.getElementById('photo').value="";
    document.getElementById('model').value="";
    document.getElementById('engine').value="";
    document.getElementById('speed').value="";
    document.getElementById('drive-unit').value="";
    document.getElementById('price').value="";
});
var sort_button1 = document.getElementById('sort-ascending');
var sort_button2 = document.getElementById('sort-decending');
var add_lot_but=document.getElementById("add-lot-button");
function sortingByPrice1(){
    var items = document.querySelectorAll('.lot');
    Array.from(items).sort(function(a, b) {
        a = ~~(a.querySelector('.price').innerText).replace("$","").replace(" ","");
        b = ~~(b.querySelector('.price').innerText).replace("$","").replace(" ","");
      return a - b
    }).forEach(function(n, i) {
      n.style.order = i;
      add_lot_but.style.order=i+1;
    })
  }
  function sortingByPrice2(){
    var items = document.querySelectorAll('.lot');
    Array.from(items).sort(function(a, b) {
      a = ~~(a.querySelector('.price').innerText).replace("$","").replace(" ","");
      b = ~~(b.querySelector('.price').innerText).replace("$","").replace(" ","");
      return b - a
    }).forEach(function(n, i) {
      n.style.order = i;
      add_lot_but.style.order=i+1;
    })
  }
  sort_button1.addEventListener('click', sortingByPrice1);
  sort_button2.addEventListener('click', sortingByPrice2);