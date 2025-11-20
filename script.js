 document.getElementById('year').textContent = new Date().getFullYear();

    // reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('show');
      });
    },{threshold:0.12});
    reveals.forEach(r=>obs.observe(r));

    // mobile toggle for nav (simple)
    const toggle = document.querySelector('.mobile-toggle');
    const navUL = document.querySelector('nav ul');
    if(toggle){
      toggle.addEventListener('click', ()=>{
        navUL.style.display = navUL.style.display === 'flex' ? 'none' : 'flex';
        navUL.style.flexDirection = 'column';
        navUL.style.background = 'transparent';
        navUL.style.position = 'absolute';
        navUL.style.right = '20px';
        navUL.style.top = '72px';
        navUL.style.padding = '12px';
      });
    }

    // active nav link on scroll
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        const id = entry.target.id;
        const link = document.querySelector('.nav a[href="#'+id+'"]');
        if(entry.isIntersecting){
          navLinks.forEach(l=>l.classList.remove('active'));
          if(link) link.classList.add('active');
        }
      });
    },{threshold:0.45});
    sections.forEach(s=>sectionObserver.observe(s));