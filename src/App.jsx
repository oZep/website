/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import ParticleComponent from "./Components/Particle";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Demo";


import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "_ProductName_",
  title: "_CatchPhrase_",
  email: "jissa023@uottawa.ca",
  gitHub: "oZep",
  linkedIn: "joey-issa",
  youTube: "PrepWithZep",
};

const primaryColor = "#3e2b6b";
const secondaryColor = "#6749ad";

const App = () => {
  return (
    <div id="main">
      <Header />
      <ParticleComponent />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
