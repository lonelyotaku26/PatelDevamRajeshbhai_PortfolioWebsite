// Mobile nav toggle and contact form handler
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  const yearEl = document.getElementById('year');

  // Insert current year
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  navToggle && navToggle.addEventListener('click', function(){
    nav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav
        nav.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  });

  // Contact form: use mailto fallback for demo purposes
  const form = document.getElementById('contact-form');
  const formNote = document.getElementById('form-note');

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = encodeURIComponent(form.name.value.trim());
      const email = encodeURIComponent(form.email.value.trim());
      const message = encodeURIComponent(form.message.value.trim());

      if(!name || !email || !message){
        formNote.textContent = 'Please fill all fields before sending.';
        return;
      }

      // Build mailto link
      const subject = encodeURIComponent(`Portfolio message from ${form.name.value.trim()}`);
      const body = encodeURIComponent(`Name: ${form.name.value.trim()}\nEmail: ${form.email.value.trim()}\n\nMessage:\n${form.message.value.trim()}`);
      const mailto = `mailto:devampatel684@gmail.com?subject=${subject}&body=${body}`;

      // Try to open mail client
      window.location.href = mailto;

      // Give user feedback
      formNote.textContent = 'Your email client should open. If it didn\'t, copy/paste your message to an email to devampatel684@gmail.com';
      form.reset();
    });
  }
});