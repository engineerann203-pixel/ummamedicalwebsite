document.addEventListener('DOMContentLoaded', () => {
  const apptForm = document.getElementById('appointment-form');
  if(apptForm){
    apptForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('fullname').value;
      const service = document.getElementById('service').value;
      document.getElementById('form-response').textContent = 
        Thanks ${name}, your request for ${service} has been received.;
      apptForm.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('cname').value;
      document.getElementById('contact-response').textContent = 
        Thanks ${name}, your message has been sent.;
      contactForm.reset();
    });
  }
});