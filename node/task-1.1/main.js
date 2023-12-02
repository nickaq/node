'use strict';

function Product() {
  this.id = '';
  this.name = '';
  this.description = '';
  this.price = 0.0;
  this.brand = '';
  this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  this.activeSize = '';
  this.quantity = 0;
  this.reviews = [];
  this.date = new Date();
  this.images = [];

  this.getID = () => this.id;
  this.setID = newID => this.id = String(newID);
  this.getName = () => this.name;
  this.setName = newName => this.name = String(newName);
  this.getDescription = () => this.description;
  this.setDescription = newDescription => this.description = String(newDescription);
  this.getPrice = () => this.price;
  this.setPrice = newPrice => this.price = Number(newPrice.toFixed(2));
  this.getBrand = () => this.brand;
  this.setBrand = newBrand => this.brand = String(newBrand);
  this.getActiveSize = () => this.activeSize;
  this.setActiveSize = newActiveSize => this.activeSize = newActiveSize;
  this.getQuantity = () => this.quantity;
  this.setQuantity = newQuantity => this.quantity = Number(newQuantity);
  this.getDate = () => this.date;
  this.setDate = newDate => this.date = newDate;
  this.getImages = () => this.images;
  this.setImages = newImages => this.images = newImages;
  this.addReview = review => this.reviews.push(review);
  this.getReviews = () => this.reviews;
  this.deleteReview = (r_id) =>
    this.reviews.splice(this.reviews.findIndex(id => id.r_id === r_id), 1);
  this.getImage = function (image) {
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i] === image) return image;
    }
    return undefined;
  };
  this.addSize = function (size) {
    if (this.sizes !== size) this.sizes.push(size);
  }
  this.getSizes = () => this.sizes;
  this.deleteSize = function (size) {
    for (let i = 0; i < this.sizes.length; i++) {
      if (this.sizes[i] === size) this.sizes.splice(this.sizes[i], 1);
    };
  }
  // this.getAverageRating = function ( ) {
  //     this.reviews.rating
  // };
};
function Review(r_id, author, date, comment, rating) {
  this.r_id = r_id;
  this.author = author;
  this.date = new Date(date);
  this.comment = comment;
  this.rating = new Map([
    ['service', rating.service],
    ['price', rating.price],
    ['value', rating.value],
    ['quality', rating.quality]
  ]);
};
let review1 = new Review('1', 'Mykyta Fesenko', '2023-12-01', 'Great product!', { service: 5, price: 4, value: 4, quality: 5 });
let review2 = new Review('2', 'Alex Frost', '2012-12-22', 'Das ist schon', { service: 2, price: 3, value: 1, quality: 4 });
let shirt = new Product();
// console.log(shirt.setID(123));
shirt.addReview(review1);
shirt.addReview(review2);
shirt.setImages(['heelo.jpg', 'black.jpg', 'whiteshirt.jpg']);
// console.log(shirt.getImage('whiteshirt.jpg'));
shirt.deleteReview('1');
shirt.addSize("XXXL");
shirt.deleteSize("XS");
// console.log(shirt.getSizes());


// console.log(shirt.reviews);
// shirt.serPrice = 10.00;
// shirt.setActiveSize = "L";
// shirt.setBrand = "Zara";
// shirt.setDescription = "Oversize";
// shirt.setQuantity = 15;
// shirt.setDate = Date.now;
// shirt.setImages = ["blackShirt.jpg", "whiteShirt.png"];
