let paraContainer = document.querySelector(".para-container");
let para = document.querySelectorAll(".para");
let index = 0;

function showPara() {
  for (let i = 0; i < para.length; i++) {
    para[i].style.display = "none";
  }
  index++;
  if (index >= para.length) {
    index = 0;
  }
  para[index].style.display = "block";
  setTimeout(showPara, 3500);
}

showPara();
