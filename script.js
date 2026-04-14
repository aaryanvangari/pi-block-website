const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

elements.forEach(el => observer.observe(el));

// // Detect platform
// const ua = navigator.userAgent || navigator.vendor;

// if (/android/i.test(ua)) {
//   document.getElementById("appStoreBtn").style.display = "none";
// }
// if (/iPhone|iPad|iPod/i.test(ua)) {
//   document.getElementById("playStoreBtn").style.display = "none";
// }

// // Stars counter
// fetch("https://api.github.com/repos/aaryanvangari/pi-block")
//   .then(res => res.json())
//   .then(data => {
//     document.getElementById("stars").innerText = data.stargazers_count || 0;
//   })
//   .catch(() => {
//     document.getElementById("stars").innerText = "100+";
//   });


document.addEventListener("DOMContentLoaded", () => {
    
  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
    
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

});






const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");

    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});





const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Theme Switcher Logic
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update Icon
    themeToggle.innerHTML = newTheme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

 const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });

// Mobile Menu Toggle
// mobileBtn.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
// });

// Load Saved Theme
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    if(savedTheme === 'dark') themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
};
