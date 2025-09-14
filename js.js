/*===================================================== nav bar ===========================================================================*/

function togglecheck() {
    var screenWidth = window.innerWidth;
    var menuList = document.getElementById("menulist");
    var menuListItems = menuList.getElementsByTagName("li");
  
    if (screenWidth > 900) {
      menuList.style.display = "none";
      for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "none";
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    togglecheck(); 
  });
  
  window.addEventListener("resize", function() {
    togglecheck(); 
  });
  
  
  function toggleMenu() {
    var menuList = document.getElementById("menulist");
    var menuListItems = menuList.getElementsByTagName("li");
    if (menuList.style.display === "none") {
      menuList.style.display = "block";
      for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "block";
      }
    } else {
      menuList.style.display = "none";
      for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "none";
      }
    }
  }
  
  function Menuoff() {
    var menuList = document.getElementById("menulist");
    var menuListItems = menuList.getElementsByTagName("li");
    if (menuList.style.display === "block") {
      menuList.style.display = "none";
      for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "none";
      }
    }
  }

  


/*===================================================== Home ===========================================================================*/
/*
const typed2 = new Typed(".welcome_text_3", {
    strings: ["Hi, I'm Srikanth"], 
    typeSpeed: 80,        
    showCursor: false,   
});
*/

/*===================================================== Services  ===========================================================================*/

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; 

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }

    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 

    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

//=========================================================== All transitions =========================================================


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom <= 0 || 
      rect.top >= window.innerHeight || 
      rect.right <= 0 || 
      rect.left >= window.innerWidth
    );
  }
  
  function handleScroll() {
    const elements = document.querySelectorAll('.home_container, .abt_me_1, .abt_me_2, .problems ul, .review_person, .contact-form input, .contact-form textarea, .contact-form button');
    // const elements2 = document.querySelectorAll('.prob_container');
    const elements3 = document.querySelectorAll('.prob_photo_0');

    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('slide-in');
        element.classList.remove('slide-in');
        element.style.visibility = 'visible';
      } else {
        element.classList.remove('slide-in');
        element.classList.add('slide-in');
      }
    });

    // elements2.forEach(element => {
    //     if (isInViewport(element)) {
    //       element.classList.add('slide-in2');
    //       element.classList.remove('slide-in2');
    //     } else {
    //       element.classList.remove('slide-in2');
    //       element.classList.add('slide-in2');
    //     }
    //   });

    elements3.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('slide-in3');
          element.classList.remove('slide-in3');
        } else {
          element.classList.remove('slide-in3');
          element.classList.add('slide-in3');
        }
      });

  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);

/*===================================================== image open  ===========================================================================*/

const gallery = document.querySelectorAll('img');
gallery.forEach(img => {
    img.addEventListener('click', () => {
        window.open(img.src, '_blank');
    });
});

const gallery2 = document.querySelectorAll('.profile_content2, .profile_content3, .profile_content4, .profile_content5, .profile_content6, .profile_content7');
gallery2.forEach(i => {
    i.addEventListener('click', () => {
        window.open(i.querySelector('img').src, '_blank');
    });
});
  