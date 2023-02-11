import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [hasError, setHasError] = useState(false);
  let [firebaseError, setfirebaseError] = useState("");
  return (
    <>
      <Helmet>
        <title>sign up Page</title>
        <meta name="description" content="sign up page" />
        <style type="text/css">{`
        
    `}</style>
      </Helmet>
      <Header />

      <main>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <p style={{ fontSize: "22px", marginBottom: "20px" }}>
            create anew account <span>🧡</span>{" "}
          </p>
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="username"
            required
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="email"
            required
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <button
            onClick={() => {
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  updateProfile(auth.currentUser, {
                    displayName: userName,
                  })
                    .then(() => {
                      navigate("/");
                    })
                    .catch((error) => {
                      // An error occurred
                      console.log(error);
                    });

                })
                .catch((error) => {
                  const errorCode = error.code;
                  setHasError(true);
                  switch (errorCode) {
                    case "auth/invalid-email":
                      setfirebaseError("wrong email");
                      break;
                    case "auth/wrong-password":
                      setfirebaseError("wrong password");
                      break;
                    case "auth/user-not-found":
                      setfirebaseError("user not found");
                      break;
                    default:
                      setfirebaseError("please check your email and password");
                  }

                  // ..
                });
            }}
          >
            sign up
          </button>
          <p className="account">
            already have an account ? <Link to="/signin">sign in </Link>
          </p>
          {hasError && <h2>{firebaseError}</h2>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
