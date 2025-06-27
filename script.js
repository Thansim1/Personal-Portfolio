function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thanks ${name}, your message has been received!`);
}

// ✅ Fix: Force nav to start from left on load & resize (for Android)
function scrollNavToStart() {
  const nav = document.querySelector('nav');
  if (nav) nav.scrollLeft = 0;
}
window.addEventListener('load', scrollNavToStart);
window.addEventListener('resize', scrollNavToStart);
