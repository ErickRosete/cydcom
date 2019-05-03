import React from 'react'
import MainNavigation from "./MainNavigation/MainNavigation";
// import Chatbot from "../../containers/Chatbot/Chatbot"
import Footer from "./Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Layout.css";

const whatsUrl = "https://wa.me/15551234567?text=Iam%20interested%20"
// const whatsUrlButton=`javascript:window.open('${whatsUrl}', 'yourWindowName', 'width=700,height=600,top=200, left=460');`
const displayWhats = () => {
  window.open(whatsUrl, 'yourWindowName', 'width=700,height=600,top=200, left=460')
}

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation navbarColor={props.navbarColor} />
      <main className="main-content">{props.children}</main>
      {/* <Chatbot></Chatbot> */}
      <button className="contactWhats" onClick={displayWhats}>
        <FontAwesomeIcon icon={['fab', 'whatsapp']} size={window.innerWidth > 600 ? "3x" : "2x"} />
      </button>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Layout;
