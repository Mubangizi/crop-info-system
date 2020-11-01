import { Container } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <Container>
        <div className="MainArea">
          <main>{children}</main>
          <div className="SideArea"></div>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
