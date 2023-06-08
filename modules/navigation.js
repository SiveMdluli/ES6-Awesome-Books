import { DOMElements } from './dom-elements.js';

const domElements = new DOMElements();

export const navigateToSection = (sectionId) => {
  const sections = document.querySelectorAll('.content');
  const section = document.querySelector(`#${sectionId}`);
  sections.forEach((s) => {
    if (s !== section) {
      s.classList.remove('active');
      s.style.display = 'none'; // hide non-active sections
    }
  });

  section.classList.add('active');
  section.style.display = 'block'; // show active section

  // Handle special cases for Add and List sections
  if (sectionId === 'add') {
    domElements.header.textContent = 'Awesome Books';
    domElements.form.style.display = 'block';
    domElements.bookDisplay.style.display = 'none';
  } else if (sectionId === 'list') {
    domElements.header.textContent = 'Awesome Books';
    domElements.form.style.display = 'none';
    domElements.bookDisplay.style.display = 'block';
  } else {
    // Reset header and hide form and book display for other sections
    domElements.header.textContent = ' Awesome Books';
    domElements.form.style.display = 'none';
    domElements.bookDisplay.style.display = 'none';
  }
};

export const handleNavigation = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      navigateToSection(sectionId);
    });
  });
};
