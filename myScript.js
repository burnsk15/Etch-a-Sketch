// Loop to create the div's to make the grid
for(i=0; i<16; i++) {
    // Create elements
    let column = document.createElement('div');
    // Adding class to the elements
    column.className = 'column';
    // Adding the grids to the container <div>
    document.getElementById('container').appendChild(column);

    // For loop to create divs to make columns
    for(x=0; x<16; x++) {
        let item = document.createElement('div')
        item.className = 'item';
        column.appendChild(item);
    }
}