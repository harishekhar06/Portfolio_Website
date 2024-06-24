function sendMail(event) {
  event.preventDefault();
  let params = {
      name: document.getElementById("f_name").value,
      email: document.getElementById("email_id").value,
      message: document.getElementById("message").value
  };
  emailjs.send("service_x35aze3", "template_aosrt2a", params)
      .then(function(response) {
          alert("Mail sent successfully! Status: " + response.status);
      }, function(error) {
          alert("Failed to send mail. Error: " + JSON.stringify(error));
      });
}