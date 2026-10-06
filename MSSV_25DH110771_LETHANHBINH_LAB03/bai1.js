// 1. Tự động điền "Sở trường" khi chọn "Chuyên ngành"
function chonChuyenNganh() {
    var nganh = document.getElementById("chuyennganh").value;
    var txtSoTruong = document.getElementById("sotruong");

    if (nganh === "hethong") {
        txtSoTruong.value = "Phân tích & Thiết kế";
    } else if (nganh === "phanmem") {
        txtSoTruong.value = "Lập trình";
    } else if (nganh === "mang") {
        txtSoTruong.value = "Quản lý mạng";
    } else {
        txtSoTruong.value = "";
    }
}

// 2. Kiểm tra dữ liệu khi bấm nút "Đăng ký"
function dangKy() {
    var hopLe = true;

    var msv = document.getElementById("msv").value.trim();
    var hoten = document.getElementById("hoten").value.trim();
    var tuoi = document.getElementById("tuoi").value.trim();

    var errMsv = document.getElementById("err_msv");
    var errHoten = document.getElementById("err_hoten");
    var errTuoi = document.getElementById("err_tuoi");
    var lblKetQua = document.getElementById("lbl_ketqua");

    // Xóa thông báo lỗi cũ
    errMsv.innerText = "";
    errHoten.innerText = "";
    errTuoi.innerText = "";
    lblKetQua.innerText = "";

    // 1/ Kiểm tra Mã sinh viên (10 ký tự)
    if (msv.length !== 10) {
        errMsv.innerText = "Mã sinh viên gồm 10 ký tự";
        hopLe = false;
    }

    // 2/ Kiểm tra Họ tên (không rỗng, <= 30 ký tự)
    if (hoten === "" || hoten.length > 30) {
        errHoten.innerText = "Họ tên không rỗng và <= 30 ký tự";
        hopLe = false;
    }

    // 3/ Kiểm tra Tuổi (>= 18)
    var numTuoi = Number(tuoi);
    if (tuoi === "" || isNaN(numTuoi) || numTuoi < 18) {
        errTuoi.innerText = "Tuổi phải >= 18";
        hopLe = false;
    }

    // Kết xuất thông báo
    if (hopLe) {
        lblKetQua.innerText = "Bạn đã đăng ký thành công";
        lblKetQua.style.color = "blue";
    } else {
        lblKetQua.innerText = "Bạn phải nhập lại cho đúng";
        lblKetQua.style.color = "red";
    }
}