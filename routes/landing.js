const app = document.querySelector("#app");

function landing() {
<<<<<<< HEAD
  app.innerHTML = `
    <a href="/signup" class="landing__link">Sign up</a>
    <a href="/login" class="landing__link">Log in</a>
  <a href="/home" class="landing__link">Home</a>
`;
=======
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
>>>>>>> 6918664f8d73dc5ecdb3f0efc0f84b14924fe290
}

export default landing;
