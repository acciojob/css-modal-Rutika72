const modal = document.querySelector('.modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

// Open modal when button clicked
openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal when close button clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside modal-content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
