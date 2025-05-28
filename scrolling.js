document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // Target alternating project cards
    const containers = document.querySelectorAll(".card");
  
    containers.forEach((card, index) => {
      // Add left/right animation classes alternately
      if (index % 2 === 0) {
        card.classList.add("fade-in-left");
      } else {
        card.classList.add("fade-in-right");
      }
      observer.observe(card);
    });
  });