import query from "../query.js";

function dogToggle() {
  const dogs = document.querySelectorAll(".dog");
  dogs.forEach((dog) => {
    console.log(dog);
    dog.classList.toggle("dog--hidden");
  });
}

function createDogElement(dogArr) {
  const app = document.querySelector("#app");
  const pageHeading = document.createElement("h2");
  pageHeading.textContent = "Here are the dogs";
  const toggle = document.createElement("button");
  toggle.textContent = "See my dogs";
  toggle.addEventListener("click", dogToggle);
  app.appendChild(pageHeading);
  app.append(toggle);
  dogArr.map((dog) => {
    const dogCard = document.createElement("article");
    const name = document.createElement("h3");
    const breed = document.createElement("p");
    const photo = document.createElement("img");
    const owner = document.createElement("p");

    dogCard.classList.add("dog");
    if (dog.owner == localStorage.getItem("id")) {
      dogCard.classList.add("dog--hidden");
    }

    console.log(dog.owner);
    console.log(localStorage.getItem("id"));
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
      createDogElement(dogs);
    })
    .catch(console.error);
}

export default home;
