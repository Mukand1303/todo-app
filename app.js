let handleAddItem = () => {
  let input = document.getElementById("item");
  let ErrorMsg = document.getElementById("msg");
  let list = document.getElementById("list");
  let listItem = document.createElement("li");
  let editBtn = document.createElement("button");
  editBtn.style.margin = "10px";
  let deleteBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  deleteBtn.innerHTML = "Delete";

  let inputValue = input.value;
  listItem.id = inputValue;

  let listItemValue = document.createTextNode(inputValue);
  if (inputValue) {
    listItem.append(listItemValue);
    listItem.append(editBtn);
    listItem.append(deleteBtn);
    list.append(listItem);
    input.style.border = "1px solid";
    ErrorMsg.innerHTML = "";
  } else {
    input.style.border = "1px solid red";
    ErrorMsg.innerHTML = "Please Add Some Value!";
  }

  editBtn.addEventListener("click", function (e) {
    let mainBox = document.getElementById("box");
    let updateinpBox = document.createElement("div");
    let currentValue = listItem.getAttribute("id");
    let updateInp = document.createElement("input");
    editBtn.setAttribute("disabled", true);
    updateInp.setAttribute("value", currentValue);
    updateInp.setAttribute("name", currentValue);
    let updateButton = document.createElement("button");
    updateButton.innerHTML = "submit";
    updateinpBox.appendChild(updateInp);
    updateinpBox.appendChild(updateButton);
    mainBox.appendChild(updateinpBox);

    updateButton.addEventListener("click", function () {
      listItem.id = updateInp.value;
      listItem.innerHTML = updateInp.value;
      listItem.append(editBtn);
      listItem.append(deleteBtn);
      editBtn.removeAttribute("disabled");

      updateinpBox.remove();
    });
  });

  deleteBtn.addEventListener("click", function () {
    list.removeChild(listItem);
  });

  input.value = "";
};

function deleteall() {
  list.innerHTML = "";
}
