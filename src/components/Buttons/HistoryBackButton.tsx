/*node-modules*/
import React from 'react';
import {useNavigate} from 'react-router-dom';

/*components*/
import {IconButton} from './IconButton';

/*icons*/
import {ReactComponent as BackArrow} from '../../assets/icons/back-arrow.svg';

export const HistoryBackButton = () => {
    const navigate = useNavigate();
    const historyBack = () => navigate(-1);

    return (
        <IconButton variant="primary" onClick={historyBack}>
            <BackArrow/>
        </IconButton>
    );
};
