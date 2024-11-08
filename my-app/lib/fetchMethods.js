"use server";
export async function handleFormBtn(btnText, formdata) {
    const formdatas = {
      email: formdata.get("email"),
      password: formdata.get("password"),
    };
    const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdatas),
      });
    const resData = await response.json();
    console.log(resData);
}
