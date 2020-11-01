import React from "react";
import Header from "../Header";
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div className="Layout">
      <Header/>
      <div className="MainArea">
      <main>
        {children}
        </main>
        <div className="SideArea"></div>
      </div>
    </div>
  );
};

export default Layout;
