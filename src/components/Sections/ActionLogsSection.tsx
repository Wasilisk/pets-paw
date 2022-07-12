/*node-modules*/
import React, {useEffect} from 'react';
import styled from 'styled-components';

/*store*/
import {selectActionLogs} from '../../store/slices/logs-slice';

/*hooks*/
import {useAppSelector} from '../../hooks';

/*components*/
import {ActionLog} from '../Common';

export const ActionLogsContainer = styled.div`
  max-height: 280px;
  display: flex;
  margin-top: auto;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 425px) {
    margin-top: 30px;
    max-height: 380px;
  }
`;

export const ActionLogsSection = () => {
    const actionLogs = useAppSelector(selectActionLogs);
    const actionsRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        actionsRef.current!.scrollTo(0, 0);
    }, [actionLogs])

    return (
        <ActionLogsContainer ref={actionsRef}>
            {
                actionLogs.map((action) => <ActionLog key={action.id} actionInfo={action}/>)
            }
        </ActionLogsContainer>
    );
};