let lastScrollY = window.scrollY;
  const navBar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Nur ausblenden, wenn mehr als 50px gescrollt wurden
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      navBar.classList.add('hidden');
    } else {
      navBar.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  });
