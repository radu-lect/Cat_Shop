let premium = document.getElementById('products-premium');
let productsArrayPremium = [];
let xhrPrem = new XMLHttpRequest();
let urlPrem = 'https://my-json-server.typicode.com/radu-lect/Cat_Shop';
//verificarea prin punerea in browser
// 'https://my-json-server.typicode.com/#nume/#proiect_nume'

xhrPrem.open('GET', urlPrem+'/premiumProd');
xhrPrem.responseType = 'json';
xhrPrem.onload = function(){
	let productsPrem = xhrPrem.response;
	//ce adaugam pe pagina
	premium.innerHTML = null;
	productsPrem.forEach(p=>{
		productsArrayPremium.push(p);
		let pElemPrem = document.createElement('div');
		pElemPrem.classList.add('premium');
		pElemPrem.innerHTML=`
					<div id="pAndImg">
							<p>You need this NOW!</p>
					
							<img class="product-photo" src='${p.photo_url}'>
					</div>
					<div>	
							<h2 class="product-name">${p.name}</h2>
							
							<div id="product-descriere">
						<br>
							<p class='product-price'><b>Price: </b>${p.price}</p>
						<br>
						
							<p class='product-desc'><b>Description:</b>${p.description}</p>
							</div>
					</div>		
						`;
					premium.append(pElemPrem);

	})
}
xhrPrem.send();

// accesorii
let accesorii = document.getElementById('accesorii');
let productsArrayAces = [];
let xhrAces = new XMLHttpRequest();
let urlAces = 'https://my-json-server.typicode.com/radu-lect/Cat_Shop';
//verificarea prin punerea in browser
// 'https://my-json-server.typicode.com/#nume/#proiect_nume'

xhrAces.open('GET', urlAces+'/accesorii');
xhrAces.responseType = 'json';
xhrAces.onload = function(){
	let productsAces = xhrAces.response;
	//ce adaugam pe pagina
	accesorii.innerHTML = null;
	productsAces.forEach(p=>{
		productsArrayAces.push(p);
		let pElemAces = document.createElement('div');
		pElemAces.classList.add('product-row');
		pElemAces.innerHTML=`
					
							
					
							<img class="product-photo" src='${p.photo_url}'>
			
							<h2 class="product-name">${p.name}</h2>
							
							<div id="product-descriere">
						<br>
							<p class='product-price'><b>Price: </b>${p.price}</p>
						<br>
						
							<p class='product-desc'><b>Description:</b>${p.description}</p>
							
						`;
					accesorii.append(pElemAces);

	})
}
xhrAces.send();



// cat normal
let productsGrid = document.getElementById('products');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/radu-lect/Cat_Shop';
//verificarea prin punerea in browser
// 'https://my-json-server.typicode.com/#nume/#proiect_nume'

xhr.open('GET', url+'/products');
xhr.responseType = 'json';
xhr.onload = function(){
	let products = xhr.response;
	//ce adaugam pe pagina
	productsGrid.innerHTML = null;
	products.forEach(p=>{
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classList.add('product-row');
		pElem.innerHTML=`
						<div id="photo-product-div">	
							<img class="product-photo" src='${p.photo_url}'>
						</div>	
							<h2 class="product-name">${p.name}</h2>
							
							<div id="product-descriere">
							<p class='product-price'><b>Price: </b>${p.price}</p>
						
							<p class='product-desc'><b>Description:</b>${p.description}</p>
							</div>
							
						`;
					productsGrid.append(pElem);

	})
}
xhr.send();

// scroll btn

 function leftScroll() {
        const left = document.querySelector("#products");
        left.scrollBy(250, 0);
      }
      function rightScroll() {
        const right = document.querySelector("#products");
        right.scrollBy(-250, 0);
      }

// accesorii
 function leftScrollAces() {
        const left = document.querySelector("#accesorii");
        left.scrollBy(250, 0);
      }
      function rightScrollAces() {
        const right = document.querySelector("#accesorii");
        right.scrollBy(-250, 0);
      }



// btn scoll functionalitate

let btnScrollProd = document.querySelector(".prod");
let btnScrollAces = document.querySelector(".aces");

let scrollAllProd = document.querySelector(".scroll_all_prod");
let scrollAllAces = document.querySelector(".scroll_all_aces");



$(document).ready(function(){
 
     let is = true;
$(scrollAllAces).hide();
$(btnScrollProd).hide();

     $(btnScrollProd).click(function(){
     if(is){
     		$(scrollAllProd).show(200);
     		$(scrollAllAces).hide(200);
     		$(btnScrollProd).hide(200);
     		$(btnScrollAces).show(200);



     		is =!is;
     }else{
     		$(scrollAllProd).show(200);
     		$(scrollAllAces).hide(200);
     		$(btnScrollProd).hide(200);
     		$(btnScrollAces).show(200);


     		is=!is;
     		
     }
	});
});

$(document).ready(function(){
 
     let isi = true;

     $(btnScrollAces).click(function(){
     if(isi){
     		$(scrollAllAces).show(200);
     		$(scrollAllProd).hide(200);
     		$(btnScrollAces).hide(200);
     		$(btnScrollProd).show(200);




     		isi =!isi;
     }else{
     		$(scrollAllAces).show(200);
     		$(scrollAllProd).hide(200);
     		$(btnScrollAces).hide(200);
     		$(btnScrollProd).show(200);



     		isi =!isi;
     		
     }
	});
});
