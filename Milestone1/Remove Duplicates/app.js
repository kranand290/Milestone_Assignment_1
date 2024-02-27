let item = ["apple", "banana", "apple"];

for (let i = 0; i < item.length; i++) {
  for (let j = i + 1; j < item.length; j++) {
    if (item[i] === item[j]) {
      item.splice(j, 1);
      j--;
    }
  }
}

console.log(item);
