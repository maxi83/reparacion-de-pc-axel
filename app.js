const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const waForm = document.getElementById('waForm');
waForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const device = document.getElementById('device').value;
  const issue = document.getElementById('issue').value.trim();
  const msg = `Hola OPTINET! Soy ${name}. Tengo un/a ${device}. El problema es: ${issue}`;
  window.open(`https://wa.me/542664466905?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});
