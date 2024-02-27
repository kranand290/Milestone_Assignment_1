let arr = [2, 3, 8, 9, 8, 15, 21, 6, 90];

for (const value of arr) {
  if (value % 3 === 0) {
    console.log(value);
    continue;
  }
}
