const btn = document.getElementById("btn");
const error_block = document.querySelector(".error");
const image_block = document.querySelector(".images");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  error_block.textContent = "";
  image_block.innerHTML = "";
  
  let value1 = document.getElementById("input1").value;
  let value2 = document.getElementById("input2").value;

  if (99 < value1 && value1 < 301 && 99 < value2 && value2 < 301) {
    fetch(`https://picsum.photos/${value1}/${value2}`)
      .then((response) => {
        let img = document.createElement("img");
        
        img.setAttribute("src", response.url);
        img.setAttribute("width", "300px");
        image_block.appendChild(img);
      })
      .catch((event) => {
        console.log("Ошибка запроса", event);
      });
  } else {
    let error_text = "одно из чисел вне диапазона от 100 до 300";
    error_block.textContent = error_text;
  }
});
