//Bài 1 tính lương
//Sơ đồ 3 khối :
//Input:Lấy giá trị người dùng nhập vào ở ô in put
//Xử lí:Khi nhấn vào nút thì sẽ hủy đi hành động mặc định của trình duyệt
//Sau đó gọi hàm tính toán trong hàm đó sẽ trả về số tiền lương
//đã tính
//Output :Trả về số tiền lương bằng số ngày đã nhập nhân với 100.000

var salaryBtn = document.getElementById('salaryBtn');
var salaryDays = document.getElementById('salaryDays')
var salary = document.getElementById('salary')
salaryBtn.onclick = (e) => {
    e.preventDefault();
    calcSalary (salaryDays)
}
function calcSalary (days) {
    var salaryDay = days.value;
    var salaryPerDay = 100000;
    var result;
    result = (salaryDay*salaryPerDay).toLocaleString();
    salary.innerHTML = `Tổng lương : ${result}VNĐ`;
}


//Bài 2
//Input:5 số người dùng nhập từ ô input
//Xử lí:Khi nhấn vào nút tính,chạy hàm tính trung bình
//Viết hàm tính trung bình truyền vào 1 mảng danh sách các số người dùng
//nhập,sử dụng for each lọc qua từng phần từ rồi thêm vào tổng sau đó chia 5
//Sau đó cho in kết quả ra 
//Output:giá trị trung bình của 5 số đó
var num = document.querySelectorAll('.num');
var averangeBtn = document.getElementById('averangeBtn');
var averangeResult = document.getElementById('averange');
averangeBtn.onclick = (e) => {
    e.preventDefault();
    calcAverange (num);
}
function calcAverange (ar) {
    var sum = 0;
    ar.forEach(item => {
        sum = sum + parseFloat(item.value) ;
    });
    averangeResult.innerHTML = `Kết quả : ${sum/5}`;
}


// Bài 3
// Input:giá trị người dùng nhập vào ô Input
// Xử lí:Khi click nút tính gọi hàm calcMoney 
// hàm calcMoney tính toán và inner lên trình duyệt giá trị sau khi tính toán
// Output:Giá trị sau khi quy đổi = giá trị nhập vào * 23.500
var exchangeBtn = document.getElementById('exchangeBtn');
var exchangeResult = document.getElementById('exchange')
var money = document.getElementById('money')
var exchangeRate = 23500;
exchangeBtn.onclick = (e) => {
    e.preventDefault();
    calcMoney(money);
};
function calcMoney (money) {
    var result = (money.value*exchangeRate).toLocaleString()
    exchangeResult.innerHTML = `Số tiền sau quy đổi : ${result}VNĐ`
}




// Bài 4
//Input:giá trị chiều dài và chiều rộng đc nhập từ ô input
// Xử lí :Khi click vào nút thì gọi hàm tính chu vi và hàm tính diện tích
// 2 hàm đều truyền vào 2 đối số là chiều dài và chiều rộng và thực hiện tính toán
//Output:In ra chu vi và diện tích ra màn hình

var rectangleBtn = document.getElementById('rectangleBtn');
var height = document.getElementById('height');
var width = document.getElementById('width');
var perimeterResult = document.querySelector('.perimeter');
var acreageResult = document.querySelector('.acreage');
rectangleBtn.onclick = (e) => {
    e.preventDefault();
    perimeter(height,width);
    acreage(height,width);
}
function perimeter(a,b) {
    var perimeter = (a.value*1 + b.value*1)*2;
    perimeterResult.innerHTML = `Chu vi : ${perimeter}`;
}
function acreage(a,b) {
    var acreage = parseFloat(a.value*b.value);
    acreageResult.innerHTML = `Diện tích : ${acreage}`;
}


// Bài 5 
// Input:Số có 2 chữ Số
// Xử lí:bấm nút thì chạy hàm calc ,
// trong hàm calc truyền vào một đối số,
// sau đó khai báo biến đơn vị và tính hàng dơn vị bằng cách 
// chia lấy phần dư cho 10 của giá trị nhập vào,
// khai báo biến chục và tính hàng chục bằng cách lấy giá trị nhập vào 
// chia cho 10 sau đó khai báo biến sum bằng tổng của đơn vị và chục 
// sau đó in ra màn hình
// Ouput:tổng của 2 chữ số của số đó

var calcBtn = document.getElementById('calcBtn');
var resultSide = document.getElementById('result')
var inputValue = document.getElementById('inputValue')
calcBtn.onclick = (e) => {
    e.preventDefault();
    calc(inputValue);
}
function calc (x) {
    var donVi = x.value%10;
    var chuc = Math.floor(x.value/10);
    var sum = donVi + chuc;
    resultSide.innerHTML = `Kết quả : ${sum}`
}