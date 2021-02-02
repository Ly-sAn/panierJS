// let boutonPanierUX = document.querySelectorAll(".add-to-cart");


// for (let i = 0; i < boutonPanierUX.length; i++)
// {
//     boutonPanierUX[i].addEventListener('click', (e) => 
//     {
//         e.preventDefault();
//     })
// }



let coursesList = document.querySelector("#courses-list");
let cartCount = 0;


//créer un objet tr et mettre les td dans le innerHTML

coursesList.addEventListener('click', (e) => {


  if (e.target.className == 'add-to-cart') {
    
    cartCount++;
    cartCount.toString;

    //Récupère le chiffre de data-id de l'élément
    let dataId = e.target.getAttribute("data-id");
    //Parent de l'élément ciblé
    let parent = e.target.parentElement;


    let obj = {
      title : parent.getElementsByTagName("h4")[0].textContent,
      price : parent.querySelector(".discount").textContent,
      quantity : 1,
    }

    //parent.querySelector(".stock").textContent
    let refTable = document.getElementById("cart-table");
    let tr = document.createElement('TR');
    let button = "<button class='button'>Supprimer</button>";
    let td = `<td></td><td>${obj.title}</td><td>${obj.price}</td><td>${obj.quantity}</td><td>${button}</td>`;
    refTable.tBodies[0].appendChild(tr).innerHTML += td;
    let leftQuantity = parent.querySelector(".stock").textContent;

    window.localStorage.setItem(cartCount, JSON.stringify(COURSES[dataId]) );


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