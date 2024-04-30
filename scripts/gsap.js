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
		scroller: "body",
		start: "top 0%",
		end: "bottom 0",
		scrub: 3,
		pin: true,
	},
});
