import h from "./createElement.js";

const logoutLink = document.querySelector("#navbar__links--logout");

logoutLink.innerHTML = `<a href="/logout" class="navbar__links--logout--link">LOGOUT</a>`;

const app = document.querySelector("#app");
app.innerHTML = "";

function createPage(dogs) {
  const title = h(
    "h2",
    { className: "see_dogs__heading" },
    "Bark up the right tree today 🦴"
  );
  const toggle = h("button", { className: "see-dogs__toggle" }, "See my doggo");
  toggle.addEventListener("click", dogToggle);
  app.append(title, toggle);

  const dogList = dogs.map((dog) => {
    if (dog.image) {
      const owner = h("button",{ className: "dog__owner", href: "#", id: `${dog.owner}` },"Contact owner");
      owner.addEventListener("click", (event) => {
        event.preventDefault;
        fetch("https://dogs-rest.herokuapp.com/v1/users/" + event.target.id, {})
          .then((response) => response.json())
          .then((data) => {
            owner.innerText = data.email;
          })
          .catch(console.error);
      });
      const photo = h("img", {
        className: "dog__photo",
        src: `${dog.image}`,
        loading: "lazy",
        alt: `photo of ${dog.name}`,
      });
      const name = h("h3", { className: "dog__name" }, dog.name);
      const breed = h("p", { className: "dog__breed" }, dog.breed);
      if (dog.owner == localStorage.getItem("id")){
        return h("article", { className: "dog__card dog--hidden" }, photo, name, breed);
      }
      else {
        return h("article", { className: "dog__card" }, owner, photo, name, breed);
      }
    }
  }).filter(a => a);

  app.append(...dogList);
}

function dogToggle() {
  const dogs = document.querySelectorAll(".dog__card");
  const toggle = document.querySelector(".see-dogs__toggle");
  dogs.forEach((dog) => {
    dog.classList.toggle("dog--hidden");
  });

  if (toggle.textContent === "See my doggo") {
    toggle.textContent = "See other doggos";
  } else {
    toggle.textContent = "See my doggo";
  }
}

function home() {
  fetch("https://dogs-rest.herokuapp.com/v1/dogs/", {})
    .then((response) => response.json())
    .then((dogs) => {
      createPage(dogs);
    })
    .catch(console.error);
}

export default home;
