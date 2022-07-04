/*node-modules*/
import React, {useEffect} from 'react';
import styled from 'styled-components';

/*store*/
import {getVotingImage, selectVotingImage, setImageLoaded} from '../store/slices/voting-slice';

/*hooks*/
import {useAppSelector} from '../hooks/useAppSelector';
import {useAppDispatch} from '../hooks/AppDispatch';

/*icons*/
import {ReactComponent as BackArrow} from '../assets/icons/back-arrow.svg';

/*components*/
import {IconButton} from '../components/Buttons/IconButton';
import PathLabels from '../components/Common/PathLabels';
import VotingButtonGroup from '../components/VotingButtonGroup';
import {ImageSkeleton} from '../components/Skeletons/';
import {ActionLogsSection, VotingSection} from '../components/Sections/';

const PageContainer = styled.div`
  width: 100%;
  min-height: calc(100% - 70px);
  height: auto;
  margin-top: 10px;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  
  .section-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

const VotingPage = () => {
    const dispatch = useAppDispatch();
    const {isLoading, votingImage} = useAppSelector(selectVotingImage);

    useEffect(() => {
        dispatch(getVotingImage());
    }, [])


    const onLoadHandler = () => dispatch(setImageLoaded());

    return (
        <PageContainer>
            <div className="section-nav">
                <IconButton variant="primary">
                    <BackArrow/>
                </IconButton>
                <PathLabels/>
            </div>
            <VotingSection isLoading={isLoading}>
                <ImageSkeleton/>
                {votingImage && <img src={votingImage.url} onLoad={onLoadHandler} alt="Cat"/>}
                <VotingButtonGroup imageId={votingImage && votingImage!.id}/>
            </VotingSection>
            <ActionLogsSection/>
        </PageContainer>
    );
};

export default VotingPage;