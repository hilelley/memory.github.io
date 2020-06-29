/******************************************
 * EXAMPLE 3
 * prevent default
 *****************************************/

window.onload = function () {
  document
    .getElementById("button-blue")
    .addEventListener("click", validateForm);

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
  }
};
