//simple shopping list
let currentList = {};

function createShoppingList() {
	currentList.name = $("#shoppingListName").val();
	currentList.items = new Array();
	//Web Service Call

	$("#shoppingListTitle").html(currentList.name);  // we want to change all html list
	$("#shoppingListItems").empty(); //we want sen any items first

	//we want tj hide first vew (div) and show the second one(div):

	$("#createListDiv").hide();
	$("#shoppingListDiv").show();
}

function addItem() {
	let newItem = {};   //create object
	newItem.name = $("#newItemName").val();
	currentList.items.push(newItem);
	console.info(currentList);

	drawItems();
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

function checkItem(index) {
	if ($("#item_" + index).hasClass("checked")) {     //if it is checked, when you push again C
		$("#item_" + index).removeClass("checked");    // it must stand unchached
	}
	else {
		$("#item_" + index).addClass("checked");    //add css class to that DOM elem
	}                                            //look style css -> .checked
}

$(document).ready(function () {
	console.info("ready");
});


//categorieas

$(function () {
	$.contextMenu({
		selector: '.context-menu-one',
		callback: function (key, options) {
			let m = "clicked: " + key;

			window.console && console.log(m) || alert(m);

			//function addItemFromCategories() {
				let newItem = {};   //create object
				newItem.name = key;
				currentList.items.push(newItem);
				console.info(currentList);

				drawItems();
			//}

		},
		items: {
			"potatoes": { name: "Potatoes" },
			"tomatoes": { name: "Tomatoes" },
			"cucumber": { name: "Cucumber" },
			"peppers": { name: "Peppers" },
			"potatoes": { name: "Potatoes" },
			//"sep1": "---------",
			//"quit": {
			//	name: "Quit", icon: function () {
			//		return 'context-menu-icon context-menu-icon-quit';
			//	}
			//}
		}
	});
	
	$('.context-menu-one').on('click', function (e) {
		console.log('clicked', this);
	})
});

$(function () {
	$.contextMenu({
		selector: '.context-menu-two',
		callback: function (key, options) {
			let m = "clicked: " + key;
			window.console && console.log(m) || alert(m);
		},
		items: {
			"apples": { name: "Apples" },
			"pears": { name: "Pears" },
			"bananas": { name: "Bananas" },
			"oranges": { name: "Oranges" },
			"grapes": { name: "Grapes" },
		}
	});
	$('.context-menu-one').on('click', function (e) {
		console.log('clicked', this);
	})
});

$(function () {
	$.contextMenu({
		selector: '.context-menu-three',
		callback: function (key, options) {
			let m = "clicked: " + key;
			window.console && console.log(m) || alert(m);
		},
		items: {
			"whole": { name: "Whole grain bread" },
			"wheat": { name: "Wheat bread" },
			"corn": { name: "Cornbread" },
			"dough": { name: "Dough" },
		}
	});
	$('.context-menu-one').on('click', function (e) {
		console.log('clicked', this);
	})
});

$(function () {
	$.contextMenu({
		selector: '.context-menu-four',
		callback: function (key, options) {
			let m = "clicked: " + key;
			window.console && console.log(m) || alert(m);
		},
		items: {
			"pork": { name: "Pork" },
			"chicken": { name: "Chicken" },
			"veal": { name: "Veal" },
			"mince": { name: "Mince" },
		}
	});
	$('.context-menu-one').on('click', function (e) {
		console.log('clicked', this);
	})
});