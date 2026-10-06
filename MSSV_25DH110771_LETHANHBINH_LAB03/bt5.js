// Hàm tăng tiến trình từ 0% đến giá trị mục tiêu (target)
function animateProgress(elementId, targetPercent) {
    var elem = document.getElementById(elementId);
    var currentPercent = 0;

    var timer = setInterval(function () {
        if (currentPercent >= targetPercent) {
            clearInterval(timer);
        } else {
            currentPercent++;
            elem.style.width = currentPercent + "%";
            elem.innerText = currentPercent + "%";
        }
    }, 20); // Tốc độ cập nhật: mỗi 20ms tăng 1%
}

// Bắt đầu chạy cả 3 thanh progress
function startProgress() {
    resetProgress(); // Đưa về 0 trước khi chạy

    setTimeout(function () {
        animateProgress("bar1", 60); // Thanh 1 chạy đến 60%
        animateProgress("bar2", 30); // Thanh 2 chạy đến 30%
        animateProgress("bar3", 53); // Thanh 3 chạy đến 53%
    }, 100);
}

// Đưa tất cả thanh về 0%
function resetProgress() {
    var bars = [
        { id: "bar1" },
        { id: "bar2" },
        { id: "bar3" }
    ];

    bars.forEach(function (bar) {
        var elem = document.getElementById(bar.id);
        elem.style.width = "0%";
        elem.innerText = "0%";
    });
}

// Cho tự động chạy khi tải trang xong
window.onload = function () {
    startProgress();
};