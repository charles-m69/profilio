console.log('Script loaded');

//Scroll Back-To-Top Button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the webpage, show the button (if not, hide it)
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Typing Animation
var typed = new Typed(".auto-type",{
    strings : ["Visual Artist", "Music Producer", "Open To Work"], // The text to be displayed
    typeSpeed : 100,
    backSpeed : 50,
    loop: true
})

//Floating Menu
const menuToggler = document.getElementById('menu-float-toggler');
const floatingMenu = document.getElementById('floating-menu');

floatingMenu.addEventListener('show.bs.offcanvas', function () {
  menuToggler.classList.add('hidden');
});

floatingMenu.addEventListener('hidden.bs.offcanvas', function () {
  menuToggler.classList.remove('hidden');
});

menuToggler.addEventListener('click', function () {
  offcanvasInstance.show();
});

document.addEventListener('DOMContentLoaded', function () {
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#floating-menu'  
  });
});


//Item Carousel
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// Ensure all cards in the carousel are of equal height
function equalizeCardHeights() {
  const cards = document.querySelectorAll('.carousel .carousel-item .card');
  let maxHeight = 0;

  // Reset height
  cards.forEach(card => {
      card.style.height = 'auto'; 
  });

  cards.forEach(card => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
      }
  });

  cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
  });
}

window.addEventListener('load', equalizeCardHeights);
window.addEventListener('resize', equalizeCardHeights);

// Toggle between carousel and grid view
const toggleButton = document.getElementById('toggle-view');
const carouselContainer = document.querySelector('.container.text-center.my-3');
const gridViewContainer = document.getElementById('grid-view');
gridViewContainer.style.display = 'none';

toggleButton.addEventListener('click', function() {
    if (carouselContainer.style.display !== 'none') {
        carouselContainer.style.display = 'none';
        gridViewContainer.style.display = 'block';
        toggleButton.textContent = 'Hide All ↑';
    } else {
        carouselContainer.style.display = 'block';
        gridViewContainer.style.display = 'none';
        toggleButton.textContent = 'View All ↓';
    }
});








// Item Modal
// When the modal is closed, stop the video / music immediately

//Modal 1
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal1');
  const iframe = document.getElementById('modal1-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});

//Modal 4
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal4');
  const iframe = document.getElementById('modal4-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});

//Modal 5
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal5');
  const iframe = document.getElementById('modal5-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});

//Modal 6
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal6');
  const iframe = document.getElementById('modal6-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});

//Modal 7
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal7');
  const iframe = document.getElementById('modal7-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});

//Modal 8
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal8');
  const iframe = document.getElementById('modal8-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});

//Modal 9
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal9');
  const iframe = document.getElementById('modal9-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});

//Modal 10
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal10');
  const iframe = document.getElementById('modal10-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});

//Modal 11
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal11');
  const iframe = document.getElementById('modal11-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});

//Modal 12
document.addEventListener('DOMContentLoaded', function() {
  // Select the modal and iframe elements
  const modal = document.getElementById('modal12');
  const iframe = document.getElementById('modal12-vid');

  // Listen for the 'hidden.bs.modal' event when the modal is closed
  modal.addEventListener('hidden.bs.modal', function () {
      const iframeSrc = iframe.src;
      iframe.src = '';
      iframe.src = iframeSrc;
  });
});



// Show/Hide Map
const mapToggleBtn = document.getElementById('mapToggleBtn');
const map = document.getElementById('googleMap');

map.addEventListener('show.bs.collapse', function () {
    mapToggleBtn.innerHTML = 'Hide Map <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M12.854 3.146a.5.5 0 0 0-.708 0L8 7.293 3.854 3.146a.5.5 0 0 0-.708.708L7.293 8 3.146 12.854a.5.5 0 0 0 .708.708L8 8.707l4.146 4.146a.5.5 0 0 0 .708-.708L8.707 8l4.146-4.146a.5.5 0 0 0 0-.708z"/></svg>';

    mapToggleBtn.classList.add('active-btn');
});

map.addEventListener('hide.bs.collapse', function () {
    mapToggleBtn.innerHTML = 'Show Map <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>';
    
    mapToggleBtn.classList.remove('active-btn');
});



// Reset the scroll position to the top after page reload
// if (window.location.hash) {
//   window.addEventListener('load', function() {
//       window.scrollTo(0, 0);
//   });
// }

