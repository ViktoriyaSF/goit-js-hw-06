const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.peaventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(event.currentTarget);
  if (email.value === "" || password.value === "") {
    return alert("Попредження! Всі поля повинні бути заповненні");
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log("value:", value);
      console.log("name:", name);
    });
  }
}
