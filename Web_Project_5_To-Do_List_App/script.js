const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Write Something Before Adding");
  } else {
    let li = document.createElement("li");
    li.innerHTML = capitalizeFirstLetter(inputBox.value);
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// Capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//to check and uncheck elements from the list + delete completed task
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//to save data in local storge

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//to display saved data

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
