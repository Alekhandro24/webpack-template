import React from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import About from './About/About';
import Experience from './Experience/Experience';
import Suggestion from './Suggestion/Suggestion';
import Portfolio from './Portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Suggestion />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
