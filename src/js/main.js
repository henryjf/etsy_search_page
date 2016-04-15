import $ from 'jquery';
import etsyImages from './etsyinfo';

console.log(etsyImages.results);

var prod = $('.products');
var items = etsyImages.results;

items.forEach(function(item){
  var image = item.Images[0].url_170x135;
  console.log(image);
// })

console.log(items);
  // return etsyImages.results.image.url_170x135;
// });


// items.forEach (function(image) {
// console.log(image.url_170x135)
  var imageArea = `
  <div class="imageArea">
  <img class="images" src="${item.Images[0].url_170x135}">
  <h6>${items.title}</h6>
  </div>
  `

  prod.append(imageArea);
 });
