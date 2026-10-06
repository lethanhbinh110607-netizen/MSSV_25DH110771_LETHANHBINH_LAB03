// 1. Hàm dùng chung kiểm tra rỗng cho các textbox (Tên, Địa chỉ, Tỉnh/thành, Quận/huyện, Phường/xã)
function kiemTraRong(inputId, errorId, tenTruong) {
    var inputElement = document.getElementById(inputId);
    var errorElement = document.getElementById(errorId);
    var value = inputElement.value.trim();

    if (value === "") {
        errorElement.innerText = "Vui lòng nhập " + tenTruong;
        return false;
    } else {
        errorElement.innerText = "";
        return true;
    }
}

// 2. Hàm kiểm tra số điện thoại từ 10 ký số trở lên 
function kiemTraSDT(inputId, errorId) {
    var inputElement = document.getElementById(inputId);
    var errorElement = document.getElementById(errorId);
    var value = inputElement.value.trim();

    if (value === "") {
        errorElement.innerText = "Vui lòng nhập số điện thoại";
        return false;
    }

    // Biểu thức chính quy kiểm tra chuỗi chỉ gồm số và dài từ 10 ký số trở lên
    var regexSDT = /^[0-9]{10,}$/;
    if (!regexSDT.test(value)) {
        errorElement.innerText = "Số điện thoại phải từ 10 ký số trở lên";
        return false;
    } else {
        errorElement.innerText = "";
        return true;
    }
}

// 3. Hàm dùng chung cho 2 nút chọn loại địa chỉ (Văn phòng / Nhà riêng)
function chonDiaChi(loaiDiaChi) {
    if (loaiDiaChi === "Văn phòng") {
        alert("Bạn chọn giao hàng tại văn phòng");
    } else if (loaiDiaChi === "Nhà riêng") {
        alert("Bạn chọn giao hàng tại nhà riêng");
    }
}

// 4. Hàm xử lý khi nhấn nút "Lưu"
function luuThongTin() {
    // Kiểm tra tất cả các trường dữ liệu
    var validTen = kiemTraRong('ten', 'err_ten', 'Tên');
    var validSDT = kiemTraSDT('sdt', 'err_sdt');
    var validDiaChi = kiemTraRong('diachi', 'err_diachi', 'Địa chỉ nhận hàng');
    var validTinh = kiemTraRong('tinh', 'err_tinh', 'Tỉnh / thành phố');
    var validQuan = kiemTraRong('quan', 'err_quan', 'Quận / Huyện');
    var validPhuong = kiemTraRong('phuong', 'err_phuong', 'Phường / Xã');

    // Kiểm tra tổng thể
    if (validTen && validSDT && validDiaChi && validTinh && validQuan && validPhuong) {
        alert("Lưu thông tin thành công");
    } else {
        alert("Thông tin nhập không hợp lệ");
    }
}