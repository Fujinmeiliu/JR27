let shoppingList = ["milk", "egg", "bread"];
shoppingList.push("apple", "banana");
console.log("afterAdd: ", shoppingList)

let removedItem =shoppingList.pop();
console.log("Deleted: ", removedItem);
console.log("afterDelete ", shoppingList);

function checkCart(list) {
    if (list.lenth >5 ) {
        console.log("The shopping cart is full");
    }
}
checkCart(shoppingList);

// forEach loop through shoppinglist item and print with index
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}.${item}`);
});


// to check if the item in list
function isInList(item) {
    return shoppingList.includes(item);
}


