/*node-modules*/
import React, {useEffect} from 'react';

/*store*/
import {getVotingImage, selectVotingImage, setImageLoaded} from '../store/slices/voting-slice';

/*hooks*/
import {useAppSelector, useAppDispatch} from '../hooks';

/*components*/
import {ImageSkeleton} from '../components/Skeletons/';
import {ActionLogsSection, PageSection, VotingSection} from '../components/Sections/';
import {PageNavigation} from '../components/Common';
import {VotingButtonGroup} from '../components/Buttons/ButtonsGroups';

const VotingPage = () => {
    const dispatch = useAppDispatch();
    const {isLoading, votingImage} = useAppSelector(selectVotingImage);

    useEffect(() => {
        dispatch(getVotingImage());
    }, [])


    const onLoadHandler = () => dispatch(setImageLoaded());

    return (
        <PageSection>
            <PageNavigation/>
            <VotingSection isLoading={isLoading}>
                <ImageSkeleton height="360px"/>
                {votingImage && <img src={votingImage.url} onLoad={onLoadHandler} alt="Cat"/>}
                <VotingButtonGroup imageId={votingImage && votingImage!.id}/>
            </VotingSection>
            <ActionLogsSection/>
        </PageSection>
    );
};

export default VotingPage;