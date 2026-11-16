function adoptMe() {
  window.alert("Bruno! Thank you for adopting");
}

function meetPet(name) {
  window.alert("Hi, I'm " + name + "! Visit the How to Adopt page to take me home.");
}

function submitContact(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  window.alert("Thank you, " + name + "! We have received your message.");
  event.target.reset();
}
