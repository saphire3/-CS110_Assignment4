//1. Write a program that prints the following figure for given number of lines.Example:
//n = 4; =>
//     +
//    ++
//   +++
//  ++++


const n = 5;
var text = "";

for (index = 0; index < n; index++) {
    text += '+';

    var text2 = '';
    for (space = 0; space < n - index - 1; space++) {
        text2 += ' ';
    };

    console.log(text2 + text);
    //for( space = 0)
}





