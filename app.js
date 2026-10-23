const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

function closeMenu() {
  nav?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}

menuBtn?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open') ?? false;
  menuBtn.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 920) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -35px 0px' });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('show'));
}

const waForm = document.getElementById('waForm');

waForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name')?.value.trim() ?? '';
  const device = document.getElementById('device')?.value ?? '';
  const issue = document.getElementById('issue')?.value.trim() ?? '';

  if (!name || !device || !issue) return;

  const message = `Hola OPTINET! Soy ${name}. Tengo un/a ${device}. El problema es: ${issue}`;
  const url = `https://wa.me/542664466905?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank', 'noopener,noreferrer');
});
