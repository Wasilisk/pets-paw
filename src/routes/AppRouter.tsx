/*node-modules*/
import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

/*components*/
import HomeBanner from '../components/HomeBanner';
import VotingPage from '../pages/Voting';

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomeBanner />} />
            <Route path="voting" element={<VotingPage/>}/>
            <Route path="breeds" element={<VotingPage/>}/>
            <Route path="gallery" element={<h4>Gallery</h4>}/>
            <Route path="likes" element={<h4>likes</h4>}/>
            <Route path="favourites" element={<h4>favourites</h4>}/>
            <Route path="dislikes" element={<h4>dislikes</h4>}/>
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;