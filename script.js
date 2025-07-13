const btn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');

btn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
