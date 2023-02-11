import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
      </Helmet>
        <Header />
        {user && <main>welcome : {user.displayName} <p className="heart">🧡</p></main>}
        {!user && <main><p className="pls"> please <Link to="/signin"> sign in</Link> to continue.... <span>🧡</span></p></main>}
        <Footer />
      
    </>
  );
};

export default Home;
