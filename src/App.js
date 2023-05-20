import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import "./assests/i18n";
import { changeLanguage } from "i18next";
import {
  getLanguageStorage,
  setLanguageStorage,
} from "./utils/storage/languageHelper";
import { useAuth } from "./context/AuthContext";
import { Button } from "@mui/material";
import LoginPage from "./pages/public/LoginPage";
const queryClient = new QueryClient();
function App() {
  const [currentLanguage, setcurrentLanguage] = useState(getLanguageStorage());

  const changeEnglish = () => {
    changeLanguage("en");
    setcurrentLanguage("en");
    setLanguageStorage("en");
  };

  const changeAzerbaijani = () => {
    changeLanguage("az");
    setcurrentLanguage("az");
    setLanguageStorage("az");
  };

  const changeTurkish = () => {
    changeLanguage("tr");
    setcurrentLanguage("tr");
    setLanguageStorage("tr");
  };

  const { user, setUser } = useAuth();
  const logout = () => {
    setUser(false);
  };
  return (
    <>
      {user ? (
        <QueryClientProvider client={queryClient}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              variant="contained"
              onClick={logout}
              style={{ alignSelf: "end" }}
            >
              Log Out
            </Button>
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              <li>
                <Button variant="text">
                  <Link to="/">Dashboard</Link>
                </Button>
              </li>
              <li>
                <Button variant="text">
                  <Link to="/admin/categories">Categories</Link>
                </Button>
              </li>
              <li>
                <Button variant="text">
                  <Link to="/admin/orders">Orders</Link>
                </Button>
              </li>
            </ul>

            <div>
              <button onClick={changeEnglish}>English</button>
              <button onClick={changeTurkish}>Türkçe</button>
              <button onClick={changeAzerbaijani}>Azerice</button>
            </div>
          </div>
          <Routes>
            {routes &&
              routes.map((item) => {
                return <Route path={item.path} element={item.element} />;
              })}
          </Routes>
        </QueryClientProvider>
      ) : (
        <>
          <LoginPage />
          <Navigate to="/login" />
        </>
      )}
    </>
  );
}

export default App;
