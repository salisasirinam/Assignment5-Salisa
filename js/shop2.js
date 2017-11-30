// // var ;
// // var price=10;
// // var quantity=3;
// // var totalPrice= price*quantity;

// // document.getElementById("customer-name").innerHTML = "Chaky";
// // document.getElementById("price").innerHTML = "$" + totalPrice;


var shop = {
    customerName: "Chaky",
    totalPrice: 0,
    products: [
        "Pizza",
        "Naan",
        "Sourdough",
        "Foccacia",
        "iPhone X"
    ],
    price: [40, 10, 20, 80, 1000],

    displayCustomerName: function() {
        var customerElement = document.getElementById("customer-name");
        customerElement.innerHTML = this.customerName;
    },

    displayProductList: function() {
        var productsText = "";
        var productsElement = document.getElementById("product-list");

        for (var i = 0; i < 5; i++) {
            productsText = productsText + "<li class='list-group-item'>" + this.products[i] + "<span class='badge'>$" + this.price[i] + "</span></li>";
        }
        productsElement.innerHTML = productsText;
    },

    totalPrice: function() {
        var total = 0;
        var totalPrice = document.getElementById("price");

        for (var i = 0; i < 5; i++) {
            total += this.price[i];
        }
        totalPrice.innerHTML = "$" + total + " <span class='badge progress-bar-info'>25% off</span>";
    },
}
shop.displayCustomerName();
shop.displayProductList();
shop.totalPrice();


// var discount = total*0.75;

// var day = new Date(); //get 1-31
// var hr = day.getHours(); //get 0-23

// if (hr>=6 && hr<12){
//  document.getElementById("sayhi").innerHTML = "Good Morning, <span id='customer-name'>Salisa</span>!";
// } 
// else if (hr>=12 && hr<18){
//  document.getElementById("sayhi").innerHTML = "Good Afternoon, <span id='customer-name'>Salisa</span>!";
// }
// else {
//  document.getElementById("sayhi").innerHTML = "Good Evening, <span id='customer-name'>Salisa</span>!";
// }