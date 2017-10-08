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
	var newItem = {};   //create object
	newItem.name = $("#newItemName").val();
	currentList.items.push(newItem);
	console.info(currentList);

	drawItems();
}

function drawItems() {
	var $list = $("#shoppingListItems").empty();  //jquery element

	for (var i = 0; i < currentList.items.length; i++) {
		var currentItem = currentList.items[i];
		var $li = $("<li>").html(currentItem.name)
			.attr("id", "item_" + i); //attribute -> id, name, curIndex
		var $deleteBtn =
			$("<button onclick='deleteItem(" + i + ")'>D</button>").appendTo($li);
		var $checkBtn =
			$("<button onclick='checkItem(" + i + ")'>C</button>").appendTo($li); //do not forget "'"!

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
			var m = "clicked: " + key;
			window.console && console.log(m) || alert(m);
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

