const app = document.querySelector("#app");
const html = /*html*/ `
<form  class="form">

<label for="username" class="form__label">Username</label>
<input type="text" name="username" id="username" class="form__input" required>

<label for="email" class="form__label">Email</label>
<input type="email" name="email" id="email" class="form__input" required>

<label for="password" class="form__label">Password</label>
<input type="password" name="password" id="password" class="form__input" required>

<button type="submit" class="submit-btn">Submit</button>
<div id="message" class="form__error"></div>
</form>
`;

function handleFormSubmission() {
  app.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);

    fetch("https://fac-dogs.herokuapp.com/v1/users", {
      method: "POST",
      body: JSON.stringify(formObject),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        window.localStorage.setItem("token", json.access_token);
        redirect("/");
      })
      .catch((error) => {
        app.querySelector("#message").innerHTML = `<h1>${error} haha</h1>`;
      });
  });
}

function logIn() {
  document.title = "Log In";
  app.innerHTML = html;

  handleFormSubmission();
  // .then((res) => res.json())
  // .then((json) => {
  //   window.localStorage.setItem("token", json.access_token);
  //   redirect("/");
  // })
  // .catch((error) => {
  //   app.querySelector("#message").innerHTML = `<h1>${error} haha</h1>`;
  // });
}

export default logIn;
