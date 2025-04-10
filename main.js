// Обробка кнопки "Читати"
const startReadingBtn = document.getElementById('start-reading');
const mainPage = document.getElementById('main-page');
const contentPage = document.getElementById('content-page');

startReadingBtn.addEventListener('click', () => {
  mainPage.classList.add('hidden');
  contentPage.classList.remove('hidden');
});

// Обробка мобільного меню
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');

function toggleSidebar() {
  sidebar.classList.toggle('active');
  sidebarOverlay.classList.toggle('active');
}

toggleSidebarBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Закриття сайдбару при кліку на посилання (для мобільних пристроїв)
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  });
});