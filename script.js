function changeText() {
  document.getElementById("main-heading").textContent = "Text Changed via JavaScript!";
}

function changeStyle() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "salmon";
  box.style.borderRadius = "10px";
}

function toggleElement() {
  const section = document.getElementById("message-section");
  const existing = document.getElementById("dynamic-msg");

  if (existing) {
    existing.remove();
  } else {
    const newElement = document.createElement("p");
    newElement.id = "dynamic-msg";
    newElement.textContent = "This element was added dynamically!";
    newElement.style.color = "green";
    section.appendChild(newElement);
  }
}
