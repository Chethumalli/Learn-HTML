// Typewriter effect
const tw = document.getElementById('typewriter');
if (tw){
  const txt = tw.textContent.trim();
  tw.textContent = '';
  let i = 0;
  const speed = 18;
  (function type(){
    if (i < txt.length){
      tw.textContent += txt.charAt(i++);
      setTimeout(type, speed);
    }
  })();
}

// Music toggle
const song = document.getElementById('song');
const btn = document.getElementById('musicBtn');
if (btn && song){
  btn.addEventListener('click', () => {
    if (song.paused){ song.play(); btn.setAttribute('aria-pressed', 'true'); btn.textContent = 'Pause Music ❚❚'; }
    else { song.pause(); btn.setAttribute('aria-pressed', 'false'); btn.textContent = 'Play Music ♪'; }
  });
}

// Key bindings
document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (key === 'g'){ window.location.href = 'gallery.html'; }
  if (key === 'h'){ window.location.href = 'index.html'; }
  if (key === 'c'){ throwConfetti(); }
});

// Simple confetti
function throwConfetti(){
  const container = document.querySelector('.confetti') || document.body.appendChild(Object.assign(document.createElement('div'), { className:'confetti' }));
  const count = 80;
  for (let i=0; i<count; i++){
    const p = document.createElement('span');
    p.style.position='absolute';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = '-10px';
    p.style.width = 8 + Math.random()*8 + 'px';
    p.style.height = p.style.width;
    p.style.background = `hsl(${Math.random()*360}, 90%, 60%)`;
    p.style.transform = `rotate(${Math.random()*360}deg)`;
    p.style.borderRadius = Math.random() > 0.7 ? '50%' : '2px';
    p.style.opacity = 0.9;
    container.appendChild(p);
    const duration = 3000 + Math.random()*2000;
    p.animate([
      { transform: p.style.transform + ' translateY(0)' , opacity: 1 },
      { transform: p.style.transform + ' translateY(100vh) rotate(360deg)', opacity: 0.8 }
    ], { duration, easing:'cubic-bezier(.2,.8,.2,1)' });
    setTimeout(()=> p.remove(), duration);
  }
}
