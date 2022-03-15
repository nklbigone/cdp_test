const idElement = document.getElementById("product");
const numberElement = document.getElementById("number");
const products = [
  {
    id: "1",
    name: "Original blend 200g",
    price: 500,
  },
  {
    id: "2",
    name: "Original blend 500g",
    price: 900,
  },
  {
    id: "3",
    name: "Special Blend 200g",
    price: 700,
  },
  {
    id: "4",
    name: "Special Blend 500g",
    price: 1200,
  },
];
let purchases = [];

function add() {
    let purchase;
    const number = numberElement.value;
    products.forEach(element => {
        if(element.id === idElement.value) {
            purchase = {
                id: element.id,
                name: element.name,
                price: element.price,
                number: parseInt(number)
            };
        }
    })
    const newPurchase = purchases.findIndex((item) => item.id === purchase.id)
    if (purchases.length < 1 || newPurchase === -1) {
        purchases.push(purchase);
    } else {
        purchases[newPurchase].number += purchase.number;
    }
    window.alert(`${display()}\n\n subtotal ${subtotal()}`);
    idElement.value = "";
    numberElement.value = "";
}

function display() {
    return purchases.map(purchase => {
        return `${purchase.name}  ${purchase.price}: ${purchase.number}`;
    }).join("\n");
}
function subtotal() {
    return purchases.reduce((prev, purchase) => {
        return prev + purchase.price * purchase.number
    }, 0);
}

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(
      `${display()}\n\n Subtotal is ${sum} shipping cost is ${postage} The total is ${
        sum + postage
      }RWF`
    );
    purchases = [];
}

function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
        return 0;
    } else if (sum < 1000) {
        return 500;
    } else {
        return 250;
    }
}