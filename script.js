const buttonClick = () => {
  let randomNum = Math.floor(Math.random() * 2)
  if (randomNum === 1) {
    document.getElementById("ans").src = "https://i.ibb.co/BPhL6xZ/Untitled-design-1.png";
    document.getElementById("result").textContent = "Result is : Head"
  } else if (randomNum === 0) {
    document.getElementById("ans").src = "https://i.ibb.co/gwBb0Dt/Untitled-design.png";
    document.getElementById("result").textContent = "Result is : Tail"
  }
}