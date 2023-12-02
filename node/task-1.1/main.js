'use strict';

function Product() {
  this.id = '';
  this.name = '';
  this.description = '';
  this.price = 0.0;
  this.brand = '';
  this.sizes = [];
  this.activeSize = '';
  this.quantity = 0;
  this.date = Date;
  this.reviews = ;
  this.images = [];

  this.getID = () => this.id;
  this.setID = newID => this.id = String(newID);
  this.getName = () => this.name;
  this.setName = newName => this.name = String(newName);
  this.getDescription = () => this.description;
  this.setDescription = newDescription => this.description = String(newDescription);
  this.getPrice = () => this.price;
  this.setPrice = newPrice => this.price = Number(newPrice).toFixed(2);
  this.getBrand = () => this.brand;
  this.setBrand = newBrand => this.brand = String(newBrand);
  this.getActiveSize = () => this.activeSize;
  this.setActiveSize = newActiveSize => this.activeSize = newActiveSize;
  this.getQuantity = () => this.quantity;
  this.setQuantity = newQuantity => this.quantity = Number(newQuantity);
  this.getDate = () => this.date;
  this.setDate = newDate => this.date = newDate;
  this.getReviews = () => this.reviews;
  this.setReviews = newReviews => this.reviews = newReviews;
  this.getImages = () => this.images;
  this.setImages = newImages => this.images = newImages;
}; 


let shirt = new Product();
shirt.setID(123);
console.log(typeof shirt.getID());