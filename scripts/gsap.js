gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
	el: document.querySelector("#main"),
	smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
	scrollTop(value) {
		return arguments.length
			? locoScroll.scrollTo(value, 0, 0)
			: locoScroll.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return {
			top: 0,
			left: 0,
			width: window.innerWidth,
			height: window.innerHeight,
		};
	},
	pinType: document.querySelector("#main").style.transform
		? "transform"
		: "fixed",
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

//--------------------------------------------------------------------------------------------------

let nav = gsap.timeline();

nav.from("nav a h1", {
	y: -50,
	duration: 1.5,
	opacity: 0,
});
nav.from("nav i", {
	y: -50,
	duration: 1.5,
	opacity: 0,
});
nav.from("#page1 #tt", {
	duration: 1,
	y: -250,
});
nav.from("#page1 #t", {
	duration: 1,
	x: 1300,
});
nav.from("#page1 #m", {
	duration: 1,
	x: -1300,
});
nav.from("#page1 #b", {
	duration: 1,
	y: 250,
});

gsap.to("#page2 h1", {
	x: -6000,
	duration: 3,
	scrollTrigger: {
		// markers: true,
		trigger: "#page2",
		scroller: "#main",
		start: "top 0%",
		end: "bottom 0",
		scrub: 3,
		pin: true,
	},
});
