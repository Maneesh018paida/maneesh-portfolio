// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

0
// Typing animation
document.addEventListener('DOMContentLoaded', function() {
  const typingText = document.getElementById('typing-text');
  const texts = [
    'A Data Analyst',
    'A Master\'s graduate in Information Systems',
    'A strategic thinker',
    'A problem solver',
    'A data storyteller',
    'Excited about new opportunities'
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
  }

  if (typingText) {
    typeText();
  }

  // Read More functionality for experience cards
  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  readMoreButtons.forEach(button => {
    const card = button.closest('.timeline-card');
    const moreContent = card.querySelectorAll('.more-content');
    moreContent.forEach(item => {
      item.style.display = 'none';
    });
  });

  // Skills tabs functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const skillGrids = document.querySelectorAll('.skills-grid');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and grids
      tabButtons.forEach(btn => btn.classList.remove('active'));
      skillGrids.forEach(grid => grid.classList.remove('active'));
      
      // Add active class to clicked button and corresponding grid
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
});

// Toggle read more functionality
function toggleReadMore(button) {
  const card = button.closest('.timeline-card');
  const moreContent = card.querySelectorAll('.more-content');
  const isExpanded = button.textContent === 'Read Less';
  
  moreContent.forEach(item => {
    item.style.display = isExpanded ? 'none' : 'flex';
  });
  
  button.textContent = isExpanded ? 'Read More' : 'Read Less';
}
