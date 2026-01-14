const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.onclick = () => {
  modal.style.display = "flex"; // must match your CSS flex alignment
}

// Close modal when clicking the close button
closeBtn.onclick = () => {
  modal.style.display = "none";
}

// Close modal when clicking outside the modal-content
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
