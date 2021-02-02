// let boutonPanierUX = document.querySelectorAll(".add-to-cart");


// for (let i = 0; i < boutonPanierUX.length; i++)
// {
//     boutonPanierUX[i].addEventListener('click', (e) => 
//     {
//         e.preventDefault();
//     })
// }

let coursesList = document.querySelector("#courses-list");

a
function ajouteLigne(tableID) {
  // Récupération d'une référence à la table
  var refTable = document.getElementById(tableID);

  // Insère une ligne dans la table à l'indice de ligne 0
  let tr = document.createElement('tr');
  let td = document.

    t.tBodies[0].appendChild(r)
}

//créer un objet tr et mettre les td dans le innerHTML

coursesList.addEventListener('click', (e) => {
  if (e.target.className == 'add-to-cart') {
    let parent = e.target.parentElement;
    let title = parent.getElementsByTagName("h4")[0].textContent;
    let price = parent.querySelector(".discount").textContent;
    let quantity = 1;
    let refTable = document.getElementById("cart-table");
    let tr = document.createElement('TR');
    let button = "<button class='button'>Supprimer</button>"
    var newTH = document.createElement('button');
    newTH.innerHTML = 'Supprimer';
    let td = `<td></td><td>${title}</td><td>${price}</td><td>${quantity}</td><td>${newTH}</td>`;
    refTable.tBodies[0].appendChild(tr).innerHTML += td;

    newTH.onclick = function () {
      this.parentElement.removeChild(this);
    };


  }
})