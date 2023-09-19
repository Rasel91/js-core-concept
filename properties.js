var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 2,
    mouse: 4,
    pen: 5
}
 
/* 
* 1. Part Of the first name of an array element called KEYS. Such as : books:3'
here are books is the Keys of shoppingCart and 3 is vales 
* 2. Find the element of an array . Describes below
 */

// When you Know the specific property name, use . use dot notation to get the property value

var penCount = shoppingCart.pen;

/* console.log(penCount) */

// Alternative System
// When you Know the specific property name, use . use dot notation to get the property value
var penCount2= shoppingCart['pen'];
/* console.log(penCount2) */

//Find the keys of an objects  Use keys 
var properitesKeys = Object.keys(shoppingCart);

console.log(properitesKeys)
//Find the Values of an objects  Use Values
var properitesVlaues = Object.values(shoppingCart);

console.log(properitesVlaues)
 
// console.log(shoppingCart)