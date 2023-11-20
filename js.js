
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destination = document.getElementById('destination').value;

  if (name === '' || email === '' || destination === '') {
    event.preventDefault();
    alert('Please fill in all fields.');
  }
});

function scrollToContact() {
  const contactSection = document.getElementById('call-to-action');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

