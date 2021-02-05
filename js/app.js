// Initialisation des variables
let coursesList = document.querySelector("#courses-list");
let header = document.querySelector("#header");
let coursesTable = [];
let cart = document.getElementById("in-cart-items-num");
let Subtotal = document.getElementById("Subtotal");
let stock = document.getElementsByClassName("stock");
let redirection = document.getElementById('confirm-command');
let alert_notification = document.querySelector('.notification-container')
stock.innerHTML = 50 ;

refreshCart();
addToCart();
removeCartItem();
clearCart();

//Ajoute une ligne au panier, rafraichit le panier
function refreshCart(){

    let lsList = JSON.parse(localStorage.getItem("panier"));

    let button = "<button class='cart-item'>Supprimer</button>";
    let td = "";

    //Boucle dans les objets du local storage et les stock dans une ligne à chaque tour de boucle
    for(o in lsList){
        td += `<tr class="table-row">
    <td></td><td class="title">${lsList[o].title}</td><td>${lsList[o].price}</td><td>1</td><td>${button}</td>
               </tr>`;
    }

    let refTable = document.getElementById("cart-table");

    //Insertion dans le corps de la table
    refTable.tBodies[0].innerHTML = td;
}

// Se place dans le container
function addToCart(){
    coursesList.addEventListener('click', (e) => {
        //Se place dans la carte dcu produit
        if (e.target.className == 'add-to-cart') {
    
            //Récupère le chiffre de data-id de l'élément
            let dataId = e.target.getAttribute("data-id");
    
            //Récupère un objet de COURSES à son id
            let courseName = COURSES[dataId].title;
    
            //Ajoute cet objet au localstorage
            addToLS(COURSES[dataId]);
    
            refreshCart();
    
            notification("Vous avez ajouté un " + courseName + " dans le panier", '#198754', '#FFF')
    
        }
    })
}


//Supprime une ligne du panier
function removeCartItem(){
    header.addEventListener('click', (e) =>{
        if (e.target.className == 'cart-item'){
            e.target.parentNode.parentNode.remove();
           // refreshCart();
           

            //Récupère l'index de la ligne du panier pour le passer dans l'objet
            let title = e.target.parentNode.parentNode.querySelector(".title").innerHTML;

            // cart.innerHTML --;
            // Subtotal.innerHTML -= parseInt(9.99);

            removeFromLS(title);

        }
    })
}




//Ajoute au localStorage
function addToLS(data){


    //Vérifie que le localstorage ne soit pas null, sinon renvoit un array vide
    let a = [];
    a = localStorage.getItem('panier');

    if (a != null){
        a = JSON.parse(a);
        // cart.innerHTML ++;
        // Subtotal.innerHTML += parseInt(9.99);
    }  else {
        a = [];
    }


    // if (data.stock > 1){
    //     data.stock--;
    // }
    // else{
    //     alert('Article Indisponible');
    //     return;
    // }

    //ajoute l'objet au local storage
    a.push(data);
    localStorage.setItem('panier', JSON.stringify(a));

}


//Supprime du localStorage 
function removeFromLS(title){

    let lsList = JSON.parse(localStorage.getItem("panier"));

//    let lastObjectId = lsList[index].id;


    for (o in lsList){
        if (lsList[o].title = title){
            lsList.splice(o, 1);
            break;
        }
    }
    //Enlever l'objet en question de l'array
    //lsList = lsList.filter(item => item !== lsList[index]);
    // lsList = lsList.filter(function(item) { return item.title != title; });

    // for (o in lsList){
    //     if (lsList[o].id = lastObjectId){
    //         lsList[o].stock++;
    //     }
    // }

    localStorage.setItem('panier', JSON.stringify(lsList));
    notification('Vous avez supprimé un article', '#dc3545', '#FFF')

}

//Supprime l'ensemnle du panier ainsi que le localStorage
function clearCart(){
    header.addEventListener('click', (e) =>{
        if (e.target.className == 'button u-full-width'){
            localStorage.clear();
            e.target.parentNode.querySelector(".tbody").innerHTML = "";
            notification('Vous avez vidé le panier', '#0dcaf0', '#000');
            cart.innerHTML == 0;
            Subtotal.innerHTML == parseFloat(0);
        }
    })
}


// Redirection
redirection.addEventListener('click', function () {
    window.location = 'form.html'
})

/*
supprime l'element passe en parametre
 */
function hide(element) {
    element.remove()
}

/*

 */
const notificationMessage = (message, backgroundColor, color) =>
    `
    <div class="alert" style="background: ${backgroundColor}; color: ${color}">
      <span class="message">${message}</span>
    </div>
    `

function notification (message, backgroundColor, color) {

    let div = document.createElement('div')
    div.classList.add('alert-messages')
    div.innerHTML = notificationMessage(message, backgroundColor, color)
    let alert_box = alert_notification.appendChild(div)

    // après 3 secondes
    setTimeout(function () {
        hide(alert_box)
    }, 3000)
}

//récupère le stock et l'affiche dans le HTML (ne fontionne pas tout le temps)
// function getStock(){

//     let lsList = JSON.parse(localStorage.getItem("panier"));
//     if (lsList == null){
//         return;
//     }

//     let AllStocks = document.querySelectorAll(".stock");

//     let ux_ui = lsList.filter(function(item) {
//         return item.id == 1;
//     });
//     let php_8 = lsList.filter(function(item) {
//         return item.id == 2;
//     });
//     let react_js = lsList.filter(function(item) {
//         return item.id == 3;
//     });
//     let node_js = lsList.filter(function(item) {
//         return item.id == 4;
//     });
//     let my_sql = lsList.filter(function(item) {
//         return item.id == 5;
//     });

//     AllStocks[0].innerHTML = ux_ui[ux_ui.length-1].stock;
//     AllStocks[1].innerHTML = php_8[php_8.length-1].stock;
//     AllStocks[2].innerHTML = react_js[react_js.length-1].stock;
//     AllStocks[3].innerHTML = node_js[node_js.length-1].stock;
//     AllStocks[4].innerHTML = my_sql[my_sql.length-1].stock;

// }