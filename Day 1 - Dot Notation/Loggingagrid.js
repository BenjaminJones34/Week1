const grid_parts = ["   |  |   ", "----------"]

for (let counter = 1; counter < 12; counter++) {
    if (counter != 4 && counter != 8) { 
        console.log(grid_parts[0]);
    } else {
        console.log(grid_parts[1]);
    }
}


//|  |
//|  |
//|  |
//-----
//|  |
//|  |
//|  |
//-----
//|  |
//|  |
//|  |