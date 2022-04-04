function inViewport(el) {
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
		top < (window.pageYOffset + window.innerHeight) &&
		left < (window.pageXOffset + window.innerWidth) &&
		(top + height) > window.pageYOffset &&
		(left + width) > window.pageXOffset
	);
}

function triggerScroll() {
    window.scrollTo(window.scrollX, window.scrollY + 1);
    window.scrollTo(window.scrollX, window.scrollY - 1);
}

window.addEventListener('scroll', function () {
	var animatedElements = document.querySelectorAll('[animate]');
	for (let i = 0; i < animatedElements.length; i++) {
		if (inViewport(animatedElements[i])) {
			animatedElements[i].classList.add('show');
		}
	}
});