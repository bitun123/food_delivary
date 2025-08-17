import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'

createRoot(document.getElementById('root')).render(
   <Auth0Provider
    domain="dev-cxl3evy3cnvxei6s.us.auth0.com"
    clientId="m6RY9yvI6VBiFJALbwMPy4VUF7Dn2Q1c"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <Provider store={store}>
      <UserContext>
        <App />
      </UserContext>
    </Provider>
  </Auth0Provider>
)

