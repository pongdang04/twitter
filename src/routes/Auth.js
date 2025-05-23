import { useState } from "react";
import { authService } from "fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPasword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const auth = authService;
    try {
      let data;
      if (newAccount) {
        //create new User
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        //login
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
