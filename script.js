const type1_str = "Hi, my name's Priscilla, & welcome to my website ♥";

window.addEventListener("load", function() {
  executeAsynchronously([
    [type1_str, "type1", 100],
  ]);
});

function executeAsynchronously(texts) {
  texts.forEach(args => type(...args));
}

function type(text, id, delay) {
  const elem = document.getElementById(id);
  if (elem) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        elem.textContent += text.charAt(i);
      }, i * delay);
    }
  }
}

// Art Carousel
document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 0;
    function loadShow(){
        items.forEach((item, index) => {
            const offset = index - active;
            const direction = offset > 0 ? 1 : -1;
            const absOffset = Math.abs(offset);
            
            if (absOffset <= 2) {
                item.style.opacity = absOffset === 0 ? '1' : '0.6';
                item.style.transform = `translateX(${direction * 120 * absOffset}px) scale(${1 - 0.2 * absOffset})`;
                item.style.zIndex = 3 - absOffset;
                item.style.filter = absOffset === 0 ? 'none' : 'blur(5px)';
            } else {
                item.style.opacity = '0';
                item.style.transform = `translateX(${direction * 240}px) scale(0.6)`;
                item.style.zIndex = 0;
            }
        });
    }

    loadShow();

    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }

    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }
});

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: 1200,
    delay: 300,
    easing: 'ease',
    reset: false
});

// Removed Intersection Observer for competitive research section


// Removed ScrollReveal animations for comp-research section
// sr.reveal('#comp-research', {
//     origin: 'left',
//     distance: '100px',
//     duration: 1200,
//     delay: 300
// });

// sr.reveal('#comp-research #process-icon', {
//     origin: 'bottom',
//     distance: '30px',
//     duration: 800,
//     delay: 200
// });

// sr.reveal('#comp-research #half-circle', {
//     origin: 'top',
//     distance: '50px',
//     duration: 1000,
//     delay: 100
// });

// sr.reveal('#comp-research #process-text', {
//     origin: 'left',
//     distance: '100px',
//     duration: 1200,
//     delay: 300
// });



