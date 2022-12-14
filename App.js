import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";
import '@splidejs/react-splide/css';

// Fotorama
// import $ from 'jquery/dist/jquery.js';

// import 'fotorama/fotorama.js'
// import 'fotorama/fotorama.css'

// react-toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.scss";

import * as icons from "./Components/MyIcons";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

import { BrowserRouter as Router } from "react-router-dom";

import Pages from "./Pages";

// Variables
// import * as vars from "./Helpers/Vars";
import { AppTitle, AppVersion } from "./Helpers/Vars";

function App() {
const $ =  require( "jquery" );
  // console.log(vars.AppTitle)
  // console.log(vars.AppVersion)
  return (
    <Provider store={store}>
      <Router>
        <Login />
        <Header siteTitle={AppTitle} payNow={icons.payNow} />

        <Pages />

        <Footer
          version={AppVersion}
          paymentIcon={icons.okIcon}
          readMore={icons.readIcon}
        />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
