const app = document.querySelector("#app");

function landing() {
  app.innerHTML = showLinks();
}

function showLinks() {
  if (localStorage.getItem("token")) {
    return `
      <a href="/home">Home</a>
    `;
  } else {
    return `
    <a href="/signup">Sign up</a>
    <a href="/login">Log in</a>
    <a href="/home">Home</a>
    `;
  }
}

export default landing;
