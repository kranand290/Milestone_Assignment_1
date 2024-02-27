function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33E1", "#33E1FF", "#E1FF33"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }