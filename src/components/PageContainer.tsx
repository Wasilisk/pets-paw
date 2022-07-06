import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: calc(100% - 70px);
  height: auto;
  margin-top: 10px;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 20px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`