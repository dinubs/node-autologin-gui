window.onload = function() {
	client.started = false;

	function duckduckgo() {
		if (!client.started) {
			initClient(function() {
				client.url('https://songfari.com/login')
			    .setValue('#email', 'email')
			    .setValue('#password', 'password')
					.submitForm("#form");
			});
		} else {
			client.url('https://songfari.com/login')
		    .setValue('#email', 'email')
		    .setValue('#password', 'password')
				.submitForm("#form");
		}
	}

	function initClient(cb) {
		client.init().then(function() {
			cb();
		});
		client.started = true;
	}

	var button = document.querySelector('button');
	button.addEventListener('click', duckduckgo);
}

