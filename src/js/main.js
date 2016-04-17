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
  })
  // console.log(item.title);

// console.log(items);
  var imageArea = `
  <div class="imageArea">
  <img class="images" src="${item.Images[0].url_170x135}"alt="">
  <h4>${item.title}</h4>
  </div>
  `
  // for(var i = 0; i < 16; i ++);
  // return i = imageArea;
  // console.log(imageArea);
  prod.append(imageArea);
 });
