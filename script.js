var button = document.getElementById("button");
var input = document.getElementById("input");
var list = document.getElementById("list");

button.addEventListener("click", clickButton);

var cnt = 0;

function clickButton() {
  var temp = document.createElement("li");
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li" + cnt);
  temp.innerHTML = input.value;
  temp.innerHTML +=
    "<button style='float: right; background-color: rgb(212, 202, 252); font-size: 30px; border-radius: 20px; border: 0;' class='btn btn-outline-secondary' type='button' onclick='remove(" +
    cnt +
    ")'><img src='media/delete.png' alt='삭제' width='25' height='25'></button>";
  list.appendChild(temp);
  cnt++;
}

function remove(cnt) {
  var li = document.getElementById("li" + cnt);
  list.removeChild(li);
}
