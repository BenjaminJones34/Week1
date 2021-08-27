const space1 = 'o';
const space2 = 'o';
const space3 = 'x';
const space4 = ' ';
const space5 = 'o';
const space6 = 'x';
const space7 = 'x';
const space8 = 'o';
const space9 = 'x';

let counter = 1;
for (counter; counter < 12; counter++) {
    if (counter % 4 == 0) {
        console.log("-----------")
    } else if (counter % 2 == 0) {
        if (counter == 2) {
            console.log(` ${space1} | ${space2} | ${space3}`)
        } else if (counter == 6) {
            console.log(` ${space4} | ${space5} | ${space6}`)
        } else  {
            console.log(` ${space7} | ${space8} | ${space9}`)
        }
    } else {
        console.log('   |   |   ')
    }
}