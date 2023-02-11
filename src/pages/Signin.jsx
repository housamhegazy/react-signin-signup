import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("");
  let [hasError,setHasError] = useState(false);
  let [firebaseError,setfirebaseError] = useState("");
  return (
    <>
      <Helmet>
        <title>sign in Page</title>
        <meta name="description" content="sign in page" />
        <style type="text/css">{`
   
 
        
    `}</style>
      </Helmet>
      <Header />
       <main>
        <form action="">
          <input onChange={(e)=>{
            setEmail(e.target.value)
          }} type="email" name="email" placeholder="email" required />
          <input onChange={(e)=>{
            setPassword(e.target.value)
          }} type="password" name="password" placeholder="password" required />
          <button onClick={(e)=>{
            e.preventDefault()
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              navigate("/");
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              setHasError(true);
              switch (errorCode){
                case "auth/invalid-email"
                : setfirebaseError('wrong email')
                break;
                case "auth/wrong-password"
                : setfirebaseError('wrong password')
                break;
                case "auth/user-not-found"
                : setfirebaseError('user not found')
                break;
                default:setfirebaseError("please check your email and password")
              }
              
            });
          }}>sign in</button>
          <p className="account">
            dont have an account ? <Link to="/signup">sign up </Link>
          </p>
          {hasError && <h2>{firebaseError}</h2>}
        </form>
      
       </main>
      <Footer />
    </>
  );
};

export default Signin;
