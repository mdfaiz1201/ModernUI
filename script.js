const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('close-button');

menuButton.addEventListener('click', () => {
  sidebar.classList.add('sidebar-open');
});

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-open');
});