import React from "react";

import {Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";
import { UsersHomePage } from "./pages/UsersHomePage/style";
import { UserHomePage } from "./pages/UserHomePage/style";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<UsersHomePage />} />
        <Route path="/browse" element={<UserHomePage />} />
      </Routes>
    </div>
  );
}

export default App;
