import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const MenuRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </>
    );
};

export default MenuRoute;
