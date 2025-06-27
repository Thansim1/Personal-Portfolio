function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thanks ${name}, your message has been received!`);
}

// Fix nav auto-scroll bug on Android
function scrollNavToStart() {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.scrollLeft = 0;
  }
}
window.addEventListener('load', scrollNavToStart);
window.addEventListener('resize', scrollNavToStart);
