import React from "react";
import Sidenav from "./layout/Sidenav";
import Header from "./layout/Header";
import Resume from "./pages/Resume";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Resume />
      </main>
    </div>
  );
}

export default App;
