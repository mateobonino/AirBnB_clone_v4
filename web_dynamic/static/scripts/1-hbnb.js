#!/usr/bin/node
const checkboxes = Array.prototype.slice.call(document.getElementsByTagName('input'));
const heading = document.getElementById('h4-id');
let dict = {};
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', function(data) {
    if (checkbox.checked === true) {
      dict[checkbox.getAttribute('data-id')] = checkbox.getAttribute('data-name');
    } else {
      delete dict[checkbox.getAttribute('data-id')];
    }
    heading.innerHTML = Object.values(dict).join(', ');
  })
});
