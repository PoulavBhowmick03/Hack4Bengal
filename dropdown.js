const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'none';
  });
});
