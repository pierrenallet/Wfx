/// <reference path="index.ts"/>

class ShoppingCart {
	items = ["Apple", "Bannana", "Cocoa"];
}
new Wfx.Application().run(new ShoppingCart(), Sample.shoppingCartTemplate);