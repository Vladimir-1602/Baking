(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".header__title", {
        opacity: 1,
        y: 0,
        scale: 1
    }, {
        opacity: 0,
        y: 150,
        scale: 1.5,
        scrollTrigger: {
            trigger: ".header__title",
            start: "-100",
            end: "bottom",
            scrub: true
        }
    });
    let itemsLeft = document.querySelectorAll(".content__left");
    let itemsLeftArray = Array.from(itemsLeft);
    itemsLeftArray.forEach((item => gsap.fromTo(item, {
        opacity: 0,
        x: -80
    }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: "-500",
            end: "+=300",
            scrub: true
        }
    })));
    let itemsRight = document.querySelectorAll(".content__right");
    let itemsRightArray = Array.from(itemsRight);
    itemsRightArray.forEach((item => gsap.fromTo(item, {
        opacity: 0,
        x: 80
    }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: "-500",
            end: "+=300",
            scrub: true
        }
    })));
    window["FLS"] = true;
    isWebp();
})();