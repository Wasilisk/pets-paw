/*node-modules*/
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

/*hooks*/
import {useAppDispatch, useAppSelector} from '../../hooks';

/*store*/
import {resetStatus, selectUploadingStatus} from '../../store/slices/upload-slice';

/*icons*/
import EmptyUploadIcon from '../../assets/icons/empty-upload.svg';

type ImageUploadContainerProps = {
    isError: boolean
}

const ImageUploadContainer = styled.div<ImageUploadContainerProps>`
  width: 100%;
  height: 320px;
  margin: 20px 0 20px 0;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${({isError}) => isError ? "#FBE0DC" : "#FFFFFF"};
  border: 2px dashed ${({isError}) => isError ? "#FF868E" : "#FBE0DC"};
  border-radius: 20px;
  background-image: url(${EmptyUploadIcon});
  background-position: center;
  background-repeat: no-repeat;

  .drag-file-element {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  input {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #8C8C8C;

    span {
      font-weight: 500;
      color: #1D1D1D;

      &:last-child {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    
  }

  @media (max-width: 375px) {
    height: 170px;
    padding: 10px 20px;
    
    p {
      width: 200px;
      margin: 0;
      text-align: center;
    }
  }
`

type ImageUploadProps = {
    uploadFile: File | null,
    setUploadFile: (arg: File | null) => void
}

export const ImageUpload = ({uploadFile, setUploadFile}: ImageUploadProps) => {
    const dispatch = useAppDispatch();
    const uploadingStatus = useAppSelector(selectUploadingStatus);

    const [uploadImageUrl, setUploadImageUrl] = useState<string | null>(null);
    const [dragActive, setDragActive] = React.useState(false);

    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (uploadingStatus === "success") {
            setUploadFile(null);
            setUploadImageUrl(null);
        }
    }, [uploadingStatus])

    useEffect(() => {
        if (uploadFile) {
            setUploadImageUrl(URL.createObjectURL(uploadFile!));
        }

        return () => {
            dispatch(resetStatus())
        }
    }, [uploadFile])


    const handleDrag = function (event: React.DragEvent<HTMLInputElement>) {
        event.preventDefault();
        event.stopPropagation();
        if (event.type === "dragenter" || event.type === "dragover") {
            setDragActive(true);
        } else if (event.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (event: React.DragEvent<HTMLInputElement>) {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
        if (event.dataTransfer.files) {
            const fileUploaded = event.dataTransfer.files[0];
            setUploadFile(fileUploaded);
        }
    };

    const handleClick = () => {
        hiddenFileInput.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const fileUploaded = event.target.files[0];
            setUploadFile(fileUploaded);
        }
    };

    return (
        <ImageUploadContainer
            onDragEnter={handleDrag}
            isError={uploadingStatus === "failed"}
        >
            <input type="file" ref={hiddenFileInput} onChange={handleChange}/>
            {
                uploadFile && uploadImageUrl
                    ? <img src={uploadImageUrl} alt={uploadFile.name}/>
                    : <p><span>Drag here</span> your file or <span onClick={handleClick}>Click here</span> to upload
                    </p>
            }
            {
                dragActive && <div className="drag-file-element"
                                   onDragEnter={handleDrag}
                                   onDragLeave={handleDrag}
                                   onDragOver={handleDrag}
                                   onDrop={handleDrop}
                />
            }
        </ImageUploadContainer>
    );
};