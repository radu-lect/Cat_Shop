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
							<button  onclick="addProductToCart(${p.id})" >Buy</button>
							
						`;
					productsGrid.append(pElem);

	})
}
xhr.send();

function addProductToCart(id){
	xhr.open('GET',`${url}/products/${id}`);
	xhr.responseType = 'json';
	xhr.onload = function(){

	}
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

//functia pt adaugarea in cart

function addProductToCart(id){
	let product = productsArray.find(function(p){
			return p.id == id;
	})
	cart.push(product);

	drawCartProduct();

	localStorage.setItem("cart",JSON.stringify(cart));
    

}

// function notificare(){
// 	let btn = document.getElementById('btn_notif');
// 	let coun = 1;

// 	btn_notif.addEventListener('click', function(){
// 		coun++;
// 		console.log(coun);
// 		document.getElementById("notif").innerHTML = coun;
// 	});
// }





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
				<button onclick='buyAll();'> Buy all</button>

				`;

				

}



function buyAll(){
	cart = [];
	cartProd.innerHTML = 'Bani au fost luati, :)';

	localStorage.setItem("cart",'[]');

	notif.innerHTML = "0";
	notif.style.display = "none";

}



// menu
function ul(index) {
	console.log('click!' + index)
	
	var underlines = document.querySelectorAll(".underline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
	}
}
