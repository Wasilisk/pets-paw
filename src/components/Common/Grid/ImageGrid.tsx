import styled from 'styled-components';

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-auto-rows: 140px;
  column-gap: 20px;
  row-gap: 20px;
  flex-grow: 1;

  & > *:nth-child(10n + 1),
  & > *:nth-child(10n + 8) {
    grid-column: span 1;
    grid-row: span 2;
  }

  & > *:nth-child(10n + 4),
  & > *:nth-child(10n + 9) {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: 200px;
    column-gap: 10px;
    row-gap: 10px;

    & > *:nth-child(1n) {
      grid-row: span 1;
      grid-column: span 1;
    }

    & > *:nth-child(6n + 1),
    & > *:nth-child(6n + 5) {
      grid-row: span 2;
      grid-column: span 1;
    }
  }
  

  @media (max-width: 425px) {
    grid-template-columns: 100%;
    grid-auto-rows: 200px;

    & > *:nth-child(1n) {
      grid-column: span 1;
      grid-row: span 1;
    }

  }
`