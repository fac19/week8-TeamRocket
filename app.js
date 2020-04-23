import router from "./router.js";
import signUp from "./routes/signup.js";
import landing from "./routes/landing.js";

const app = router();

app.get("/", landing);
app.get("/signup", signUp);

app.listen();
