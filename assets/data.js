const form = document.querySelector("#hero-form");
const submitButton = document.querySelector("#submit");

function submitForm() {
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Create an object with the form data
  const formData = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  // Send form data to server
  fetch("assets/submit_data.php", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle successful form submission
      //console.log("Form submitted successfully:", data);
      window.location.replace("thanks.html");
    })
    .catch((error) => {
      // Handle errors
      //console.error(`There was a problem with the form submission: ${error}`);
      alert(`There was a problem with the form submission: ${error}`);
    });
}

form.addEventListener("submit", (event) => {
  submitForm();
  event.preventDefault();
  form.reset();
});
