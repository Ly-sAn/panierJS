/*
Créez un objet qui contient 2 attributs.

      - Titre
      - ID

      A partir d'une fonction JS, ajoutez un paragraphe qui contient le titre de votre objet
      et un data-id qui contient l'id.

      Ajoutez également un attribut data-item qui contient l'entiereté de l'objet

      ENfin, ajoutez un événement au click sur le paragraphe créé et passer le texte en gras lors du click.
 */



(function () {

    const MY_OBJECT = {
        'id': 1,
        'title': 'Granola'
    }

    let para = document.getElementById('paragraph')
    let stringObject = JSON.stringify(MY_OBJECT)
    let objParsed = JSON.parse(stringObject)

    para.dataset.items = stringObject
    para.dataset.id = objParsed.id

    para.innerHTML = objParsed.title

    para.addEventListener('click', (e) => {
        e.target.style.fontWeight = "900"
    })

})()


let saveData = (x) => {
    if (localStorage.getItem(x)) {
        localStorage.setItem(x)
    }
}

let saveDataSecond = (key, variable) => {
    if (typeof (Storage) !== 'undefined') {
        // Storing value
        localStorage.setItem(key, variable);

        // retrive value from local data storage
        let myVar = localStorage.getItem(key)
    }
}
