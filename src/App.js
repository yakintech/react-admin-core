import React, { useContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import "./assests/i18n";
import { changeLanguage } from "i18next";
import {
  getLanguageStorage,
  setLanguageStorage,
} from "./utils/storage/languageHelper";
import LoginPage from "./pages/public/LoginPage";
import { AuthContext } from "./context/AuthContext";
import { Button } from "@mui/material";

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

  const { user, setUser } = useContext(AuthContext);
  const logOut = () => {
    setUser(false);
  };
  return (
    <>
      {user ? (
        <QueryClientProvider client={queryClient}>
          <h1>{currentLanguage}</h1>
          <div>
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/categories">Categories</Link>
              </li>
              <li>
                <Link to="/admin/orders">Orders</Link>
              </li>
            </ul>

            <div>
              <button onClick={changeEnglish}>English</button>
              <button onClick={changeTurkish}>Türkçe</button>
              <button onClick={changeAzerbaijani}>Azerice</button>
            </div>
            <Button onClick={logOut}>Log Out</Button>
          </div>
          <Routes>
            {routes &&
              routes.map((item) => {
                return <Route path={item.path} element={item.element} />;
              })}
          </Routes>
        </QueryClientProvider>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default App;
