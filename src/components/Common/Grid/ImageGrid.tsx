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
`