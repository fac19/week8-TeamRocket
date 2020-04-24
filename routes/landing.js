const app = document.querySelector("#app");

function landing() {
  app.innerHTML = showLinks();
}

function showLinks() {
  if (localStorage.getItem("token")) {
    return `
    <a class="link__home" href="/home">See other dogs</a><br>
    <a class="link__add-dog" href="/add-dog">Add my dog</a>
    `;
  } else {
    return `
    <a href="/signup">Sign up</a>
    <a href="/login">Log in</a>
    `;
  }
}

export default landing;
