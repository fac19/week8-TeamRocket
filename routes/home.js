import query from "../query.js";

const pageTemplate = document.createElement("template");
pageTemplate.innerHTML = /*html*/ `
<h2 class="home__title">All the dogs</h2>
    <section id="dogList">
    
    </section>
`;

const dogTemplate = document.createElement("template");
dogTemplate.innerHTML = /*html*/ `
<article class="dog">
    <h3 class="dog__name"></h3>
    <img class="dog__photo" src="" alt="">
    <p class="dog__owner"></p>
</article>
`;

function home() {
  console.log("here");
  return dogTemplate;
  const fetchOptions = {
    method: "GET",
  };
  query("https://dogs-rest.herokuapp.com/v1/dogs/", fetchOptions).then(
    (response) => {
      console.log(response);
    }
  );
}

export default home;
