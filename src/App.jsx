
// import Home from './pages/Home'

// function App() {


//   return (
//     <>
// <Home/>
//     </>
//   )
// }

// export default App




import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null; 
  }

  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;

