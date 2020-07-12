import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div class="site">

          <Header />
            <main>
              <About />
              <Projects />
              <Contact />
            </main>
          <Footer />

    </div>
  );
}

export default App;
