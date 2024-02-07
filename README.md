# Invoice-FE
## 🎯 Project Objective
Our project objective is to automate the extraction of crucial information from invoices using a combination of Optical Character Recognition (OCR) and Machine Learning (ML) techniques.  

This repository is a website where the functionality of the project is made available to the user.  
You can upload your invoices and get the result and save it to the erpnext database.

## 👤 How to use it?
1. You have to install the docker and erpnext. Check [this link](https://github.com/frappe/frappe_docker/blob/main/docs/development.md).
2. Clone the Invoice-FE and Invoice-BE repository.
3. Run the docker and server, then run this website using `npm start`

## 🎨 Website Design
[Link to figma](https://www.figma.com/file/bE28fo5SKCcE5KHoJJyzpG/Invoice-OCR?type=design&node-id=0%3A1&mode=design&t=uhMoKgEI2WRcSlop-1)

## 🗺️ Page Description
### 0. Main Page
<img width="1440" alt="스크린샷 2024-02-07 오전 10 59 26" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/40dc0b7a-a41d-477d-9d8d-35bc08e4cc54">

- If you click the `Login` button, you can login to this website.
- If you click the `Get Started` button, you can start to upload your invoice.
- If you click the `Contact us` button, You can just check the information of us.

### 1. Login
<img width="1440" alt="스크린샷 2024-02-07 오전 10 56 35" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/9791f36c-378e-476d-81e4-7926d80d31af">  

- You can login this page using the account of erpnext.
- Just enter your email and password.

### 2. Upload invoice
<img width="1440" alt="스크린샷 2024-02-07 오전 11 06 52" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/cd125e07-e25c-41b1-a592-1d58c8591483">  
<img width="1440" alt="스크린샷 2024-02-07 오전 11 11 35" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/14b0ee70-4708-4df8-863f-2e6ea7e605b0">
<img width="1440" alt="스크린샷 2024-02-07 오전 11 08 40" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/6f81d4b2-bfd9-4ed2-accb-f73209374b45">


- You can upload your invoice just **drag and drop** the image file. (Please upload one image at a time)
- If you want to switch to another file, just click the `Reset` button.
- Click the `Get information` button to start scanning the invoice through the OCR.
- When it's done, you'll automatically go to the next page. (You may have to wait a little bit.)

### 3. Check and Save invoice information
<img width="1440" alt="스크린샷 2024-02-07 오전 11 26 19" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/9f794fe6-8440-4b21-ba9a-df6f73965ed8">

- You can check the OCR scan results and correct the incorrect values.
- Click the `Save invoice` button to save the final value to the database of the erpnext.

## Code Description - BackEnd
[BackEnd README](https://github.com/PeopleSpace-Invoice-OCR/Invoice-BE/blob/main/README.md)
