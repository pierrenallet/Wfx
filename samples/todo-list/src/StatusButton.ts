/// <reference path="index.ts" />

module Todo {
	export class StatusButton extends Wfx.Component {
		constructor(attributes: any) {
			super(attributes);
		}
		select() {
			this.data.status = this.getAttribute('status');
		}
	}
}