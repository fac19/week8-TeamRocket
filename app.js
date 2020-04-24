import router from "./router.js";

import home from "./routes/home.js";
import signUp from "./routes/signup.js";
import landing from "./routes/landing.js";
import logIn from "./routes/login.js";
import addDog from "./routes/create-dog.js";
import logout from "./routes/logout.js";

const app = router();

app.get("/home", home);

app.get("/", landing);
app.get("/signup", signUp);
app.get("/login", logIn);
app.get("/add-dog", addDog);
app.get("/logout", logout);

app.listen();
