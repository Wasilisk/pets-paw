/*node-modules*/
import styled from 'styled-components';

/*components*/
import {ImageSkeleton} from '../Skeletons';

type VotingSectionProps = {
    isLoading: boolean
}

export const VotingSection = styled.div<VotingSectionProps>`
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    position: relative;
    display: ${({isLoading}) => isLoading ? "none" : "block"};
    margin-bottom: 52px;
  }
  
  ${ImageSkeleton} {
    display: ${({isLoading}) => isLoading ? "block" : "none"};
  }

  @media (max-width: 425px) {
    img {
      margin-bottom: 10px;
    }
  }
`