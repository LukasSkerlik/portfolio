import React from "react";


function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <p>Copyright ⓒ {year} Lukas Skerlik</p>
    </footer>
  );
}

export default Footer;
