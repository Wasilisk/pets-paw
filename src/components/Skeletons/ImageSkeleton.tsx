/*node-modules*/
import styled, {keyframes} from 'styled-components';

const shineAnimation = keyframes`
  to {
    background-position-x: -200%;
  }
`;

type ImageSkeletonProps = {
    height?: string
}

export const ImageSkeleton = styled.div<ImageSkeletonProps>`
  height: ${({height}) => height ? height : "100%"};
  width: 100%;
  border-radius: 20px;
  background: #CCCCCC;
  background: linear-gradient(110deg, #ECECEC 8%, #F5F5F5F5 18%, #ECECEC 33%);
  background-size: 200% 700%;
  animation: 1.5s ${shineAnimation} linear infinite;
`
