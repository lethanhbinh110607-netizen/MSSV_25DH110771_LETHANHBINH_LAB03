function updateClock() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Xác định AM hay PM
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Chuyển từ định dạng 24 giờ sang 12 giờ
    hours = hours % 12;
    hours = hours ? hours : 12; // Nếu giờ bằng 0 (nửa đêm) thì chuyển thành 12

    // Định dạng 2 chữ số (thêm số 0 phía trước nếu < 10)
    var strHours = hours < 10 ? '0' + hours : hours;
    var strMinutes = minutes < 10 ? '0' + minutes : minutes;
    var strSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Chuỗi hiển thị theo mẫu: HH:MM:SS AM/PM
    var timeString = strHours + ':' + strMinutes + ':' + strSeconds + ' ' + ampm;

    // Gán chuỗi thời gian vào thẻ div
    document.getElementById('digital-clock').innerText = timeString;
}

// Gọi hàm ngay khi load trang để không bị chậm 1 giây
updateClock();

// Cập nhật lại thời gian mỗi 1 giây (1000 miligiây)
setInterval(updateClock, 1000);