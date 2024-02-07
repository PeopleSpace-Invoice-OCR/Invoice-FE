import React, { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate, useLocation } from "react-router-dom";
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

  &:hover {
    cursor: pointer;
  }
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
  margin: 30px;
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
  padding: 10px 12px;
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
  padding: 10px 12px;
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
  color: #ffffff;
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Upload = () => {
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState([]);
  const navigate = useNavigate();

  // Dropzone Setting
  const onDrop = (acceptedFiles) => {
    setUploadedImage(acceptedFiles);
  };
  const resetImg = () => {
    setUploadedImage([]);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noKeyboard: true,
  });

  const location = useLocation();
  const name = location.state ? location.state.name : "";

  const onNextPage = () => {
    // navigate("/scan", { state: { image: uploadedImage, name: name } });

    if (uploadedImage.length > 0) {
      // Create FormData object
      const formData = new FormData();

      // Append the file to the FormData object
      formData.append("file", uploadedImage[0]);

      // Make a POST request to the /api/invoice endpoint
      fetch("http://127.0.0.1:8000/api/invoice", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Handle success response
            console.log(response.json());
          } else {
            // Handle error response
            throw new Error("File upload failed");
          }
        })
        .then((data) => {
          // Handle the JSON response from the server
          console.log(data);
          // Navigate to the "/scan" route with the uploaded image data
          navigate("/scan", { state: { image: uploadedImage, name: name } });
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("File upload failed");
        });
    } else {
      alert("Please upload the invoice file");
    }
  };

  return (
    <MainBox>
      <Contents>
        <Title>Upload your Invoices</Title>
        <UploadBox {...getRootProps()}>
          <input multiple="" type="file" {...getInputProps()} />
          {uploadedImage.length > 0 ? (
            <FileName>
              <ul>
                {uploadedImage.map((file, index) => (
                  <li key={index}>
                    <img src="/images/ic_wrapper.svg" alt="file" />
                    {file.name}
                  </li>
                ))}
              </ul>
            </FileName>
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
        <UploadBtn onClick={onNextPage}>Get Information</UploadBtn>
      </Contents>
    </MainBox>
  );
};

export default Upload;
