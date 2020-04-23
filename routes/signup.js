const app = document.querySelector("#app");

const html = `<form action='url'>

<label for="name">Username</label>
<input type="text name="name" id="name" required>

<label for="email">Email</label>
<input type="email" name="email" id="email" required>

<label for="password">Password</label>
<input type="password" name="password" id="password" required>

<button type="submit">Submit</button>
<div id="message"></div>
</form>
`;

function signUp({ redirect }) {
  document.title = "Sign Up";
  app.innerHTML = html;
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
