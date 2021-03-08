const btn = document.getElementById("btn");

const error_block = document.querySelector(".error");
const image = document.querySelector(".images");

const data = localStorage.getItem("localData");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  error_block.textContent = "";
  image.innerHTML = "";

  let value1 = document.getElementById("input1").value;
  let value2 = document.getElementById("input2").value;

  if (value1 < 1 || value1 > 10) {
    let error = "Номер страницы вне диапазона от 1 до 10";
    error_block.textContent = error;
  } else if (value2 < 1 || value2 > 10) {
    let error = "Лимит вне диапазона от 1 до 10";
    error_block.textContent = error;
  } else if ( (value1 < 1 || value1 > 10) && (value2 < 1 || value2 > 10) ) {
    let error = "Номер страницы и лимит вне диапазона от 1 до 10";
    error_block.textContent = error;
  } else {
    fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("localData", JSON.stringify(data));
        resultImages(data);
      })
      .catch((e) => {
        console.log("Ошибка запроса", e);
      });
  }
});

function resultImages(data) {
  if (data) {
    data.forEach((obj) => {
      let img = document.createElement("img");
      
      img.setAttribute("src", obj.download_url);
      img.setAttribute("width", "300px");
      image.appendChild(img);
    });
  }
}

resultImages(JSON.parse(data));