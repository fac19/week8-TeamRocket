const app = document.querySelector("#app");
const navbar = document.querySelector('.navbar');

function landing() {
  app.innerHTML = showLinks();
}

function showLinks() {
  if (localStorage.getItem("token")) {
    navbar.style.display = "flex";
    return `
    <a class="link__home" href="/home">See other dogs</a><br>
    <a class="link__add-dog" href="/add-dog">Add my dog</a>
    `;
  } else {
    navbar.style.display = "none";
    return `
    <a href="/signup">Sign up</a>
    <a href="/login">Log in</a>
    `;
  }
}

export default landing;
