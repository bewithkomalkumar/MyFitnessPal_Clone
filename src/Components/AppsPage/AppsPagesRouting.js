import React from 'react';
import { Routes, Route } from "react-router-dom";
import Apps from "./Apps";


const AppsPagesRouting = () => {
    return (
        <div>
            <Routes>
                <Route path='/apps/page/:id' element={<Apps />} />
            </Routes>
        </div>
    );
}

export default AppsPagesRouting;
