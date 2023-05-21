import { createContext, useState } from "react";

export const HeaderTitleContext = createContext();

export const HeaderTitleProvider = ({ children }) => {
    const [title, setTitle] = useState("dashboard");

    const changeTitle = (newTitle) => {
        setTitle(newTitle);
    };
    const contextValue = {
        title,
        changeTitle,
      };
    return (
        <HeaderTitleContext.Provider value={contextValue}>
            {children}
        </HeaderTitleContext.Provider>
    );
};
