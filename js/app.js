
// Récupère le container des produits
let coursesList = document.querySelector("#courses-list");
let header = document.querySelector("#header");

addToCart();
removeCartItem();
clearCart();

// Se place dans le container
coursesList.addEventListener('click', (e) => {
  //Se place dans la carte du produit
  if (e.target.className == 'add-to-cart') {
    
    //Récupère le chiffre de data-id de l'élément
    let dataId = e.target.getAttribute("data-id");

    addToLS(COURSES[dataId]);

    addToCart();

  }
})

function removeCartItem(){
  header.addEventListener('click', (e) =>{
        if (e.target.className == 'cart-item'){
        e.target.parentNode.parentNode.remove();

        let index = e.target.parentNode.parentNode.querySelector(".index").innerHTML;
  
        console.log(index);
  
        let lsList = JSON.parse(localStorage.getItem("panier"));
      
        lsList = lsList.filter(item => item !== lsList[index]);
        
        localStorage.setItem('panier', JSON.stringify(lsList));

    }
})
}


function addToCart(){
  
  let lsList = JSON.parse(localStorage.getItem("panier"));
  console.log(lsList);


  let button = "<button class='cart-item'>Supprimer</button>";
  let td = "";

  for(o in lsList){
    td += `<tr class="table-row"><td class="index">${o}</td><td>${lsList[o].title}</td><td>${lsList[o].price}</td><td>1</td><td>${button}</td></tr>`;
  }
 
  let refTable = document.getElementById("cart-table");
  let tr = document.createElement('TR');
  refTable.tBodies[0].innerHTML = td;

}


function clearCart(){
  header.addEventListener('click', (e) =>{
    if (e.target.className == 'button u-full-width'){
      localStorage.clear();
      e.target.parentNode.querySelector(".tbody").innerHTML = "";
    }
  })
}

function addToLS(data){
  let a = [];
  a = localStorage.getItem('panier');

  if (a != null){
    a = JSON.parse(a);
  }  else {
    a = [];
  }
  a.push(data);
  localStorage.setItem('panier', JSON.stringify(a));
}