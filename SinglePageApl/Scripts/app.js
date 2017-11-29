'use strict'

//simple shopping list
let currentList = {};

function createShoppingList() {
	currentList.name = $("#shoppingListName").val();
	currentList.items = new Array();
	//Web Service Call

	showShoppingList();
}
	

function showShoppingList() {
	$("#shoppingListTitle").html(currentList.name);  // we want to change all html list
	$("#shoppingListItems").empty(); //we want sen any items first

	//we want tj hide first vew (div) and show the second one(div):

	$("#createListDiv").hide();
	$("#shoppingListDiv").show();
	console.info("ready");

	$("#newItemName").focus();   /* когато се зареди курсура да е там*/
	$("#newItemName").keyup(function (event) {
		if (event.keyCode == 13) {          /*  return*/
			addItem();
			const neshto = 4
		}
	});

}


function addItem() {
	let newItem = {};   //create object
	newItem.name = $("#newItemName").val();
	currentList.items.push(newItem);
	console.info(currentList);

	drawItems();
	$("#newItemName").val("");  /*empty string*/
}


function drawItems() {
	let $list = $("#shoppingListItems").empty();  //jquery element

	for (let i = 0; i < currentList.items.length; i++) {
		let currentItem = currentList.items[i];
		let $li = $("<li>").html(currentItem.name)
			.attr("id", "item_" + i); //attribute -> id, name, curIndex
		//var $countBtn =
		//	$("<button onclick='count(" + i + ")'>count</button>").appendTo($li);
		let $deleteBtn =
			$("<button onclick='deleteItem(" + i + ")'>Delete</button>").appendTo($li);
		let $checkBtn =
			$("<button onclick='checkItem(" + i + ")'>Check</button>").appendTo($li); //do not forget "'"!
		$li.appendTo($list);
	}                                                           //56 min
}


function deleteItem(index) {
	currentList.items.splice(index, 1);  //remove the item
	drawItems();                         // see the result
}

//this is closure- func return obj and he have access to this func promenlive
function checkItem(index) {
	let myvar = 3;
	if ($("#item_" + index).hasClass("checked")) {     //if it is checked, when you push again C
		$("#item_" + index).removeClass("checked");    // it must stand unchached
	}
	else {
		$("#item_" + index).addClass("checked");    //add css class to that DOM elem
	}

	return {
		objvar: myvar
	}//look style css -> .checked
}

function getShoppingListById(id){
	console.info(id);

	currentList.name = "Mock Shopping List";
	currentList.items = [
		{ name: "Milk" },
		{ name: "Corn" },
		{ name: "Strawberries" }
	];

	showShoppingList();
	drawItems();
}


$(document).ready(function () {
	console.info("ready");

	$("#shoppingListName").focus();   /* когато се зареди курсура да е там*/
	$("#shoppingListName").keyup(function (event) {
		if (event.keyCode == 13) {          /*  return*/
			createShoppingList();
		}                   
	});

	let pageURL = window.location.href;
	let idIndex = pageURL.indexOf("?id=");
	if (idIndex != -1) {
		getShoppingListById(pageURL.substring(idIndex + 4));
	}
});


//categories

$(function () {
	$.contextMenu({
		selector: '.context-menu-one',
		callback: function (key, options) {
			let m = "clicked: " + key;

			//window.console && console.log(m) || alert(m);

			//function addItemFromCategories() {
			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();
			//}

		},
		items: {
			"Potatoes": { name: "Potatoes" },
			"Tomatoes": { name: "Tomatoes" },
			"Cucumber": { name: "Cucumber" },
			"Peppers": { name: "Peppers" },
			"Potatoes": { name: "Potatoes" },
			//"sep1": "---------",
			//"quit": {
			//	name: "Quit", icon: function () {
			//		return 'context-menu-icon context-menu-icon-quit';
			//	}
			//}
		}
	});

	//$('.context-menu-one').on('click', function (e) {
	//	console.log('clicked', this);
	//})
});

$(function () {
	$.contextMenu({
		selector: '.context-menu-two',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Apples": { name: "Apples" },
			"Pears": { name: "Pears" },
			"Bananas": { name: "Bananas" },
			"Oranges": { name: "Oranges" },
			"Grapes": { name: "Grapes" },
		}
	});
});

$(function () {
	$.contextMenu({
		selector: '.context-menu-three',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Whole Grain Bread": { name: "Whole Grain Bread" },
			"CornBread": { name: "CornBread" },
			"Wheat Bread": { name: "Wheat Bread" },
			"Dough": { name: "Dough" },

		}
	});
});

$(function () {
	$.contextMenu({
		selector: '.context-menu-four',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Chicken": { name: "Chicken" },
			"Pork": { name: "Pork" },
			"Veal": { name: "Veal" },
			"Mince": { name: "Mince" },
		}
	});
});


$(function () {
	$.contextMenu({
		selector: '.context-menu-five',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Frankfurters": { name: "Frankfurters" },
			"Fillet": { name: "Fillet" },
			"Ham": { name: "Ham" },
			"Bacon": { name: "Bacon" },

		}
	});
});
$(function () {
	$.contextMenu({
		selector: '.context-menu-six',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Milk": { name: "Milk" },
			"Yoghurt": { name: "Yoghurt" },
			"Cheese": { name: "Cheese" },
			"Yellow Cheese": { name: "Yellow Cheese" },

		}
	});
});
$(function () {
	$.contextMenu({
		selector: '.context-menu-seven',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Almonds": { name: "Almonds" },
			"Peanuts": { name: "Peanuts" },
			"Sunflower seeds": { name: "Sunflower seeds" },
			"Hazelnuts": { name: "Hazelnuts" },
		}
	});
});
$(function () {
	$.contextMenu({
		selector: '.context-menu-eight',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Brandy": { name: "Brandy" },
			"Wine": { name: "Wine" },
			"Beer": { name: "Beer" },
			"Gin": { name: "Gin" },
			"Vodka": { name: "Vodka" },
		}
	});
});
$(function () {
	$.contextMenu({
		selector: '.context-menu-nine',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Coke": { name: "Coke" },
			"Fanta": { name: "Fanta" },
			"Sprite": { name: "Sprite" },
		}
	});
});
$(function () {
	$.contextMenu({
		selector: '.context-menu-ten',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Wafer": { name: "Wafer" },
			"Chocolate": { name: "Chocolate" },
			"Biscuits": { name: "Biscuits" },
		}
	});
});
$(function () {
	$.contextMenu({
		selector: '.context-menu-eleven',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Herbal Tea": { name: "Herbal Tea" },
			"Black Tea": { name: "Black Tea" },
			"Coffee": { name: "Coffee" },
			"3 in 1": { name: "3 in 1" },
		}
	});
});

$(function () {
	$.contextMenu({
		selector: '.context-menu-twelve',
		callback: function (key, options) {
			let m = "clicked: " + key;

			let newItem = {};   //create object
			newItem.name = key;
			currentList.items.push(newItem);
			console.info(currentList);

			drawItems();

		},
		items: {
			"Napkins": { name: "Napkins" },
			"Toothpicks": { name: "Toothpicks" },
		}
	});
});

//$(".help-tip").hover(function () {
//	$("#iframe_id").show();
//	console.log('><L?K');
//});

