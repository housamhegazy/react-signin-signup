


import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet  } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(()=>{
    if(!user){
      navigate("/")
    }
});
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
    <Header />
    <MainContent pageName="About Page"  />   
    <Footer />
  </>
  );
}

export default About;
