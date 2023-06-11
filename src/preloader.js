function loader(arg) {
	if (!arg) {
        var preloader = document.getElementById('page-preloader');

		if (preloader.classList.contains('done')) {
			preloader.classList.remove('done');
		}
	} else if (arg){
		var preloader = document.getElementById('page-preloader');

		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}
}


document.body.onload = function() {
	setTimeout(loader, 1000, true);
}