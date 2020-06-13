const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const mainAddBreeds = document.querySelector("ul.example");
// const container = document.querySelector('#dog-image-container');

//const dogBreeds = document.querySelector("#dog-breeds")

document.addEventListener("DOMContentLoaded", function () {
  loadDogs();
  loadAllDogBreeds();
}
)
//() => loadDogs())
// Challenge 1
const loadDogs = () => {
fetch(imgUrl)
    .then(res => res.json())
    .then(json => {
        //aJson.forEach(doggie => console.log(doggie))
        json.message.forEach(doggie => addImage(doggie))
        // console.log(json)
    })
}


function addImage(dogPicUrl) {
    console.log(dogPicUrl)
  // let container = document.querySelector('#dog-image-container');
  // let newImageEl = document.createElement('img');
  // newImageEl.src = dogPicUrl;
  // container.appendChild(newImageEl);
}

// Challenge 2
let breed = []
const loadAllDogBreeds = () => {
fetch(breedUrl)
    .then(res => res.json())
    .then(json => {
        //aJson.forEach(doggie => console.log(doggie))
        //json.message.forEach(doggie => addImage(doggie))
        console.log(json.message)
        for (const property in json.message) {
          console.log(property);
          breed.push(property)
        }
        breed.forEach(doggie => addDogBreed(doggie))

    })
}

//*** 
function addDogBreed(dogPicUrl) {
    const container = document.querySelector('#dog-image-container');
    console.log("im here", typeof dogPicUrl)
  //mainAddBreeds.src = dogPicUrl;
  //container.appendChild(mainAddBreeds);
}



console.log('%c HI', 'color: firebrick')
