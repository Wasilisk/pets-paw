import styled from 'styled-components';

export const PageSection = styled.div`
  width: 100%;
  margin-top: 10px;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (max-width: 375px) {
    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`