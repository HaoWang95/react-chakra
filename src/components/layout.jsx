import React from "react";
import Header from "./header/header";

let Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
