/*node-modules*/
import React, {useEffect} from 'react';

/*store*/
import {getVotingImage, selectVotingImage, setImageLoaded} from '../store/slices/voting-slice';

/*hooks*/
import {useAppSelector} from '../hooks/useAppSelector';
import {useAppDispatch} from '../hooks/AppDispatch';

/*components*/
import VotingButtonGroup from '../components/VotingButtonGroup';
import {ImageSkeleton} from '../components/Skeletons/';
import {ActionLogsSection, VotingSection} from '../components/Sections/';
import PageNavigation from "../components/PageNavigation";
import {PageContainer} from "../components/PageContainer";

const VotingPage = () => {
    const dispatch = useAppDispatch();
    const {isLoading, votingImage} = useAppSelector(selectVotingImage);

    useEffect(() => {
        dispatch(getVotingImage());
    }, [])


    const onLoadHandler = () => dispatch(setImageLoaded());

    return (
        <PageContainer>
            <PageNavigation/>
            <VotingSection isLoading={isLoading}>
                <ImageSkeleton height="360px"/>
                {votingImage && <img src={votingImage.url} onLoad={onLoadHandler} alt="Cat"/>}
                <VotingButtonGroup imageId={votingImage && votingImage!.id}/>
            </VotingSection>
            <ActionLogsSection/>
        </PageContainer>
    );
};

export default VotingPage;