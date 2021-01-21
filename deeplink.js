function onDeep(source) {
	var appFallback = '',
		androidApp = '',
		iosApp = '';
	switch (source) {
		case 'yt':
			(appFallback = 'https://www.youtube.com/HappyDeveloper'),
				(androidApp =
					'intent://www.youtube.com/channel/UCeoFeWoQNHozbRmwuPCLcQg#Intent;package=com.google.android.youtube;scheme=https;end'),
				(iosApp = 'vnd.youtube://www.youtube.com/channel/UCeoFeWoQNHozbRmwuPCLcQg');
			break;
		case 'chrome':
			(appFallback = 'https://ashkanam.ir/blog/videos/'),
				(androidApp = 'https://ashkanam.ir/blog/videos/'),
				(iosApp = 'https://ashkanam.ir/blog/videos/');
			break;
	}

	if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		window.location = iosApp;
		window.setTimeout(function () {
			window.location = appFallback;
		}, 25);
	} else if (/Android/i.test(navigator.userAgent)) {
		window.location = androidApp;
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
