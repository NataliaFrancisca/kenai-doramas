import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { MenuStyled } from "./components/Menu/MenuStyled";
import { GlobalStyles } from "./styles/GlobalStyles";
import { PageStyled } from "./styles/PageStyled";

import { FooterStyled } from "./components/Footer/FooterStyled"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <PageStyled>
        <MenuStyled />
        <Header />
      </PageStyled>
     
      <FooterStyled />
    </div>
  );
}

export default App;
