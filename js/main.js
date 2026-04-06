/* ══════════════════════════════════════
   ABHISHEK KUMAR PORTFOLIO — JS
   ══════════════════════════════════════ */

/* ── Custom Cursor ── */
const dot   = document.getElementById('curDot');
const ring  = document.getElementById('curRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

(function trackCursor() {
  dot.style.left  = mouseX + 'px';
  dot.style.top   = mouseY + 'px';
  ringX += (mouseX - ringX) * 0.11;
  ringY += (mouseY - ringY) * 0.11;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(trackCursor);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
});

/* ── Profile Card 3D Tilt ── */
const profileCard = document.getElementById('profileCard');
let tiltOn = true;

document.addEventListener('mousemove', e => {
  if (!profileCard || !tiltOn) return;
  const r  = profileCard.getBoundingClientRect();
  const cx = r.left + r.width  / 2;
  const cy = r.top  + r.height / 2;
  const dx = ((e.clientX - cx) / window.innerWidth)  * 30;
  const dy = ((e.clientY - cy) / window.innerHeight) * 30;
  profileCard.style.transform    = `rotateY(${dx}deg) rotateX(${-dy}deg)`;
  profileCard.style.animationPlayState = 'paused';
});
document.addEventListener('mouseleave', () => {
  if (profileCard) {
    profileCard.style.transform = '';
    profileCard.style.animationPlayState = 'running';
  }
});

/* ── Navbar Scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Active Nav Link ── */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');
const activeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navItems.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { threshold: 0.45 });
sections.forEach(s => activeObs.observe(s));

/* ── Scroll Reveal ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // Stagger children if multiple
      e.target.style.transitionDelay = (e.target.dataset.delay || 0) + 'ms';
      e.target.classList.add('revealed');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.scroll-reveal').forEach(el => revealObs.observe(el));

/* ── Hero fade-up animations (data-anim) ── */
document.querySelectorAll('[data-anim="fade-up"]').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(26px)';
  const delay = el.dataset.delay || 0;
  setTimeout(() => {
    el.style.transition = 'opacity .7s ease, transform .7s ease';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 100 + parseInt(delay));
});

/* ── Counter Animations ── */
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el  = e.target;
    const end = parseInt(el.dataset.count);
    const dur = 1800;
    let startTime = null;
    const step = ts => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / dur, 1);
      el.textContent = Math.floor(p * end);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    counterObs.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.stat-num[data-count]').forEach(n => counterObs.observe(n));

/* ── Skill Bar Animations ── */
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const target = bar.dataset.width;
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        setTimeout(() => { bar.style.width = target + '%'; }, 120);
      });
    });
    barObs.unobserve(e.target);
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skills-block').forEach(b => barObs.observe(b));

/* ── Hamburger Menu ── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  const spans = hamburger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  }
});
navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  });
});

/* ── Smooth Scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ── Stagger scroll-reveal children in grids ── */
const gridStaggerObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.skill-card, .project-card, .cert-card').forEach((child, i) => {
      child.style.transitionDelay = (i * 55) + 'ms';
      child.style.opacity = '1';
      child.style.transform = 'translateY(0)';
    });
    gridStaggerObs.unobserve(e.target);
  });
}, { threshold: 0.08 });

document.querySelectorAll('.skills-grid, .projects-grid, .certs-grid').forEach(g => {
  g.querySelectorAll('.skill-card, .project-card, .cert-card').forEach(child => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(24px)';
    child.style.transition = 'opacity .55s ease, transform .55s ease';
  });
  gridStaggerObs.observe(g);
});

console.log('%c 👨‍💻 Abhishek Kumar · Senior Data Engineer', 'color:#00efc6; font-size:14px; font-weight:900;');
console.log('%c 📧 codecomet.query@gmail.com', 'color:#3d7aff; font-size:12px;');
console.log('%c 🔗 https://www.linkedin.com/in/abhishek0709/', 'color:#a78bfa; font-size:12px;');
