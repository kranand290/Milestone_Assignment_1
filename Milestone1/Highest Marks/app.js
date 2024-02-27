const marks = [85, 78, 98, 62, 90];


let highMarks = marks[0];

for (let i = 1; i < marks.length; i++) {
    highMarks = marks[i] > highMarks ? marks[i] : highMarks;
}

console.log(highMarks);