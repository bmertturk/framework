export const Helpers = {

	getHtml(html) {
		return fetch(html).then(response => response.text());
	}

}