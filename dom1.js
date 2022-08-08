/*var items = document.getElementsByTagName('li')
console.log(items)
console.log(items[1])
items[1].textContent = 'hello there'
items[1].style.fontWeight = 'bold'
items[2].style.backgroundColor = 'green'

for(var i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold'
}
var header = document.querySelector('#main-header')
header.getElementsByClassName.borderBottom = 'solid 4px #ccc'

var input = document.querySelector('input')
input.value = 'hello world'

var submit = document.querySelector('input[type="submit"]')
submit.value='send'

var item = document.querySelector('.list-group-item')
item.style.color = 'red'

var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue'

var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue'

var secondItem = document.querySelector('.list-group-item:nth-child(2)')
lastItem.style.color = 'coral'

var titles = document.querySelectorAll('.title')

var item2 = document.querySelectorAll('.list-group-item')
item2[1].style.backgroundColor = 'green'
item2[2].style.color = 'white'

var odd = document.querySelectorAll('li:nth-child(odd)')

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green'
}


var itemList = document.querySelector('#items')
console.log(itemList.parentNode)
itemList.parentElement.style.backgroundColor = '#f4f4f4'

console.log(itemList.children)
console.log(itemList.firstElementChild  )
 */

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}