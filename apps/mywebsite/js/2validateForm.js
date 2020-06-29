/******************************************
 * EXAMPLE 2
 * prevent default
 *****************************************/
function validateForm(e) {
  console.log(event);
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let text = document.getElementById("text").value;

  alert(
    `שלום ${name},
    הודעתך התקבל ומייל ישלח אליך לכתובת
    ${email}
    `
  );

  return false;
}
