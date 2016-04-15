import $ from 'jquery';
import etsyImages from './etsyinfo';

console.log(etsyImages.results);

// var cont = $('.container');
var items = etsyImages.results;

console.log(items);
//   return etsyImages.results.image.url_170x135;
// });
// console.log(results)
//
items.forEach (function(image) {
console.log(image.url_170x135)
//   var imageArea = `
//   <div class="imageArea">
//   <img src="${image.url_170x135}">
//   <h6>${etsyImages.results.title}</h6>
//   </div>
//   `
//
//   results.append(imageArea);
 });
