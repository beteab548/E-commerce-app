"use server";
let URl = "http://localhost:3000/api/";
let formPage = "login";
export async function handleFormBtn(btnText, formdata) {
  let method = "POST";
  const updatedBtnText = btnText.toLowerCase();
  formPage = updatedBtnText;
  let formdatas;
  if (updatedBtnText === "password-resetting") {
    formdatas = { password: formdata.get("password") };
    method = "PATCH";
    formPage = "reset-password";
  }
  formdatas = {
    email: formdata.get("email"),
    password: formdata.get("password"),
  };
  const response = await fetch(`${URl}${formPage}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formdatas),
  });
  console.log(`${URl}${formPage}`);
  const resData = await response.json();
  console.log(resData);
}
