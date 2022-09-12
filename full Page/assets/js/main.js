//#region Search Modal window
const openBtnSearch = document.querySelector(".btn-search")
const closeBtnSearch = document.querySelector(".modal-search i")
const form = document.querySelector("form")
const overlay = document.querySelector(".overlay")

function openModal() {
    form.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function closeModal() {
    form.classList.add("hidden")
    overlay.classList.add("hidden")
}

openBtnSearch.addEventListener("click" , openModal )
closeBtnSearch.addEventListener("click" , closeModal )
overlay.addEventListener("click" , closeModal)

document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && !form.classList.contains('hidden')) {
        closeModal();
    }
});
//#endregion Search Modal window

//#region basicScroll
const instance1 = basicScroll.create({
    elem : document.querySelector(".bg-overlay"),
    from : 'top-middle',
    to : 'middle-top',
    direct: true,
    props: {
        '--ty':{
            from : '-20px',
            to: '90px'
        }
    }
})
instance1.start()

const instance2 = basicScroll.create({
    elem : document.querySelector(".img-2"),
    from : 'middle-bottom',
    to : 'bottom-middle',
    direct : true,
    props : {
        '--ty2':{
            from : '50px',
            to:'-30px'
        }
    }
})
instance2.start()
//#endregion basicScroll

//#region Accordion
const headerAccordion = document.querySelectorAll(".header")
document.querySelector(".first-accordion-child").style.color = "var(--color-main)"

for(let i = 0 ; i < headerAccordion.length ; i++){
    headerAccordion[i].addEventListener("click" , () =>{
        if(headerAccordion[i].attributes[1].value != "true"){
            headerAccordion[i].style.color = "var(--color-main)"
        } else {
            headerAccordion[i].style.color = "#000"
        }
    })
}
//#endregion Accordion

//#region ImageSlider
const modalSlider = document.querySelector(".modal-Slider")
const openBtnModalSlider = document.querySelector(".left-img-parent a img ")
const openBtnModalSlider2 = document.querySelector(".right-img-parent a img ")
const closeBtnModalSlider = document.querySelector(".close-modal-slider")
const overlaySlider = document.querySelector(".overlay-slider")
const swiperSlide = document.querySelectorAll(".remove")
const swiperSlide2 = document.querySelectorAll(".remove2")
const swiperModalImgs = document.querySelectorAll(".swiper-slide img")
const verticalImg = document.querySelector(".vertical-img")
const horizontalImages = document.querySelectorAll(".h-images div")

openBtnModalSlider.addEventListener("click" , (ev) =>{
    ev.preventDefault()
    modalSlider.classList.remove("hidden")
    overlaySlider.classList.remove("hidden")
    swiperSlide.forEach( ele => {
        ele.classList.remove("remove")
    });

    swiperSlide2.forEach( ele => {
        ele.classList.add("remove2")
    });
})

openBtnModalSlider2.addEventListener("click" , (ev) =>{
    ev.preventDefault()
    modalSlider.classList.remove("hidden")
    overlaySlider.classList.remove("hidden")
    swiperModalImgs[0].src = "assets/img/turbine.webp"
    swiperModalImgs[1].src = "assets/img/home.jpg"
    swiperSlide.forEach( ele => {
        ele.classList.remove("remove")
    });

    swiperSlide2.forEach( ele => {
        ele.classList.add("remove2")
    });
})

verticalImg.addEventListener("click" , () => {
    for(let i = 0 ; i < swiperSlide.length ; i++){
        modalSlider.classList.remove("hidden")
        overlaySlider.classList.remove("hidden")
    }
    swiperSlide.forEach( ele => {
        ele.classList.add("remove")
    });

    swiperSlide2.forEach( ele => {
        ele.classList.remove("remove2")
    });
})

for(let i = 0 ; i < horizontalImages.length ; i++){
    horizontalImages[i].addEventListener("click" , () =>{
        modalSlider.classList.remove("hidden")
        overlaySlider.classList.remove("hidden")        

        swiperSlide.forEach( ele => {
            ele.classList.add("remove")
        });

        swiperSlide2.forEach( ele => {
            ele.classList.remove("remove2")
        });
    })
}

closeBtnModalSlider.addEventListener("click" , closeModalSlider)

overlaySlider.addEventListener("click" , closeModalSlider)

document.addEventListener("keydown" , (ev) =>{
    if (ev.key === 'Escape' && !modalSlider.classList.contains('hidden')) {
        closeModalSlider();
    }
})

function closeModalSlider() {
    modalSlider.classList.add("hidden")
    overlaySlider.classList.add("hidden")
    swiperModalImgs[0].src = "assets/img/home.jpg"
    swiperModalImgs[1].src = "assets/img/turbine.webp"
}

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      mousewheel: {
        invert: false,
      },
      grabCursor: true
  });
//#endregion openModalSlider

//#region Circular-progress-bar
let progressBarParent = document.querySelector(".container-bar-parent")
let progressBar = document.querySelectorAll(".circular-progress-bar");
let valueContainer = document.querySelectorAll(".value-container");
let progressValue = 0;
let progressEndVlaue1 = 73;
let progressEndVlaue2 = 94;
let progressEndVlaue3 = 81;

let throttlePause = false
window.addEventListener("scroll" , scrollThrottle)

function scrollThrottle() {
    if(throttlePause) return;
    setTimeout(() => {
        const progressPos = progressBarParent.getBoundingClientRect().top
        const screenPos = window.innerHeight / 1.6
        if(progressPos <= screenPos){
            let progress1 = setInterval(() =>{
                if(progressValue < progressEndVlaue1){
                    progressValue++;
                    valueContainer[0].textContent = progressValue + "%"
                    progressBar[0].style.background = `conic-gradient(var(--color-main) ${progressValue * 3.6}deg , #e0dcff ${progressValue * 3.6}deg)`;        
                } else if(progressValue == progressEndVlaue1){
                    clearInterval(progress1)
                }
            }, 50)

            let progress2 = setInterval(() =>{
                if(progressValue < progressEndVlaue2){
                    progressValue++;
                    valueContainer[1].textContent = progressValue + "%"
                    progressBar[1].style.background = `conic-gradient(var(--color-main) ${progressValue * 3.6}deg , #e0dcff ${progressValue * 3.6}deg)`;
                } else if(progressValue == progressEndVlaue2){
                    clearInterval(progress2)
                }
            }, 50)

            let progress3 = setInterval(() =>{
                if(progressValue < progressEndVlaue3){
                    progressValue++;
                    valueContainer[2].textContent = progressValue + "%"
                    progressBar[2].style.background = `conic-gradient(var(--color-main) ${progressValue * 3.6}deg , #e0dcff ${progressValue * 3.6}deg)`;
                } else if (progressValue == progressEndVlaue3){
                    clearInterval(progress3)
                }
            
            }, 50)
        } 
        else{
            
        }

        throttlePause = false;
    }, 250);
    throttlePause = true
}

// window.addEventListener("scroll" , () => {

    
// })  
//#endregion Circular-progress-bar

//#region CommentSlider
var CommentSlider = new Swiper(".swiper-comment" , {
    pagination:{
        el:".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
        type: "bullets"
    },
    slidesPerView: 2,
    spaceBetween: 100,
    loop:true
});
//#endregion CommentSlider

//#region img-And-description Slider
var imgSlider = new Swiper(".img-swiper" , {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50
})
//#endregion img-And-description Slider

//#region ScrollReveal
ScrollReveal().reveal(".section-1 div:last-child" , {
    delay: 375,
    origin: 'right',
    distance: "500px",
    duration: 700,
    opacity: 0,
    easing : "cubic-bezier(0,0,.43,.9)"
});

ScrollReveal().reveal(".section-1 div:first-child" , {
    delay: 475,
    origin: 'left',
    distance: "500px",
    duration: 700,
    opacity: 0,
    easing : "cubic-bezier(0,0,.43,.9)"
});

ScrollReveal().reveal(".section-2 div:nth-child(1)" , {
    delay: 475,
    origin: 'bottom',
    distance: "800px",
    duration: 700,
    opacity: 0,
    easing : "cubic-bezier(0,0,.43,.9)"
});

ScrollReveal().reveal(".section-2 div:nth-child(2)" , {
    delay: 575,
    origin: 'bottom',
    distance: "800px",
    duration: 700,
    opacity: 0,
    easing : "cubic-bezier(0,0,.43,.9)"
});

ScrollReveal().reveal(".section-2 div:nth-child(3)" , {
    delay: 675,
    origin: 'bottom',
    distance: "800px",
    duration: 700,
    opacity: 0,
    easing : "cubic-bezier(0,0,.43,.9)"
});

ScrollReveal().reveal(".parallax-imgs" , {
    delay: 675,
    origin: 'left',
    distance: "800px",
    duration: 700,
    opacity: 0,
    easing : "cubic-bezier(0,0,.43,.9)"
});

ScrollReveal().reveal(".title-accordion" , {
    delay: 775,
    origin: 'right',
    distance: "800px",
    duration: 700,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".main-accordion" , {
    delay: 800,
    origin: 'right',
    distance: "800px",
    duration: 750,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".brand-wrapper" , {
    delay: 500,
    origin: 'right',
    distance: "800px",
    duration: 800,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".hover-content + a" , {
    delay: 900,
    origin: 'right',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".section-4 > div > h3" , {
    delay: 950,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".section-4 > div > h3 + p " , {
    delay: 1000,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".advantages" , {
    delay: 1000,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".h3-section6" , {
    delay: 700,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".h3-section6 + p" , {
    delay: 800,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".card-box-top div:nth-child(1)" , {
    delay: 800,
    origin: 'bottom',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".card-box-top div:nth-child(2)" , {
    delay: 900,
    origin: 'bottom',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".card-box-bottom div:nth-child(1)" , {
    delay: 950,
    origin: 'bottom',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".card-box-bottom div:nth-child(2)" , {
    delay: 1000,
    origin: 'bottom',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".join-btn" , {
    delay: 1090,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".parent-map" , {
    delay: 800,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".h4-section-7" , {
    delay: 800,
    origin: 'right',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".h4-section-7 + p" , {
    delay: 900,
    origin: 'right',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".container-bar-parent" , {
    delay: 0,
    origin: 'right',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".latest-project" , {
    delay: 0,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".latest-project+a" , {
    delay: 0,
    origin: 'right',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".horizontal-parent" , {
    delay: 0,
    origin: 'top',
    distance: "300px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".vertical-img" , {
    delay: 300,
    origin: 'bottom',
    distance: "200px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".swiper-comment" , {
    delay: 300,
    origin: 'bottom',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".section-9 > h4" , {
    delay: 400,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".img-wrapper" , {
    delay: 0,
    origin: 'left',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".right-section-slider > h5" , {
    delay: 200,
    origin: 'right',
    distance: "300px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".img-swiper" , {
    delay: 500,
    origin: 'right',
    distance: "800px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".section-11 > div > div > h5" , {
    delay: 0,
    origin: 'top',
    distance: "200px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});

ScrollReveal().reveal(".contact-part" , {
    delay: 200,
    origin: 'bottom',
    distance: "200px",
    duration: 850,
    opacity: 0,
    easing : "cubic-bezier(0,0,.13,.9)"
});
//#endregion ScrollReveal