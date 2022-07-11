/*node-modules*/
import React from 'react';
import styled from 'styled-components';

/*icons*/
import {ReactComponent as SuccessIcon} from '../../assets/icons/success.svg';
import {ReactComponent as FailedIcon} from '../../assets/icons/failed.svg';

const UploadResultLabelElement = styled.div`
  width: 100%;
  height: 60px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 24px;
  color: #8C8C8C;
  
  svg {
    margin-right: 10px;
  }
`

type UploadResultLabelProps = {
    status: "success" | "failed"
}

export const UploadResultLabel = ({status}: UploadResultLabelProps) => {
    return (
        <UploadResultLabelElement>
            {
                status === "success"
                    ? <><SuccessIcon/> Thanks for the Upload - Cat found!</>
                    : <><FailedIcon/> No Cat found - try a different one</>
            }
        </UploadResultLabelElement>
    );
};