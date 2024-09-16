
(() => {
    'use strict';
  
    
    const forms = document.querySelectorAll('.needs-validation');
  
   
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        
        const firstName = document.getElementById('firstName');
        if (!firstName.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          firstName.classList.remove('is-invalid');
          firstName.classList.add('is-valid');
        }
        
        const lastName = document.getElementById('lastName');
        if (!lastName.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          lastName.classList.remove('is-invalid');
          lastName.classList.add('is-valid');
        }
     
        const email = document.getElementById('email');
        if (!email.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          email.classList.remove('is-invalid');
          email.classList.add('is-valid');
        }

        const comment = document.getElementById('comment');
        if (!comment.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          comment.classList.remove('is-invalid');
          comment.classList.add('is-valid');
        }

        form.classList.add('was-validated');
      }, false);
    });
  })();
  
  
  