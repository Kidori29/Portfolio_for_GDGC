// Khởi tạo khi trang load xong
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initSmoothScrolling();
  initScrollEffects();
  updateCurrentYear();
});

// 1. Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');

  if (!menuBtn || !navMenu) return;

  // Toggle menu
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
  });

  // Đóng menu khi click vào link
  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navMenu.classList.remove('active');
    }
  });

  // Đóng menu khi click bên ngoài
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
}

// 2. Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// 3. Scroll Effects cho Header
function initScrollEffects() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
      header.style.borderBottom = '1px solid rgba(220, 38, 38, 0.2)';
    } else {
      header.style.backgroundColor = '#fff';
      header.style.backdropFilter = 'none';
      header.style.borderBottom = 'none';
    }
  });
}

// 4. Update Current Year
function updateCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// 5. External Links
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-view-all')) {
    e.preventDefault();
    window.open('https://github.com/Kidori29', '_blank');
  }
});

// 6. Keyboard Navigation (ESC to close menu)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const navMenu = document.getElementById('navMenu');
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  }
});