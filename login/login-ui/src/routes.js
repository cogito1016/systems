import Login from "./routes/Login.svelte";
import SignUp from "./routes/SignUp.svelte";
import NotFound from "./routes/NotFound.svelte";

export default {
  "/": Login,
  "/sign-up": SignUp,
  // The catch-all route must always be last
  "*": NotFound,
};
