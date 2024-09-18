// OOP Shopping Cart
class CartItems{
    constructor(){
        this.id = document.querySelectorAll(".cart");
        this.name = document.querySelectorAll(".card-title");
        this.price = [100, 20, 50]
        this.plus = document.querySelectorAll(".fa-plus-circle");
        this.minus = document.querySelectorAll(".fa-minus-circle");
        this.del = document.querySelectorAll(".fa-trash-alt");
        this.like = document.querySelectorAll(".fa-heart");
        this.result = document.querySelector(".total");
    }
}
class ShoppingInstances extends CartItems{
    constructor() {
        super();
        this.cartTotal = [];
    }
}

class ShoppingCart extends ShoppingInstances{
    constructor(){
        super();
        this.product = document.querySelectorAll(".card");
        this.cart = document.querySelectorAll(".cart");
        this.quantity = document.querySelectorAll(".quantity");
    }
    addQuantity() {
        const add = Array.from(this.plus);
        for (let i = 0; i < add.length; i++) {
            add[i].addEventListener("click", () => {
                this.quantity[i].textContent++;
                this.cartTotal.push(this.price[i]);
                const sum = this.cartTotal.reduce((a, b) => a + b, 0);
                this.result.textContent = `${sum} $`;
            });
        }
    }
    subQuantity() {
        const sub = Array.from(this.minus);
        for (let i = 0; i < sub.length; i++) {
            sub[i].addEventListener("click", () => {
                if (this.quantity[i].textContent > 0) {
                    this.quantity[i].textContent--;
                    this.cartTotal.splice(this.cartTotal.indexOf(this.price[i]), 1);
                    const sum = this.cartTotal.reduce((a, b) => a + b, 0);
                    this.result.textContent = `${sum} $`;
                }
            });
        }
    }
    delQuantity() {
        for (let i = 0; i < this.del.length; i++) {
            this.del[i].addEventListener("click", () => {
                this.cart[i].remove();
                this.del.length - 1;
                this.cartTotal.splice(
                    this.cartTotal.indexOf(this.price[i]),
                    this.cartTotal.filter((item) => item == this.price[i]).length
                );
                this.result.textContent = `${this.cartTotal.reduce(
                    (a, b) => a + b,
                    0
                )} $`;
                if (this.del.length == 0) {
                    window.reload();
                }
            });
        }
    }
    likeReaction() {
        for (let i = 0; i < this.like.length; i++) {
            this.like[i].addEventListener("click", () => {
                this.like[i].style.color = "red";
            });
            this.like[i].addEventListener("dblclick", () => {
                this.like[i].style.color = "black";
            });
        }
    }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addQuantity();
shoppingCart.delQuantity();
shoppingCart.likeReaction();
shoppingCart.subQuantity()

// Functional Programming Shopping Cart
/* const plus = document.querySelectorAll(".fa-plus-circle");
const minus = document.querySelectorAll(".fa-minus-circle");
const del = document.querySelectorAll(".fa-trash-alt");
const like = document.querySelectorAll(".fa-heart");
const quantity = document.querySelectorAll(".quantity");
let price = [100, 20, 50];
const result = document.querySelector(".total");
let cartTotal = []

const cart = document.querySelectorAll(".cart");
function addQuantity(quantity) {
    const add = Array.from(plus);
    for (let i = 0; i < add.length; i++) {
        add[i].addEventListener("click", () => {
            quantity[i].textContent++;
            cartTotal.push(price[i]);
            const sum = cartTotal.reduce((a, b) => a + b, 0)
            result.textContent = `${sum} $`;
        });
    }
}

addQuantity([...quantity]);
function subQuantity(quantity) {
    const sub = Array.from(minus);
    for (let i = 0; i < sub.length; i++) {
        sub[i].addEventListener("click", () => {
            if (quantity[i].textContent > 0) {
                quantity[i].textContent--;
                cartTotal.splice(cartTotal.indexOf(price[i]), 1);
                const sum = cartTotal.reduce((a, b) => a + b, 0)
                result.textContent = `${sum} $`;
            }
        });
    }
}
subQuantity([...quantity]);
function delQuantity(del) {
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener("click", () => {
            cart[i].remove();
            del.length--;
            cartTotal.splice(cartTotal.indexOf(price[i]), cartTotal.filter(item => item == price[i]).length);
            result.textContent = `${cartTotal.reduce((a, b) => a + b, 0)} $`;
            if (del.length == 0) {
                location.reload();
            }
        });
    }
}
delQuantity([...del]);
function likeReaction(like) {
    for (let i = 0; i < like.length; i++) {
        like[i].addEventListener("click", () => {
            like[i].style.color = "red";
        });
        like[i].addEventListener("dblclick", () => {
            like[i].style.color = "black";
        });
    }
}
likeReaction([...like]); */