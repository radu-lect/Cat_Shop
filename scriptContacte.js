// producatorii
let productsGrid = document.getElementById('products');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/radu-lect/Cat_Shop';
//verificarea prin punerea in browser
// 'https://my-json-server.typicode.com/#nume/#proiect_nume'

xhr.open('GET', url+'/users');
xhr.responseType = 'json';
xhr.onload = function(){
	let products = xhr.response;
	//ce adaugam pe pagina
	productsGrid.innerHTML = null;
	products.forEach(p=>{
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classList.add('product-row');
		pElem.innerHTML=`<div class="users">

						<div id="photo-product-div">	
							<img class="product-photo" src='${p.photo_url}'>
						</div>	
							<h2 class="users-name" >${p.name}</h2>
							<h2 class="users-name" >${p.sirname}</h2>

							
							<div id="product-descriere">
							<p class='product-price'><b>Money: </b>${p.balance}</p>
						
						
							</div>
						</div>	
						`;
					productsGrid.append(pElem);

	})
}
xhr.send();

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




// hide si show shop

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


