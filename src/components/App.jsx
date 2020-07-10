import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div>
    <main>
          <Header />
            <About />
            <Projects />
            <Contact />
          <Footer />
      </main>
    </div>
  );
}

export default App;
