// // Using querySelector to select the second list item
// var secondItem = document.querySelector('#items li:nth-child(2)');



// // Adding a green background color
// secondItem.style.backgroundColor = 'green';



// // var items = document.querySelectorAll('#items');



// var itemsContainer = document.querySelector('#items');

// create a div
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');



// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);







// console.log(itemsContainer.children.lastChild[0].textContent);



//Sibling element  of itemsContainer

// console.log(itemsContainer.nextElementSibling);

// console.log(itemsContainer.children[0].textContent);

// Traversing the list items and logging their text content
// itemsContainer.querySelectorAll('li').forEach(function (it) {
//     console.log(it.textContent);
// });





// itemsContainer.querySelectorAll('.list-group-item').forEach(function (it) {
//     console.log(it.textContent);
// });
//     console.log(it.childElementCount);




// var itemList = Array.from(itemsContainer.children);
// itemList.forEach(Element => {
//     console.log(Element.textContent);
// });



// var itemList = itemsContainer.children;
// console.log(itemList[0].textContent);




// console.log(itemsContainer.children);





// JAVASCRIPT PART  3       BY      SIR





// Normal Button Clicked & console

// var button = document.getElementById('button').addEventListener('click', function () {
//     console.log(123)
// });



// ADDING SOME FUNCTION ON BUTTON WHILE CLICKED IT


// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick() {
//     document.getElementById('header-title').style.color = 'blue';
// }

// SAME THE ABOVE

// function buttonClick() {
//     var headerTitle = document.getElementById('header-title');
//     headerTitle.style.color = 'blue';
// }




// USING EVENT(e) IN FUNCTION


// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {

//     // console.log(e);
//     // console.log('hi');
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);

//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';

//     // console.log(e.type);

//     // console.log(e.clientX);
//     // console.log(e.clientX);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.shiftKey);
//     // console.log(e.ctrlKey);



// }




// var itemInput = document.querySelector('input[type="text"]');

// itemInput.addEventListener('keydown', runEvent);

// function runEvent(e) {
//     console.log(e.type);
//     document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
// }






// JAVASCRIPT DOM PART  4       BY      SIR




var filter = document.getElementById('filter');
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

filter.addEventListener('keyup', filtering);
form.addEventListener('submit', addingElement);
itemList.addEventListener('click', removeItem);

function addingElement(e) {
    e.preventDefault();
    var text = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(text));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}


// function removeElement(e) {
//     if (e.target.classList.contains('delete')) {
//         if (confirm('Are You Sure?')) {
//             var li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}




function filtering(e) {
    var text = e.target.value;
    text = text.toLowerCase();
    var itemHead = document.getElementById('items');
    var itemList = (itemHead.children);
    Array.from(itemList).forEach(function (e) {
        var singleList = e.firstChild.textContent.toLowerCase();
        if (singleList.indexOf(text) != -1) {
            e.style.display = 'block';
        }
        else {
            e.style.display = "none";
        }
    })
}
