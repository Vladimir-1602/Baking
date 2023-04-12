

const tl = gsap.timeline();





tl.from(".header__menu", {
   y: -100,
   opacity: 0,
}, "+=1");

tl.from(".header__subtitle", {
   y: -100,
   opacity: 0,
}, "+=0");
tl.from(".header__scroll", {
   y: '100%',
   opacity: 0,
}, "+=0.2");
tl.from(".header__social", {
   rotate: -90,
   opacity: 0,
}, "+=0.3");
tl.from(".header__img", {
   scale: 0,
   opacity: 0,
}, "+=0");
gsap.from(".header__title", {
   //scale: 0,
   opacity: 0,
   x: "-150%",
   duration: 3,
   delay: 2.5,
   ease: "back"
});


gsap.registerPlugin(ScrollSmoother);

if (!ScrollTrigger.isTouch) {
   ScrollSmoother.create({
      wrapper: '.content',
      content: '.wrapper',
      smooth: 1.5,
      effects: true,
   })
}

