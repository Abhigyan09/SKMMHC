// const sections = document.querySelectorAll("section");

// section.forEach((section) => {
//   window.addEventListener("load",addEventListener);
//   window.addEventListener("scroll",addEventListener);

// function addEventListener(){
//   let windowHeight = window.innerHeight;
//   let sectionRectTop = section.getBoundingClientReact().top;

//    if(sectionRectTop < windowHeight){
//     section.classlist.add("active");
//    }
// }

// window.addEventListener("scroll",() => {
//   let reveals = section.querySelectorAll(".reveal");

//   reveals.forEach((reveal, index) => {
//     if(section.classList.contains("active")){
//       const delay = 600;
//       setTimeout(() => {
//       reveal.classList.add("active");
//       }, index * delay);
//     }
//   });
// });

// });


let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});