function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thanks ${name}, your message has been received!`);
  }