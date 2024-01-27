window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-bar');
    if (window.scrollY <1) {
      navbar.style.backgroundColor = '#f8f9fa';
    } else {
      navbar.style.backgroundColor = '#e4e4e7';
    }
  });