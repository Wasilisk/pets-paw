/*node-modules*/
import styled from 'styled-components';

/*components*/
import {ImageSkeleton} from '../Skeletons';

type VotingSectionProps = {
    isLoading: boolean
}

export const VotingSection = styled.div<VotingSectionProps>`
  margin-top: 20px;
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    position: relative;
    display: ${({isLoading}) => isLoading ? "none" : "block"};
  }
  
  ${ImageSkeleton} {
    display: ${({isLoading}) => isLoading ? "block" : "none"};
  }
`