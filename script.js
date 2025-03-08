// Shery.imageEffect("#back", {
//   style: 5,
//   config: {
//     a: { value: 2, range: [0, 30] },
//     b: { value: -0.95, range: [-1, 1] },
//     zindex: { value: -9996999, range: [-9999999, 9999999] },
//     aspect: { value: 1.9417178244337514 },
//     ignoreShapeAspect: { value: true },
//     shapePosition: { value: { x: 0, y: 0 } },
//     shapeScale: { value: { x: 0.5, y: 0.5 } },
//     shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
//     shapeRadius: { value: 0, range: [0, 2] },
//     currentScroll: { value: 0 },
//     scrollLerp: { value: 0.07 },
//     gooey: { value: true },
//     infiniteGooey: { value: true },
//     growSize: { value: 3.99, range: [1, 15] },
//     durationOut: { value: 1, range: [0.1, 5] },
//     durationIn: { value: 1, range: [0.1, 5] },
//     displaceAmount: { value: 0.5 },
//     masker: { value: true },
//     maskVal: { value: 1.24, range: [1, 5] },
//     scrollType: { value: 0 },
//     geoVertex: { range: [1, 64], value: 1 },
//     noEffectGooey: { value: false },
//     onMouse: { value: 1 },
//     noise_speed: { value: 0.53, range: [0, 10] },
//     metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
//     discard_threshold: { value: 0.59, range: [0, 1] },
//     antialias_threshold: { value: 0.02, range: [0, 0.1] },
//     noise_height: { value: 0.31, range: [0, 2] },
//     noise_scale: { value: 32.06, range: [0, 100] },
//   },
//   gooey: true,
// });

gsap.to(".nav-item", {
  scrollTrigger: {
    trigger: ".second",
    start: "top top",
    end: "bottom top",
    scrub: true,
    onEnter: () => {
      gsap.to(".menunew-main #tb", { color: "black" });
    },
    onLeaveBack: () => {
      gsap.to(".menunew-main #tb", { color: "white" });
    },
  },
});
gsap.to("header", {
  scrollTrigger: {
    trigger: ".second",
    start: "top top",
    end: "bottom top",
    scrub: true,
    onEnter: () => {
      gsap.to("header", {
        backgroundColor: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
      });
    },
    onLeaveBack: () => {
      gsap.to("header", { backgroundColor: "rgba(0, 0, 0, 0)" });
    },
  },
});
gsap.to("header", {
  scrollTrigger: {
    trigger: ".second",
    start: "top top",
    end: "bottom top",
    scrub: true,
    onEnter: () => {
      document.querySelector(".logo img").src = "assest/logos/logo-blue.png"; // Black logo on scroll
    },
    onLeaveBack: () => {
      document.querySelector(".logo img").src = "assest/logos/logo-white.webp"; // Original logo when scrolling back
    },
  },
});
function hideLoader() {
  gsap.to(".loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.querySelector(".loader").style.display = "none";
    },
  });
}

///////////////////////// Mega-Menu \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

document.querySelector(".services").addEventListener("mouseenter", () => {
  gsap.to(".mega-menu", { opacity: 1, y: 10, duration: 0.1, display: "flex" });
});

document.querySelector(".services").addEventListener("mouseleave", () => {
  gsap.to(".mega-menu", { opacity: 0, y: 0, duration: 0.1, display: "none" });
});

// new header js by nitin start

// new header js by nitin end
