import AppRouter from "./Router";
import { useState } from "react";
import { authService } from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy;{new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;
