import query from "../query.js";
const logoutLink = document.querySelector("#navbar__links--logout");

logoutLink.innerHTML = `<a href="/logout" class="navbar__links--logout--link">LOGOUT</a>`;

function dogToggle() {
  const dogs = document.querySelectorAll(".dog");
  dogs.forEach((dog) => {
    dog.classList.toggle("dog--hidden");
  });
}

function createDogElement(dogArr) {
  const app = document.querySelector("#app");
  const pageHeading = document.createElement("h2");
  pageHeading.textContent = "Bark up the right tree today 🦴";
  pageHeading.classList.add("see_dogs__heading");
  const toggle = document.createElement("button");
  toggle.textContent = "See my doggo";
  toggle.classList.add("see-dogs__toggle");
  toggle.addEventListener("click", dogToggle);

  toggle.addEventListener("click", () => {
    if (toggle.textContent === "See my doggo") {
      toggle.textContent = "See other doggos";
    } else {
      toggle.textContent = "See my doggo";
    }
  });

  app.appendChild(pageHeading);
  app.append(toggle);
  dogArr.map((dog) => {
    const dogCard = document.createElement("article");
    const name = document.createElement("h2");
    const breed = document.createElement("p");
    const photo = document.createElement("img");
    const owner = document.createElement("button");

    dogCard.classList.add("dog");
    if (dog.owner == localStorage.getItem("id")) {
      dogCard.classList.add("dog--hidden");
    }

    dogCard.classList.add("dog__card");
    name.classList.add("dog__name");
    breed.classList.add("dog__breed");
    photo.classList.add("dog__photo");
    owner.classList.add("dog__owner");
    owner.href = "";
    owner.id = dog.owner;

    name.innerText = dog.name;
    breed.innerText = dog.breed;
    photo.src = dog.image;
    photo.alt = "photo of " + dog.name;

    photo.onerror = function() {
      photo.src =
        "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
    };

    owner.innerText = dog.owner;

    owner.innerText = "Contact owner";
    owner.addEventListener("click", (event) => {
      event.preventDefault;
      fetch("https://dogs-rest.herokuapp.com/v1/users/" + event.target.id, {})
        .then((response) => response.json())
        .then((data) => {
          owner.innerText = data.email;
        })
        .catch(console.error);
    });

    dogCard.appendChild(owner);
    dogCard.appendChild(photo);
    dogCard.appendChild(name);
    dogCard.appendChild(breed);

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
