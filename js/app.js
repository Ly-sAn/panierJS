// Récupère le container des produits
let coursesList = document.querySelector("#courses-list");
let header = document.querySelector("#header");
let alert_notification = document.querySelector('.notification-container')

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

        notification('Vous avez ajouter un article dans le panier', '#198754', '#FFF')

    }
})

function removeCartItem(){
    header.addEventListener('click', (e) =>{
        if (e.target.className == 'cart-item'){
            e.target.parentNode.parentNode.remove();

            let index = e.target.parentNode.parentNode.querySelector(".index").innerHTML;

            let lsList = JSON.parse(localStorage.getItem("panier"));

            lsList = lsList.filter(item => item !== lsList[index]);

            localStorage.setItem('panier', JSON.stringify(lsList));

            notification('Vous avez supprimer un article', '#dc3545', '#FFF')

        }
    })
}


function addToCart(){

    let lsList = JSON.parse(localStorage.getItem("panier"));
    console.log(lsList);


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
            notification('Vous avez vidé le panier', '#0dcaf0', '#000')
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

    if(data.stock > 0){
        data.stock--;
    } else {
        data.stock = 0;
    }

    a.push(data);
    localStorage.setItem('panier', JSON.stringify(a));
}


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