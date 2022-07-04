/*node-modules*/
import styled, {keyframes} from 'styled-components';

const shineAnimation = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const ImageSkeleton = styled.div`
  height: 360px;
  width: 100%;
  border-radius: 20px;
  background: #CCCCCC;
  background: linear-gradient(110deg, #ECECEC 8%, #F5F5F5F5 18%, #ECECEC 33%);
  background-size: 200% 100%;
  animation: 1.5s ${shineAnimation} linear infinite;
`
