console.log(document);

const mainForm = document.querySelector('form');
const textBox = document.getElementById('toDoItem');

console.log(textBox)
console.log(mainForm)

mainForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);
    if (textBox.value !== "") {
        alert('You have submitted the form');
        const liElement = document.createElement('li');
        liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;
        
        const toDoConent = document.createTextNode(textBox.value);
        liElement.appendChild(toDoConent);
        
        const ulElement = document.querySelector('ul');
        ulElement.appendChild(liElement);
        textBox.value = "";

        // Will not work because of event propagation
        // const checkList = document.querySelector('li');
        // checkList.addEventListener('click', function () {
        // });

        const checkList = document.querySelector('ul');
        ulElement.addEventListener('click', function(e) {
            if (e.target.localName === 'i') {
                e.target.classList.toggle('fa-square-check');
                e.target.classList.toggle('fa-square');
            }
        });


    } else {
        alert('Please fill in the text box.');
    }
});


// BONUS LEVEL:
// add a "Reset" button which clears all of the TO DOs
// add an "Edit task" button
// add a "Remove task" button to each task
// add a congratulations alert when all of the existing TO DOs are checked off 
// add a "Take a break" message if 5 or more tasks are completed

