import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthRoute from "../components/AuthRoute.jsx";
import { UserContextProvider } from "../context/usercontext.jsx";
import Home from "../pages/Home/Home.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import TTT from "../pages/TTT/TTT.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/TTT"
              element={
                <AuthRoute>
                  <TTT />
                </AuthRoute>
              }
            />
            <Route path="/TTT" element={<TTT />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
