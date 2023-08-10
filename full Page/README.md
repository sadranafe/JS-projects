# Full page
full page with HTML , CSS and JS.

[see Demo](https://shimmering-banoffee-71c08a.netlify.app/)

in this project , i used 5 libraries which can help us very much : 
1) [bootstrap](https://getbootstrap.com/)
2) [swiper Js](https://swiperjs.com)
3) [basic Scroll](https://github.com/electerious/basicScroll)
4) [scroll Reveal](https://scrollrevealjs.org/)
5) [mobiScroll](https://demo.mobiscroll.com/)

### Swiepr JS
you have to start with this function : 
  ```
    const swiper = new swiper (you have to select HTML element , parameters)
  ```
  here's a short piece of code of swiepr js that eliminates your need :point_down: :
```
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  }, 
  autoplay: {
   delay: 5000,
 },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }  
});
```
if you want to know more about the swiper js, you can click on the link : [swiper js documentation](https://swiperjs.com/swiper-api)

### scroll Reveal
you have to start with this syntax : 
```
  ScrollReveal.reveal("select HTML element" , {objects})
```
by this code, you can eliminate your needs :point_down:	: 

  ```
    ScrollReveal.reveal("select HTML element" , {
      delay : number,
      duration: number,
      distance: 'px em % ',
      opacity: is a range between 0.0 = 0 and 1.0 = 1,
      origin: 'bottom top left right' - specifies what direction elements come from when revealed. you can select one of them.
      rotate : { describing an angle in degrees.
        x: numebr,
        y: number,
        z: number,
      },
      scale: numebr - default value is 1
    });
  ```
  for more details you can click on the link : [scroll Reveal documentation](https://scrollrevealjs.org/api/reveal.html)

sadranafe7@gmail.com - [my Instagram Page](https://www.instagram.com/sadra_nafe/?r=nametag)


