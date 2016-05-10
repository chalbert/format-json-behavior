import registerBehavior from 'register-behavior';

function JSONFormatter(value) {
	try {
		return JSON.stringify(value, null, 2);
	} catch (e) {
		console.warn('Could not format JSON');
		return '';
	}
}

export default registerBehavior('format-json', {
	prototype: {
		attachedCallback() {
			this.target.formatter = JSONFormatter;
			this.target.innerHTML = this.target.formatter(this.target.innerHTML);
			this.target.style.whiteSpace = 'pre';
		},

		detachedCallback() {
			delete this.target.formatter;
		}
	}
});
