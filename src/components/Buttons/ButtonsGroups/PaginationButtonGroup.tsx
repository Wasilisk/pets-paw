/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*components*/
import {PaginationButton} from '../PaginationButton';

/*icons*/
import {ReactComponent as LeftArrow} from '../../../assets/icons/left-arrow.svg';
import {ReactComponent as RightArrow} from '../../../assets/icons/right-arrow.svg';

const PaginationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${PaginationButton}:first-child {
    margin-right: 40px;
  }

  @media (max-width: 375px) {
    ${PaginationButton}:first-child {
      margin-right: 10px;
    }
  }
`
type PaginationButtonGroupPros = {
    page: number
    setPage: (page: number) => void,
    isNextPageDisable: boolean
}

export const PaginationButtonGroup = ({page, setPage, isNextPageDisable}: PaginationButtonGroupPros) => {
    const nextPage = () => setPage(page + 1);
    const previousPage = () => setPage(page - 1);

    const isPreviousButtonDisable = page === 1

    return (
        <PaginationButtonContainer>
            <PaginationButton onClick={previousPage} disabled={isPreviousButtonDisable}>
                <LeftArrow/> Prev
            </PaginationButton>
            <PaginationButton onClick={nextPage} disabled={isNextPageDisable}>
                Next <RightArrow/>
            </PaginationButton>
        </PaginationButtonContainer>
    );
};