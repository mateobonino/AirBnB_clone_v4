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

const divStatus = document.getElementById('api_status');

async function statusRequest() {
  await fetch('http://localhost:5001/api/v1/status/')
  .then(response => {
    console.log(response.status);
    if (response.status === 200) {
      divStatus.classList.add('available');
    } else {
      divStatus.classList.remove('available');
    }
  })
  .catch(error => {
    console.log(error);
  });
}

statusRequest();