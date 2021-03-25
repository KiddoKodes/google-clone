import React from "react";
import {Link} from "react-router-dom"
function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
        />
      </Link>
    </div>
  );
}

export default Logo;
