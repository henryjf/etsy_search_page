import $ from 'jquery';
import etsyImages from './etsyinfo';

var prod = $('.products');
var items = etsyImages.results;

items.forEach(function(item){
  var image = item.Images[0].url_170x135;

  items.forEach(function(item){
    var title= item.title;
  });

  items.forEach(function(item){
    var shop_name = item.Shop.shop_name;
  });

  items.forEach(function(item){
    var price = item.price;
  });


  var imageArea = `
  <div class="imageArea">
  <img class="images" src="${item.Images[0].url_170x135}"alt="">
  <h4>${item.title}</h4>
  <a href="#">${item.Shop.shop_name}</a>
  <span>${item.price}</span>
  </div>
  `

  prod.append(imageArea);
 });
