const buttonClick = () => {
  let randomNum = Math.floor(Math.random() * 2)
  if (randomNum === 1) {
    document.getElementById("ans").src = "https://i.ibb.co/BPhL6xZ/Untitled-design-1.png";
  } else if (randomNum === 0) {
    document.getElementById("ans").src = "https://i.ibb.co/gwBb0Dt/Untitled-design.png";
  }
}