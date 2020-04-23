import router from "./router.js";
import home from "./routes/home.js";

const app = router();
console.log("app.js");
app.get("/home", home);

app.listen();
