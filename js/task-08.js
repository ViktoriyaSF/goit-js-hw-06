const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Попередження! Всі поля повинні бути заповненні");
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });

    // або сформувати через FormData
    // const formData = new FormData(event.currentTarget);
    // console.log(formData);
  }

  event.currentTarget.reset();
}
