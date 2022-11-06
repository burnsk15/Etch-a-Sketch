var gridNumber = 16;
drawGrid();

// Function to draw original 16x16 grid.
function drawGrid() {
    // Loop to create the div's to make the grid
    for(i=0; i<gridNumber; i++) {
        // Create elements
        let column = document.createElement('div');
        // Adding class to the elements
        column.className = 'column';
        // Adding the grids to the container <div>
        document.getElementById('container').appendChild(column);

        // For loop to create divs to make columns
        for(x=0; x<gridNumber; x++) {
            let item = document.createElement('div')
            item.className = 'item';
            column.appendChild(item);
        }
    }
}

// Function to add a class to the element that the mouse runs over
function mouseOver(item) {
    item.classList.add('color');
}

// Function to clear the container div and redraw the grid with user inputed size
function redrawGrid() {
    // Clear the container div useing forEach to cycle through each div with the class 'column' and clear using .removeChild()
    document.querySelectorAll('.column').forEach(item => {
        item.parentElement.removeChild(item);
    });
    drawGrid();     
}

// addEventListener to a mouseover event. Use forEach to cylce through all elements with 'item' class
document.querySelectorAll('.item').forEach(item => { 
    item.addEventListener('mouseover', () => {
    mouseOver(item)})
    });

// addEventListener to prompt user for input to chamge grid size
document.getElementById("btn").addEventListener('click', function() {
    gridNumber = prompt("Please enter a number");
    // Check to make sure user inputs a number smaller than 100 to  not slow program down
    if (gridNumber <= 100) {
        redrawGrid();
        // addEventListener to a mouseover again after redrawing the grid.
        document.querySelectorAll('.item').forEach(item => { 
            item.addEventListener('mouseover', () => {
            mouseOver(item)})});
    } else {
        alert("Please choose a number smaller than 100.");
    }
});

