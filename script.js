 function toggleMenu() {
      document.getElementById('navbar').classList.toggle('active');
    }


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust if you want it to trigger earlier/later
  });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });