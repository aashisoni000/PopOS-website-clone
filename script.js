const hamburger = document.querySelector('.hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.querySelector('.close-btn');

  hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });