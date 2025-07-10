import React from "react";

const Header = (props) => {
  return (
    <div className="row">
      <div className="col p-5">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Header;
