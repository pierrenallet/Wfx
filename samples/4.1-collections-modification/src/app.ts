/// <reference path="index.ts"/>

class ShoppingCart {
	items = ["Apple", "Bannana", "Cocoa"];
	newItem = "";
	addItem() {
		this.items.push(this.newItem);
		this.newItem = "";
	}
	removeLast() {
		this.items = this.items.splice(this.items.length - 1);
	}
}
new Wfx.Application().run(new ShoppingCart(), Sample.shoppingCartTemplate);