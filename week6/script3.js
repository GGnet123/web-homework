let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];

var total = document.getElementById("sum");
var item = document.getElementById("items");
var Car = document.getElementById("cars");

		
	for(let a=0; a<cars.length; a++){
		var card=document.createElement("div");
		card.setAttribute("class","card");
		card.style.width="400px";
		document.getElementById("cars").appendChild(card);
		
		var basket=document.createElement("div");
		basket.setAttribute("class","basket");
		card.appendChild(basket);
		
		var img=document.createElement("img");
		img.setAttribute("src","basket.png");
		img.setAttribute("width","45");
		img.setAttribute("height","45");
		basket.appendChild(img);
		
		var img=document.createElement("img");
		img.setAttribute("width","400");
		img.setAttribute("src",cars[a].image_url);
		card.appendChild(img);
		
	}	
	
	let Basket=document.getElementsByClassName("basket");
	
	for(let i=0;i<Basket.length;i++){
		Basket[i].addEventListener("click",function(){
			if(this.classList.contains("addSum")){
				item.innerHTML = parseInt(item.innerHTML) - 1;
				this.className= "basket";
				this.children[0].setAttribute("src","basket.png"); 
				total.innerHTML = parseInt(total.innerHTML) - parseInt(cars[i]["price"]);    
        }
			else{
				item.innerHTML = parseInt(item.innerHTML) + 1;
				this.className= "basket addSum";
				this.children[0].setAttribute("src","dollar.png"); 
				total.innerHTML = parseInt(total.innerHTML) + parseInt(cars[i]["price"]);    
        }
			
		});
	}
