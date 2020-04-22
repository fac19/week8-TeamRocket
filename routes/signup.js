const app = document.querySelector("#app");

const html = `<form action='urL'>

<label for="name">Name</label>
<input type="text name="name" id="name" required>

<label for="email">Email</label>
<input type="email" name="email" id="email" required>

<label for="password">Password</label>
<input type="password" name="password" id="password" required>

<button type="submit">Submit</button>
<div id="message"></div>
</form>
`;

function signUp() {
  document.title = "Sign Up";
  app.innerHTML = html;
}

export default signUp;
