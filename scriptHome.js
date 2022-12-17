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

// scroll fc

 function leftScroll() {
        const left = document.querySelector(".products-row");
        left.scrollBy(250, 0);
      }
      function rightScroll() {
        const right = document.querySelector(".products-row");
        right.scrollBy(-250, 0);
      }
