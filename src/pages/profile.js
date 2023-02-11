import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import Moment from 'react-moment';

const Profile = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(()=>{
    if(!user && !loading){
      navigate("/")
    }
});
if (loading) {
  return (
    <div>
      <Header />
      <main>Initialising User...</main>
      <Footer/>
    </div>
  );
}
if (error) {
  return (
    <div>
      <p>Error: {error}</p>
    </div>
  );
}
if (user) {
  return (
    <>
      <Helmet>
        <title>Profile Page</title>
        <meta name="description" content="Profile" />
        <style type="text/css">{`  
    `}</style>
      </Helmet>
      <Header />
      <main>
        <div className="profile-style">
          <h2>username : {user.displayName}</h2>
          <p>email:{user.email}</p>
          <p>account created :<Moment fromNow date={user.metadata.lastSignInTime}/></p>
          <p>last login : <Moment fromNow date={user.metadata.lastSignInTime}/></p>
          <button className="delete">delete account</button>
          
        </div>
      </main>
      <Footer />
    </>
  );
}

};

export default Profile;
