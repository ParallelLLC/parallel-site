const CONTACT_EMAIL = "info@parallelllc.com"; // change to your real inbox

  const hdr = document.getElementById('hdr');
  const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 24);
  onScroll(); addEventListener('scroll', onScroll, {passive:true});

  const mt = document.getElementById('mt'), nav = document.getElementById('nav');
  mt.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  const io = new IntersectionObserver((es) => {
    es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:.1, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  document.getElementById('emailLink').href = "mailto:" + CONTACT_EMAIL;
  document.getElementById('contactForm').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const f = ev.target;
    const subject = encodeURIComponent("Inquiry — " + (f.org.value || f.name.value || "Parallel site"));
    const body = encodeURIComponent(
      "Name: " + f.name.value + "\n" +
      "Email: " + f.email.value + "\n" +
      "Organization: " + (f.org.value || "—") + "\n" +
      "Role: " + (f.role.value || "—") + "\n\n" +
      f.msg.value
    );
    location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  });
