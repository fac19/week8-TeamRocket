import query from "../query.js";

function createDogElement(dogArr) {
  const app = document.querySelector("#app");
  dogArr.map((dog) => {
    const dogCard = document.createElement("article");
    const name = document.createElement("h3");
    const breed = document.createElement("p");
    const photo = document.createElement("img");
    const owner = document.createElement("p");

    dogCard.classList.add("dog");
    name.classList.add("dog__name");
    breed.classList.add("dog__breed");
    photo.classList.add("dog__photo");
    owner.classList.add("dog__owner");

    name.innerText = dog.name;
    breed.innerText = dog.breed;
    photo.src = dog.image;
    photo.alt = "photo of " + dog.name;
    owner.innerText = dog.owner;

    dogCard.appendChild(name);
    dogCard.appendChild(breed);
    dogCard.appendChild(photo);
    dogCard.appendChild(owner);

    app.appendChild(dogCard);
  });
}

function home() {
  fetch("https://dogs-rest.herokuapp.com/v1/dogs/", {})
    .then((response) => response.json())
    .then((dogs) => {
      console.log(dogs);
      createDogElement(dogs);
    })
    .catch(console.error);
}

export default home;
