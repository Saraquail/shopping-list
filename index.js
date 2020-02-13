'use strict';
/* eslint-disable indent */
// Insert the last time this page loaded for Live Server
$(() => {
  $('body').before(`<div>${new Date()}</div>`);
});

//when the document is loaded
$(document).ready(function () {
  // delete the item when the button is clicked
  $('.shopping-item-delete').on('click', function(event) {
    //closest looks for the closest ancestor above given element
    $(event.target).closest('li').remove();
  });
//closing document ready function
});

//strike-through the text of the item when the button is clicked
$(document).ready(function () {
  $('.shopping-item-toggle').on('click', function(event) {
    $(event.target).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
  });
});

//get value from text input

//add new li with text and buttons
$(document).ready(function () {
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault(); 
    let newItem = $('#shopping-list-entry').val();
    console.log(newItem);

    $('ul').prepend(`<li><span class="shopping-item">${newItem}</span>\
    <div class="shopping-item-controls">\
      <button class="shopping-item-toggle">\
        <span class="button-label">check</span>\
      </button>\
      <button class="shopping-item-delete">\
        <span class="button-label">delete</span>\
      </button>\
    </div></li>`);

  });
});


