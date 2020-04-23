const app = document.querySelector("#app");

function landing() {
  app.innerHTML = `
    <a href="/signup" class="landing__link">Sign up</a>
    <a href="/login" class="landing__link">Log in</a>
  <a href="/home" class="landing__link">Home</a>
`;
}

export default landing;
