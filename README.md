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
<img width="1440" alt="스크린샷 2024-02-07 오후 4 02 41" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/8c243fd6-e15a-4c7e-809b-975444e4bf45">

- If you click the `Login` button, you can login to this website.
- If you click the `Get Started` button, you can start to upload your invoice.
- If you click the `Contact us` button, You can just check the information of us.

### 1. Login
<img width="1440" alt="스크린샷 2024-02-07 오전 10 56 35" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/9791f36c-378e-476d-81e4-7926d80d31af">  

- You can login this page **using the account of erpnext**.
- Just enter your email and password.

### 2. Upload invoice
<img width="1440" alt="스크린샷 2024-02-07 오후 3 58 28" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/5ef03268-cb74-4f12-a41d-22447023d324">
<img width="1440" alt="스크린샷 2024-02-07 오후 3 58 42" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/071b2900-70cc-471d-9d80-661ce6986c7e">
<img width="1440" alt="스크린샷 2024-02-07 오후 3 58 53" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/2576b0cc-8a0f-4228-93db-4155f4cf4e1f">

- You can upload your invoice just **drag and drop** the image file. (Please upload one image at a time)
- If you want to switch to another file, just click the `Reset` button.
- Click the `Get information` button to start scanning the invoice through the OCR.
- When it's done, you'll automatically go to the next page. (You may have to wait a little bit.)

### 3. Check and Save invoice information

<img width="1440" alt="스크린샷 2024-02-07 오후 2 25 09" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/98d5e3ac-f25d-414e-a9ef-243921a31ec7">
<img width="1440" alt="스크린샷 2024-02-07 오후 2 25 22" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/ca9cb28e-bb84-4a2c-95db-de06db901410">
<img width="1440" alt="스크린샷 2024-02-07 오후 2 25 43" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/b21a0b02-4570-478c-a9ed-18bceafa0cc8">
<img width="1440" alt="스크린샷 2024-02-07 오후 2 25 51" src="https://github.com/PeopleSpace-Invoice-OCR/Invoice-FE/assets/87434861/7dc0ac23-f34f-4b2f-9bb0-98ccc9a69422">

- You can check the OCR scan results and correct the incorrect values.
- Click the `Save invoice` button to save the final value to the database of the erpnext.

## Code Description - BackEnd
[BackEnd README](https://github.com/PeopleSpace-Invoice-OCR/Invoice-BE/blob/main/README.md)
