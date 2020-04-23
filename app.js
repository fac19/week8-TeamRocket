import router from "./router.js";

import home from "./routes/home.js";
import signUp from "./routes/signup.js";
import landing from "./routes/landing.js";
import logIn from "./routes/login.js";

const app = router();

app.get("/home", home);

app.get("/", landing);
app.get("/signup", signUp);
app.get("/login", logIn);

app.listen();
