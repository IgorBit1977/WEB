'use strict';

(function () {

    function Product(name, price, expirationDate) {
        this.id = (function () { return Math.floor(Math.random() * Math.floor(100000)) })();
        this.name = name;
        this.price = parseInt(price.toFixed(2));
        this.expirationDate = new Date(expirationDate);


        this.getInfo = function () {
            var info = '';
            info = this.name[0].toUpperCase();
            info += this.name[this.name.length - 1].toUpperCase();
            info += this.id;
            return info;
        }
    }

    function ShopingBag() {
        this.products = [];
        this.addProduct = function (newProduct) {
            if (newProduct.expirationDate > new Date()) {
                this.products.push(newProduct);
            }
        }
        this.mostExpensive = function () {
            var sumOfPrice = 0;
            for (var i = 0; i < this.products.length; i++) {
                sumOfPrice += this.products[i].price;
            }
            return sumOfPrice / this.products.length;
        }
        this.calculateTotalPrice = function () {
            var sumOfPrice = 0;
            for (var i = 0; i < this.products.length; i++) {
                sumOfPrice += this.products[i].price;
            }
            return sumOfPrice;
        }

    }



    function PaymentCard(accountBalance, validDate) {

        this.accountBalance = accountBalance;
        this.isActive = function () {
            if (validDate < new Date()) {
                return false;
            }
            return true;
        };
        this.validDate = new Date(validDate);
    }

    function checkoutAndBuy(shopingBag, paymentCard) {
        if (paymentCard.validDate) {
            if (shopingBag.calculateTotalPrice() <= paymentCard.accountBalance) {
                console.log('Purchase is successful');
            } else {
                var total = shopingBag.calculateTotalPrice() - paymentCard.accountBalance;
                console.log('Amount that is missing is: ' + total);
            }
        } else {
            console.log('Card is not valid!');

        }
    }





    // TEST!!!!
    var shopingBag = new ShopingBag();
    var banana = new Product('banana', 175, "2018,11,24");
    var kivi = new Product("kivi", 205, "2018,11,15");
    var kartica = new PaymentCard(1000, '2018,11,25');


    shopingBag.addProduct(banana);
    shopingBag.addProduct(kivi);

    checkoutAndBuy(shopingBag, kartica);




})();

