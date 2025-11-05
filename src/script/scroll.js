const scrollBtn = document.getElementById('button-scroll');

// Pas user scroll manual
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrollBtn.classList.add('opacity-0', 'pointer-events-none');
  } else {
    scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
  }
});

// Pas user klik tombol panah
scrollBtn.addEventListener('click', () => {
  // Scroll ke bawah 1 viewport
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });

  // Sembunyikan tombol
  scrollBtn.classList.add('opacity-0', 'pointer-events-none');
});