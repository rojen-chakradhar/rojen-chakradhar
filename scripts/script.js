const bar = document.getElementById("bar");
const sidenav = document.getElementById("sidenav");
const page1 = document.getElementById("page1");

bar.addEventListener("mouseenter", function () {
	bar.classList.remove("fa-bars");
	bar.classList.add("fa-bars-staggered");
});

bar.addEventListener("mouseleave", function () {
	bar.classList.remove("fa-bars-staggered");
	bar.classList.add("fa-bars");
});

function openNav() {
	sidenav.style.right = "0";
}

function closeNav() {
	sidenav.style.right = "-22.1vw";
}
