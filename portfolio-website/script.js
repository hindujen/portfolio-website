document.getElementById("contactForm").addEventListener("submit", function(event) {

  event.preventDefault(); // stop refresh

  let inputs = this.querySelectorAll("input, textarea");
  let message = document.getElementById("message");

  let isEmpty = false;

  // Check empty fields
  inputs.forEach(function(input) {
    if (input.value.trim() === "") {
      isEmpty = true;
    }
  });

  if (isEmpty) {
    message.innerText = "Please fill all fields!";
    message.style.color = "red";
  } else {
    message.innerText = "Message sent successfully!";
    message.style.color = "green";
    this.reset();
  }

});