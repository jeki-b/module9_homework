const btn = document.getElementById("btn");
const error_block = document.querySelector(".error");
const image_block = document.querySelector(".images");

btn.addEventListener("click",  =(e)> {
  e.preventDefault();

  error_block.textContent = "";
  image_block.innerHTML = "";
  let value = document.querySelector("input").value;

  if (value > 0 && value < 11) {
    const xhr = new XMLHttpRequest();

    xhr.open("get", `https://picsum.photos/v2/list?limit=${value}`, true);
    xhr.onerror = function () {
      console.log("Ошибка запроса");
    };
    xhr.onload = function () {
      let data = JSON.parse(xhr.response);
      data.forEach((obj) => {
        let img = document.createElement("img");
        img.setAttribute("src", obj.download_url);
        img.setAttribute("width", "300px");
        image_block.appendChild(img);
      });
      console.log(data);
    };
    xhr.send();
  } else {
    let error = "число вне диапазона от 1 до 10";
    error_block.textContent = error;
  }
});