function Products(_id, title, price, image, desc, discount) {
  this.id = _id;
  this.title = title;
  this.price = price;
  this.image = image;
  this.description = desc;
};

let product1 = new Products(1,'Clothes',100,'sundarImage.png','bht hi oomda Kapda.');


console.log(product1);


// console.log([1,2,3,4]);

Products.prototype.getDiscount = function(){
  return `Discount : 10`;
}

Products.prototype.abcd = "abcd values"


let product2 = new Products(2,'Jwellery',100,'sundarImage.png','bht hi oomda.');

console.log(product1.getDiscount());
console.log(product2.abcd);