// let boutonPanierUX = document.querySelectorAll(".add-to-cart");


// for (let i = 0; i < boutonPanierUX.length; i++)
// {
//     boutonPanierUX[i].addEventListener('click', (e) => 
//     {
//         e.preventDefault();
//     })
// }

let coursesList = document.querySelector("#courses-list");



//créer un objet tr et mettre les td dans le innerHTML

coursesList.addEventListener('click', (e) => {
  if (e.target.className == 'add-to-cart') {
    let parent = e.target.parentElement;
    let title = parent.getElementsByTagName("h4")[0].textContent;
    let price = parent.querySelector(".discount").textContent;
    let quantity = 1;
    let refTable = document.getElementById("cart-table");
    let tr = document.createElement('TR');
    let button = "<button class='button'>Supprimer</button>";
    let td = `<td></td><td>${title}</td><td>${price}</td><td>${quantity}</td><td>${button}</td>`;
     refTable.tBodies[0].appendChild(tr).innerHTML += td;
    
     let objJson = {
        titre :parent.getElementsByTagName("h4")[0].textContent ,
        prix : parent.querySelector(".discount").textContent ,
        quantité : 1
    }
    let objLinea = JSON.stringify(objJson);
    localStorage.setItem("obj",objLinea);
  

  }
  let objLinea = localStorage.getItem("obj");
let objJson = JSON.parse(objLinea);
alert(objJson.titre)
 
})
let objLinea = JSON.stringify(objJson);
localStorage.setItem("obj",objLinea);
let objLinea = localStorage.getItem("obj");
let objJson = JSON.parse(objLinea);
alert(objJson.titre)


