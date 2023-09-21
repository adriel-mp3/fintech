import React from "react";
import Sidenav from "./layout/Sidenav";
import Header from "./layout/Header";
import Resume from "./pages/Resume";
import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resume />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
