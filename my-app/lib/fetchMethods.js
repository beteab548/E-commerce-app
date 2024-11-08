"use server";
let URl = "http://localhost:3000/api/";
let formPage = "login";
export async function handleFormBtn(btnText, formdata) {
    console.log(btnText);
    const updatedBtnText=btnText.toLowerCase()
  formPage = updatedBtnText;
  const formdatas = {
    email: formdata.get("email"),
    password: formdata.get("password"),
  };
  const response = await fetch(`${URl}${formPage}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formdatas),
  });
  const resData = await response.json();
  console.log(resData);
}
