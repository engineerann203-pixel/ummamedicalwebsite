document.addEventListener('DOMContentLoaded', function(){
  // Nav toggle for small screens
  var navToggle = document.getElementById('nav-toggle');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      var links = document.querySelectorAll('.nav-right a');
      for(var i=0;i<links.length;i++){
        links[i].style.display = links[i].style.display === 'inline-block' ? 'none' : 'inline-block';
      }
    });
  }

  // Home appointment form
  var homeAppt = document.getElementById('home-appt');
  if(homeAppt){
    homeAppt.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('h_name').value.trim();
      var phone = document.getElementById('h_phone').value.trim();
      var service = document.getElementById('h_service').value;
      var out = document.getElementById('home-appt-res');
      if(!name || !phone || !service){
        out.textContent = 'Please provide name, phone and select a service.';
        out.style.color = 'crimson';
        return;
      }
      out.textContent = 'Thanks ' + name + '. Your request has been received. We will contact you to confirm.';
      out.style.color = 'green';
      homeAppt.reset();
    });
  }

  // Contact form
  var contact = document.getElementById('contact-form');
  if(contact){
    contact.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('cname').value.trim();
      var email = document.getElementById('cemail').value.trim();
      var msg = document.getElementById('cmessage').value.trim();
      var out = document.getElementById('contact-res');
      if(!name || !email || !msg){
        out.textContent = 'Please complete all required fields.';
        out.style.color = 'crimson';
        return;
      }
      out.textContent = 'Thanks ' + name + ', your message has been sent.';
      out.style.color = 'green';
      contact.reset();
    });
  }
});