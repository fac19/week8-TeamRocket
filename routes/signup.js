const app = document.querySelector("#app");

const html = /*html*/ `<form class="form">

<label for="name" class="form__label">Username</label>
<input type="text" name="name" id="name" class="form__input" required>

<label for="email" class="form__label">Email</label>
<input type="email" name="email" id="email" class="form__input" required>

<label for="password" class="form__label" >Password</label>
<input type="password" name="password" id="password" class="form__input" required>

<button type="submit" class="submit-btn">Submit</button>
<div id="message" class="form__error"></div>
</form>
`;

function signUp({ redirect }) {
  document.title = "Sign Up";
  app.innerHTML = html;
  app.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    fetch("https://dogs-rest.herokuapp.com/v1/users/", {

      method: "POST",
      body: JSON.stringify(formObject),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        window.localStorage.setItem("id", json.id);
        window.localStorage.setItem("token", json.access_token);
        redirect("/");
      })
      .catch((error) => {
        console.log("error in signup!");
        app.querySelector("#message").innerHTML = `<h1>${error} haha</h1>`;
      });
  });
}

export default signUp;
