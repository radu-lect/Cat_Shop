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
		pElemAces.classList.add('product');
		pElemAces.innerHTML=`
					
							
					
							<img class="product-photo" src='${p.photo_url}'>
			
							<h2 class="product-name">${p.name}</h2>
							
							<div id="product-descriere">
							<p class='product-price'><b>Price: </b>${p.price}</p>
						
							<p class='product-desc'><b>Description:</b>${p.description}</p>
							<button   onclick="addProductToCartAces(${p.id});" class="btn_buy" >Buy</button>

							
						`;
					accesorii.append(pElemAces);

	})
}
xhrAces.send();



function addProductToCart(id){
	xhr.open('GET',`${url}/products/${id}`);
	xhr.responseType = 'json';
	xhr.onload = function(){

	}
}

function addProductToCartAces(id){
	xhrAces.open('GET',`${url}/accesorii/${id}`);
	xhrAces.responseType = 'json';
	xhrAces.onload = function(){

	}
}

//functia pt adaugarea in cart

function addProductToCart(id){
	let product = productsArray.find(function(p){
			return p.id == id;
	})
	cart.push(product);

	drawCartProduct();

	localStorage.setItem("cart",JSON.stringify(cart));
    


}
function addProductToCartAces(id){
	let productAces = productsArray.find(function(p){
			return p.id == id;
	})
	cart.push(productAces);

	drawCartProduct();

	localStorage.setItem("cart",JSON.stringify(cart));
    


}

let cartProd = document.getElementById('cart-products');
let cart = []; //cream tabloul pt cart
if(localStorage.getItem('cart')) {
	cart = JSON.parse(localStorage.getItem('cart'));
	drawCartProduct();
}


function openCart(){
	cartProd.classList.toggle('hide');

}








function drawCartProduct(){
	if (cart.lenght === 0) return cartProd.innerHTML = 'Cumpara ceva';

	cartProd.innerHTML = null;
let sum = 0;
let coun = 0;


	cart.forEach(function(p){
		cartProd.innerHTML +=`
		<div id="product-cart"  >
						<p><img src='${p.photo_url}'>${p.name} |${p.price}$</p>
						
		</div>				
						<hr>`;

			sum += p.price;


			
			coun ++;
			console.log(coun);



		
	let notif = document.getElementById('notif');
	notif.style.display = "flex";


	
	notif.innerHTML = coun;


	});
	cartProd.innerHTML += `
				<p>Total price:${sum}$ </p>
				<button onclick='buyAll(); '> Buy all</button>

				`;

}


function buyAll(){
	cart = [];
	cartProd.innerHTML = 'Bani au fost luati, :)';

	localStorage.setItem("cart",'[]');

	notif.innerHTML = "0";
	notif.style.display = "none";
	
}


// notificare
const deleteBtn_recl = document.getElementById("delete_recl");
const notification = document.getElementById("notification_anunt");
const closeBtn = document.getElementById("close");
let back_notif = document.getElementById("back_inactiv");
function addNotif_Reclama(){


deleteBtn_recl.addEventListener("click", () => {
  notification.classList.add("notification-show");
  back_notif.classList.add("back_inactive");
});

closeBtn.addEventListener("click", () => {
  notification.classList.remove("notification-show");
  back_notif.classList.remove("back_inactive");

});


}

// const deleteBtn_BAll =document.getElementById("deleteBtn_BAll");
// const closeBtn_BAll = document.getElementById('closeBtn_BAll');
// const notification_BAll = document.getElementById("notification_BAll");



// function addNotif_BuyAll(){
// 	console.log("merge");
// 	deleteBtn_BAll.addEventListener("click", () => {
//   notification_BAll.classList.add("notification-show");
//   back_notif.classList.add("back_inactive");
// });

// closeBtn_BAll.addEventListener("click", () => {
//   notification_BAll.classList.remove("notification-show");
//   back_notif.classList.remove("back_inactive");

// });

// }




