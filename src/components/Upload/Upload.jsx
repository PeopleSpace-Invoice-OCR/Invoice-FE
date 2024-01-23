import React, { useRef, useState } from "react";
import { styled } from "styled-components";

export const MainBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Contents = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 80vh;
  margin: 10vh 0;
  padding: 10vh 0;
  position: fixed;
`;

export const Title = styled.div`
  font-color: var(--font-black);
  color: black;
  font-size: 40px;
  font-family: p-bold;
  font-weight: 500;
  line-height: 20px;
  position: absolute;
`;

export const UploadBox = styled.div`
  margin: 90px 0 20px 0;
  width: 60vh;
  height: 40vh;
  background: rgba(91, 134, 229, 0.03);
  border-radius: 24px;
  border: 2px #5b86e5 dotted;
  position: relative;
`;

export const CloudImg = styled.img`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85px;
  height: 90px;
`;

export const FileName = styled.div`
  margin-top: 10px;
  font-family: p-reg;
`;

export const UploadText1 = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  color: #5b86e5;
  font-size: 32px;
  font-family: p-reg;
`;

export const UploadText2 = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);

  color: rgba(91, 134, 229, 0.9);
  font-size: 17px;
  font-family: p-reg;
`;

export const UploadText3 = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(91, 134, 229, 0.3);
  font-size: 13px;
  font-family: p-reg;
`;

export const ResetBtn = styled.button`
  width: 15vh;
  height: 7vh;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: white;
  border-radius: 8px;
  border: 2px #5b86e5 solid;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
  font-size: 16px;
  font-family: p-reg;
  cursor: pointer;
`;

export const UploadBtn = styled.button`
  width: 42vh;
  height: 7vh;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 3vh;
  background: #5b86e5;
  border-radius: 8px;
  border: 0px #5b86e5;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
  font-size: 16px;
  font-family: p-reg;
  cursor: pointer;
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Upload = () => {
  const fileInputRef = useRef(null);
  const [uploadedFileName, setUploadedFileName] = useState([]);
  const [uploadedImage, setUploadedImage] = useState([]);

  const handleUploadBoxClick = () => {
    fileInputRef.current.click();
    fileUpload(fileInputRef.current.files);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    fileUpload(files);
  };

  const fileUpload = (files) => {
    if (files.length > 0) {
      const file = files[0];
      setUploadedFileName(file.name);

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setUploadedImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const resetImg = () => {
    setUploadedFileName([]);
    setUploadedImage([]);
  };

  return (
    <MainBox>
      <Contents>
        <Title>Upload your Invoices</Title>
        <UploadBox
          onClick={handleUploadBoxClick}
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {uploadedFileName.length > 0 ? (
            <FileName>{uploadedFileName}</FileName>
          ) : (
            <div>
              <CloudImg src="./images/uploadCloud.png" alt="img" />
              <UploadText1>Drag & Drop</UploadText1>
              <UploadText2>or select files from device</UploadText2>
              <UploadText3>max. 50MB</UploadText3>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>
          )}
        </UploadBox>
        <ResetBtn onClick={resetImg}>Reset</ResetBtn>
        <UploadBtn>Get Information</UploadBtn>
      </Contents>
    </MainBox>
  );
};

export default Upload;
