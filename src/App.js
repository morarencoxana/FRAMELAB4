import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateTaskRoute from "./routes/CreateTaskRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-task" element={<CreateTaskRoute />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
