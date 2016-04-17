import $ from 'jquery';
import etsyImages from './etsyinfo';

// console.log(etsyImages.results);

var prod = $('.products');
var items = etsyImages.results;

items.forEach(function(item){
  var image = item.Images[0].url_170x135;
  // console.log(image);

  items.forEach(function(item){
    var title= item.title;
  });

  items.forEach(function(item){
    var shop_name = item.Shop.shop_name;
  });
// console.log(shop_name);
  items.forEach(function(item){
    var price = item.price;
  });
  // console.log(item.title);

// console.log(items);
  var imageArea = `
  <div class="imageArea">
  <img class="images" src="${item.Images[0].url_170x135}"alt="">
  <h4>${item.title}</h4>
  <a href="#">${item.Shop.shop_name}</a>
  <span>${item.price}</span>
  </div>
  `
  // <a href="#">Jewelry</a>
  // for(var i = 0; i < 16; i ++);
  // return i = imageArea;
  // console.log(imageArea);
  prod.append(imageArea);
 });
