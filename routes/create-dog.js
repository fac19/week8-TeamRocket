const app = document.querySelector("#app");

const html = /*html*/ `<form class="form">

<label for="name" class="form__label">Your dog's name</label>
<input type="text" name="name" id="dogname" class="form__input" required>

<label for="breed" class="form__label">Breed</label>
<input type="text" name="breed" id="breed" class="form__input" required>

<label for="image" class="form__label">Image URL</label>
<input type="text" name="image" id="photoUrl" class="form__input" required>

<button type="submit" class="submit-btn">Submit</button>
<div id="message" class="form__error"></div>
</form>
`;

function addDog({ redirect }) {
  const token = localStorage.getItem("token");
  console.log("token : " + token);

  if (token) {
    document.title = "Add a dog";
    app.innerHTML = html;
    app.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formObject = Object.fromEntries(formData);
      console.log("addDog -> formObject", formObject);

      fetch("https://dogs-rest.herokuapp.com/v1/dogs", {
        method: "POST",
        body: JSON.stringify(formObject),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          redirect("/");
        })
        .catch((error) => {
          app.querySelector("#message").innerHTML = `<h1>${error} haha</h1>`;
        });
    });
  }
}

export default addDog;
