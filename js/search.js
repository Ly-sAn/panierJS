const datas = COURSES


let buildItems = (data) => {
    let container_items = document.querySelector('.courses__container')

    // recupere les clés de l'objet
    let courses = Object.keys(data)

    container_items.innerHTML = ''

    for (let i = 0; i < courses.length; i++) {

        let item = `
        <div class="course__item">
          <figure class="course_img">
            <img src="img/courses/${data[courses[i]].img}">
          </figure>
          <div class="info__card">
            <h4>${data[courses[i]].title}</h4>
            <figure class="mark m_4">
              <img src="img/rates.png">
            </figure>
            <p>
              <span class="price">${data[courses[i]].initial_price} €</span>
              <span class="discount">${data[courses[i]].price} €</span>
            </p>
            <p>
              Disponible: <span class="stock">${data[courses[i]].stock}</span>
            </p>
            <a href="#" class="add-to-cart" data-id="1"><i class="fa fa-cart-plus"></i>Ajouter au panier</a>
          </div>
        </div>
        `
        container_items.innerHTML += item
    }

}


function searchItem(value, data) {
    let filterData = []

    let courses = Object.keys(data)

    for (let i = 0; i < courses.length; i++) {
        value = value.toLowerCase()
        let title = data[courses[i]].title.toLowerCase()

        if (title.includes(value)) {
            filterData.push(data[courses[i]])
        }
    }
    return filterData
}

buildItems(datas)

/* Recupere l'input dans le formulaire */
let input_search = document.querySelector('#search-item > input')

/*
Declenche l'evenement lorsque le button appuyé est relaché

 */
input_search.addEventListener('keyup', function () {
    let value = this.value // recupere ce que l'utilisateur saisi dans l'input
    let data = searchItem(value, datas)
    buildItems(data) // relance la fonction buildItems qui affichera les items en fonction de ce que l'utilisateur aura saisi
})

