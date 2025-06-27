function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thanks ${name}, your message has been received!`);
}

// Fix: Scroll nav to left on mobile to show 'About' first
window.addEventListener('load', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.scrollLeft = 0;
  }
});
