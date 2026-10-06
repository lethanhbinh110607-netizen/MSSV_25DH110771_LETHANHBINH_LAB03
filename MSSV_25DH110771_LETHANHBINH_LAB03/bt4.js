// Thêm công việc mới
function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    var ul = document.getElementById("todoList");

    // Tạo phần tử <li> mới
    var li = document.createElement("li");
    li.className = "todo-item";

    // Nội dung bên trong <li>
    li.innerHTML = `
        <input type="checkbox" onchange="toggleTask(this)">
        <span class="todo-text">${taskText}</span>
        <button class="btn-delete" onclick="deleteTask(this)">✕</button>
    `;

    ul.appendChild(li);

    // Xóa nội dung khung nhập
    input.value = "";
}

// Cho phép nhấn Enter để thêm công việc
document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Đánh dấu hoàn thành / chưa hoàn thành
function toggleTask(checkbox) {
    var li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add("completed");
    } else {
        li.classList.remove("completed");
    }
}

// Xóa công việc
function deleteTask(button) {
    var li = button.parentElement;
    li.remove();
}