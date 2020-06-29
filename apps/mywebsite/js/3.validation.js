/******************************************
 * EXAMPLE 3
 * prevent default
 *****************************************/
function validateForm(e) {
  console.log(event);
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let text = document.getElementById("text").value;
  let error = document.getElementById("error");

  if (name === "" || name.length < 2) {
    error.innerText = "שם משתמש חייב להכיל לפחות 2 תווים";
  } else if (email === "") {
    error.innerText = "נא להכניס אימייל";
  } else {
    error.innerText = "";
    alert(
      `שלום ${name},
      הודעתך התקבל ומייל ישלח אליך לכתובת
      ${email}
      `
    );
  }
}
