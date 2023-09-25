import React from "react";
import Sidenav from "@/layout/Sidenav/Sidenav";
import Header from "@/layout/Header/Header";
import Resume from "@/pages/Resume/Resume";
import { DataContextProvider } from "@/context/DataContext";
import Sales from "@/pages/Sales/Sales";
import { Routes, Route } from "react-router-dom";
import Sale from "@/pages/Sale/Sale";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/vendas" element={<Sales />} />
            <Route path="/vendas/:id" element={<Sale />} />
          </Routes>
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
