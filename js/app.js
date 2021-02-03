
// Récupère le container des produits
let coursesList = document.querySelector("#courses-list");
let header = document.querySelector("#header");

addToCart();
removeCartItem();
clearCart();
// getStock();


// Se place dans le container
coursesList.addEventListener('click', (e) => {
  //Se place dans la carte du produit
  if (e.target.className == 'add-to-cart') {
    
    //Récupère le chiffre de data-id de l'élément
    let dataId = e.target.getAttribute("data-id");
    
    addToLS(COURSES[dataId]);

    addToCart();

    // getStock();

  }
})

function removeCartItem(){
  header.addEventListener('click', (e) =>{
        if (e.target.className == 'cart-item'){
        e.target.parentNode.parentNode.remove();

        let index = e.target.parentNode.parentNode.querySelector(".index").innerHTML;
    
        let lsList = JSON.parse(localStorage.getItem("panier"));
      
        //Enlever l'objet en question de l'array
        lsList = lsList.filter(item => item !== lsList[index]);
        
        localStorage.setItem('panier', JSON.stringify(lsList));

    }
})
}

//récupère le stock et l'affiche dans le HTML
// function getStock(){

//   let lsList = JSON.parse(localStorage.getItem("panier"));
//   if (lsList == null){
//     return;
//   }

//   let AllStocks = document.querySelectorAll(".stock");

//   let ux_ui = lsList.filter(function(item) {
//     return item.id == 1;
//   });
//   let php_8 = lsList.filter(function(item) {
//     return item.id == 2;
//   });
//   let react_js = lsList.filter(function(item) {
//     return item.id == 3;
//   });
//   let node_js = lsList.filter(function(item) {
//     return item.id == 4;
//   });
//   let my_sql = lsList.filter(function(item) {
//     return item.id == 5;
//   });

//   AllStocks[0].innerHTML = ux_ui[ux_ui.length-1].stock;
//   AllStocks[1].innerHTML = php_8[php_8.length-1].stock;
//   AllStocks[2].innerHTML = react_js[react_js.length-1].stock;
//   AllStocks[3].innerHTML = node_js[node_js.length-1].stock;
//   AllStocks[4].innerHTML = my_sql[my_sql.length-1].stock;

// }

function addToCart(){
  
  let lsList = JSON.parse(localStorage.getItem("panier"));

  let button = "<button class='cart-item'>Supprimer</button>";
  let td = "";

  for(o in lsList){
    td += `<tr class="table-row"><td class="index" style="display: none">${o}</td>
    <td></td><td>${lsList[o].title}</td><td>${lsList[o].price}</td><td>1</td><td>${button}</td></tr>`;
  }
 
  let refTable = document.getElementById("cart-table");
  refTable.tBodies[0].innerHTML = td;
}


function clearCart(){
  header.addEventListener('click', (e) =>{
    if (e.target.className == 'button u-full-width'){
      localStorage.clear();
      e.target.parentNode.querySelector(".tbody").innerHTML = "";
      // getStock();
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