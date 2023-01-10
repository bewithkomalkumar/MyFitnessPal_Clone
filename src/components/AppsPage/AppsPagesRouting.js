import React from 'react';
import { Routes, Route } from "react-router-dom";
import Apps from "./Apps";
import AppsDetail from './AppsDetail';


const AppsPagesRouting = () => {
    return (
        <div>
            <Routes>
                <Route path='/apps/page/:id' element={<Apps />} />
                <Route path='/apps/:id' element={<AppsDetail />} />
            </Routes>
        </div>
    );
}

export default AppsPagesRouting;
