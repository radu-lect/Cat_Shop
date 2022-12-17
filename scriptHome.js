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
						<div id="photo-product-div">	
							<img class="product-photo" src='${p.photo_url}'>
						</div>	
							<h2 class="product-name">${p.name}</h2>
							
							<div id="product-descriere">
							<p class='product-price'><b>Price: </b>${p.price}</p>
						
							<p class='product-desc'><b>Description:</b>${p.description}</p>
							</div>
							<button    class="btn_buy-premium" >Buy</button>
							
						`;
					premium.append(pElemPrem);

	})
}
xhrPrem.send();



// cat normal
let productsGrid = document.getElementById('products-grid');
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
		pElem.classList.add('product');
		pElem.innerHTML=`
						<div id="photo-product-div">	
							<img class="product-photo" src='${p.photo_url}'>
						</div>	
							<h2 class="product-name">${p.name}</h2>
							
							<div id="product-descriere">
							<p class='product-price'><b>Price: </b>${p.price}</p>
						
							<p class='product-desc'><b>Description:</b>${p.description}</p>
							</div>
							<button   onclick="addProductToCart(${p.id});" class="btn_buy" >Buy</button>
							
						`;
					productsGrid.append(pElem);

	})
}
xhr.send();

// promotie

let promotion = document.getElementById('promotie');
let productsArrayProm = [];
let xhrProm = new XMLHttpRequest();
let urlProm = 'https://my-json-server.typicode.com/radu-lect/Cat_Shop';
//verificarea prin punerea in browser
// 'https://my-json-server.typicode.com/#nume/#proiect_nume'

xhrProm.open('GET', urlProm+'/promotii');
xhrProm.responseType = 'json';
xhrProm.onload = function(){
	let productsProm = xhrProm.response;
	//ce adaugam pe pagina
	promotion.innerHTML = null;
	productsProm.forEach(p=>{
		productsArrayProm.push(p);
		let pElemProm = document.createElement('div');
		pElemProm.classList.add('promotie');
		pElemProm.innerHTML=`
						<div id="photo-product-div">	
							<img class="product-photo" src='${p.photo_url}'>
						</div>	
							<h2 class="product-name">${p.name}</h2>
							
							<div id="product-descriere">
						
							<p class='product-desc'><b>Description:</b>${p.description}</p>
							</div>
							
						`;
					promotion.append(pElemProm);

	})
}
xhrProm.send();