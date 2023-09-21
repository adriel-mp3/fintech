import React from "react";
import Sidenav from "./layout/Sidenav";
import Header from "./layout/Header";
import Resume from "./pages/Resume/Resume";
import { DataContextProvider } from "./context/DataContext";
import Sales from "./pages/Sales/Sales";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resume />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
