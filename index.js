const nameInput = document.getElementById('name');
const clickButton = document.getElementById('submitButton');

clickButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e);
    console.log(nameInput.value);
});

clickButton.addEventListener('mouseover', function (e) {
    console.log('hover');
});

clickButton.addEventListener('mouseout', function (e) {
    console.log('mouse Out');
});

// Using querySelector to select the second list item

var secondItem = document.querySelector('#it li:nth-child(2)');


// Adding a green background color
secondItem.style.backgroundColor = 'blue';
