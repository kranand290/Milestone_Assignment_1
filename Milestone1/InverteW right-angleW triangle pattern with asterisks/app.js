const n = 6;

for (let i = n; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }

  console.log(line);
}
