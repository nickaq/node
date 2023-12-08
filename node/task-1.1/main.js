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
  this.getAverageRating = function () {
    const RAITING_VALUES = 4;
    let countAverageRating = 0;
    for (let i = 0; i < this.reviews.length; i++) {
      countAverageRating += this.reviews[i].rating.get('service');
      countAverageRating += this.reviews[i].rating.get('price');
      countAverageRating += this.reviews[i].rating.get('value');
      countAverageRating += this.reviews[i].rating.get('quality');
    }
    return (countAverageRating / (this.reviews.length * RAITING_VALUES)).toFixed(1);
  };
};
function Review(r_id, author, date, comment, rating) {
  this.r_id = r_id;
  this.author = author;
  this.r_date = new Date(date);
  this.comment = comment;
  this.rating = new Map([
    ['service', rating.service],
    ['price', rating.price],
    ['value', rating.value],
    ['quality', rating.quality]
  ]);

  this.getR_ID = () => this.r_id;
  this.setR_ID = (newR_ID) => this.r_id = String(newR_ID);
  this.getAuthor = () => this.author;
  this.setAuthor = (newAuthor) => this.author = newAuthor;
  this.getR_Date = () => this.r_date;
  this.setR_Date = (newR_Date) => this.r_date = newR_Date;
  this.getComment = () => this.comment;
  this.setComment = (newComment) => this.comment = newComment;
  this.getRating = () => this.rating;
  this.setRating = (newRaiting) => this.rating = new Map([
    ['service', newRaiting.service],
    ['price', newRaiting.price],
    ['value', newRaiting.value],
    ['quality', newRaiting.quality]]);
};
 
function sortProducts(products, sortRule) {
  let sortedProducts = [];
  if (sortRule.toLowerCase() == "price") {
    products = products.sort((a, b) => b.price - a.price).forEach(product => sortedProducts.push(product.price));
    return sortedProducts;
  } else if (sortRule.toLowerCase() == "name") {
    products = products.sort((a, b) => a.name.localeCompare(b.name)).forEach(product => sortedProducts.push(product.name));
    return sortedProducts;
  } else if (sortRule.toLowerCase() == "id") {
    products = products.sort((a, b) => a.id - b.id).forEach(product => sortedProducts.push(product.id))
    return sortedProducts;
  } else {
    return sortedProducts;
  }
}

function searchProducts(products, search) {
  let searchedProducts = [];
  for (let product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      searchedProducts.push(product.name);
    };
    if (product.description.toLowerCase().includes(search.toLowerCase())) {
      searchedProducts.push(product.description);
    };
  }
  return searchedProducts;
}
