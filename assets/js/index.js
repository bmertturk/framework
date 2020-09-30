import {main} from './globals';
import {Helpers as helpers} from './helpers';


const app = {
	init() {
		helpers.getHtml('elements.html').then(dom => {
			main.innerHTML = dom;
		});
	}
}

app.init();