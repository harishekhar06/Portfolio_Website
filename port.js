(function() {
  emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your EmailJS user ID
})();

$(document).ready(function() {
  $('#contact-form').on('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
          .then(function() {
              alert('Form submitted successfully');
              window.location.reload();
          }, function(error) {
              alert('Error: ' + JSON.stringify(error));
          });
  });
});

