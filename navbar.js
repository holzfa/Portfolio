let lastScrollY = window.scrollY;
let isAutoScrolling = false;
let autoScrollTimer = null;

const navBar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.dest');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    isAutoScrolling = true;
    navBar.classList.remove('hidden');

    // Falls während eines vorherigen Sprungs erneut geklickt wird, Timer zurücksetzen
    clearTimeout(autoScrollTimer);

    // Flag automatisch aufheben
    autoScrollTimer = setTimeout(() => {
      isAutoScrolling = false;
      lastScrollY = window.scrollY;
    }, 800);
  });
});

// Scrolling event
window.addEventListener('scroll', () => {
  if (isAutoScrolling) return;

  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    navBar.classList.add('hidden');
  } else {
    navBar.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
