
let coursesList = document.querySelector("#courses-list");


//créer un objet tr et mettre les td dans le innerHTML

coursesList.addEventListener('click', (e) => {


  if (e.target.className == 'add-to-cart') {
    
    //Récupère le chiffre de data-id de l'élément
    let dataId = e.target.getAttribute("data-id");
    //Parent de l'élément ciblé
    let parent = e.target.parentElement;


    let refTable = document.getElementById("cart-table");
    let tr = document.createElement('TR');
    let button = "<button class='button'>Supprimer</button>";
    let td = `<td></td><td>${obj.title}</td><td>${obj.price}</td><td>${obj.quantity}</td><td>${button}</td>`;
    refTable.tBodies[0].appendChild(tr).innerHTML += td;

    addToLS(COURSES[dataId]);

    addEventListener('click', (e) =>{
      if (e.target.className == 'button'){
        e.target.parentNode.parentNode.remove();
      }
    })

    // addEventListener('click', (e) =>{
    //   if (e.target.className == "button u-full-width"){
    //     e.target.parentNode.remove();
    //   }
    // })

  }
})

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