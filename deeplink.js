function onDeep(source) {
	var appFallback = '',
		app = '';
	switch (source) {
		case 'yt':
			(appFallback = 'https://www.youtube.com/HappyDeveloper'), (app = 'youtube://HappyDeveloper');
			break;
		case 'chrome':
			(appFallback = 'https://ashkanam.ir/blog/videos/'), (app = 'chrome://ashkanam.ir/blog/videos/');
			break;
	}

	if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		window.location = app;
		window.setTimeout(function () {
			window.location = appFallback;
		}, 25);
	} else {
		window.location = appFallback;
	}

	function killPopup() {
		window.removeEventListener('pagehide', killPopup);
	}

	window.addEventListener('pagehide', killPopup);
}
