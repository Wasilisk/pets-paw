/*node-modules*/
import React, {useState} from 'react';
import styled from 'styled-components';

/*components*/
import {IconButton, UploadButton} from '../Buttons';
import {UploadResultLabel} from '../Labels';
import {ImageUpload} from '../Common/ImageUpload';

/*hooks*/
import {useAppDispatch, useAppSelector} from '../../hooks';

/*store*/
import {selectIsUploading, selectUploadingStatus, uploadImage} from '../../store/slices/upload-slice';

/*icons*/
import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';

const UploadImageContainer = styled.div`
  width: 680px;
  height: 840px;
  background: #F8F8F7;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button:first-child {
    margin-left: auto;
  }

  .popup-title {
    font-weight: 500;
    font-size: 36px;
    line-height: 52px;
    color: #1D1D1D;
    margin: 40px 0 10px 0;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    color: #8C8C8C;
    text-align: center;
    margin-bottom: 20px;

    a {
      color: #FF868E;
      text-decoration: none;
    }
  }
`

type UploadImageSectionProps = {
    onClose: () => void;
}

export const UploadImageSection = ({onClose}: UploadImageSectionProps) => {
    const dispatch = useAppDispatch();
    const isUploading = useAppSelector(selectIsUploading);
    const uploadingStatus = useAppSelector(selectUploadingStatus);

    const [uploadFile, setUploadFile] = useState<File | null>(null);

    const uploadImageHandler = () => {
        if (uploadFile) {
            const formData = new FormData();

            formData.append("file", uploadFile);
            formData.append("sub_id", localStorage.getItem("sub_id")!);
            dispatch(uploadImage(formData))
        }
    }

    return (
        <UploadImageContainer>
            <IconButton variant="primary" onClick={onClose}>
                <CloseIcon/>
            </IconButton>
            <h2 className="popup-title">Upload a .jpg or .png Cat Image</h2>
            <p>
                Any uploads must comply with the
                <a href="https://thecatapi.com/privacy"> upload guidelines </a>
                or face deletion.
            </p>
            <ImageUpload
                uploadFile={uploadFile}
                setUploadFile={setUploadFile}
            />
            <p>
                {
                    uploadFile
                        ? "Image File Name: " + uploadFile.name
                        : "No file selected"
                }
            </p>
            {
                uploadFile && !uploadingStatus && <UploadButton isLoading={isUploading} onClick={uploadImageHandler}/>
            }
            {
                uploadingStatus && <UploadResultLabel status={uploadingStatus}/>
            }
        </UploadImageContainer>
    );
};
