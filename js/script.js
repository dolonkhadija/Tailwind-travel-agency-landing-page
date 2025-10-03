// menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const hamburger = document.getElementById('hamburger');
  const close = document.getElementById('close');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    close.classList.toggle('hidden');
  });

  // scrool animation
   
  
  const sections = document.querySelectorAll('.fade-section');

  const observerOptions = {
    threshold: 0.15 // section viewport e 15% এলে trigger
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const section = entry.target;
        const animationType = section.dataset.animation;

        section.classList.remove('opacity-0');

        if(animationType === 'bottom') section.classList.remove('translate-y-10');
        if(animationType === 'top') section.classList.remove('-translate-y-10');
        if(animationType === 'left') section.classList.remove('-translate-x-10');
        if(animationType === 'right') section.classList.remove('translate-x-10');

        section.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');

        observer.unobserve(section); // একবার animation হলে আর observe হবে না
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

// FAQ TOGGLE
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector(".faq-icon");

    // answer toggle
    answer.classList.toggle("hidden");

    // icon toggle
    if (icon.textContent === "+") {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }
  });
});


// gallery

  // MixItUp initialization
  var mixer = mixitup('.mix-container', {
    selectors: {
      target: '.mix'
    },
    animation: {
      duration: 300
    }
  });

  // GLightbox initialization
  const lightbox = GLightbox({
    selector: '.glightbox'
  });


  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('bg-teal-500', 'text-white'));
      filterBtns.forEach(b => b.classList.add('bg-gray-200'));
      
      btn.classList.remove('bg-gray-200');
      btn.classList.add('bg-teal-500', 'text-white');
    });
  });

