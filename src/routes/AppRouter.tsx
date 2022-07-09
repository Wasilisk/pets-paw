/*node-modules*/
import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

/*components*/
import VotingPage from '../pages/Voting';
import Breeds from "../pages/Breeds";
import BreedInfo from '../pages/BreedInfo';
import BreedSearch from "../pages/BreedSearch";
import HomeBanner from "../components/HomeBanner";
import Likes from "../pages/Likes";
import Dislikes from "../pages/Dislikes";
import Favourites from "../pages/Favourites";
import Gallery from "../pages/Gallery";

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomeBanner />} />
            <Route path="voting" element={<VotingPage/>}/>
            <Route path="breeds" element={<Breeds/>}/>
            <Route path="breeds/:breedId" element={<BreedInfo/>}/>
            <Route path="search" element={<BreedSearch/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="likes" element={<Likes/>}/>
            <Route path="favourites" element={<Favourites/>}/>
            <Route path="dislikes" element={<Dislikes/>}/>
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;