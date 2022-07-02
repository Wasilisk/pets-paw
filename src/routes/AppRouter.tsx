import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomeBanner from "../components/HomeBanner";

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomeBanner />} />
            <Route path="voting" element={<h4>Voting</h4>}/>
            <Route path="breeds" element={<h4>Breeds</h4>}/>
            <Route path="gallery" element={<h4>Gallery</h4>}/>
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;