function duckduckgo() {
	client
	    .init()
	    .url('https://duckduckgo.com/')
	    .setValue('#search_form_input_homepage', 'WebdriverIO')
	    .click('#search_button_homepage');
}

var button = document.querySelector('button');
button.addEventListener('click', duckduckgo);
	