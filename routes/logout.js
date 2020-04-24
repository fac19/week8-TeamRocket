function logout({redirect}) {
  window.localStorage.removeItem("id");
  window.localStorage.removeItem("token");
  redirect("/");
}

export default logout;