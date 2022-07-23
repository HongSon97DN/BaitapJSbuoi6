
// Bài 1

function inSoChanLe() {
    var soChan = "";
    var soLe = "";

    for (var i = 0; i < 100; i++) {
      if (i % 2 == 0) {
        soChan += i + "  ";
      } else {
        soLe += i + "  ";
      }
    }
   document.getElementById("txtResult").innerHTML = "Số chẵn là: " + soChan + "</br>" + "Số lẻ là: " + soLe;
}
document.getElementById("timSoChanLe").onclick = inSoChanLe;

// Bài 2:

function demSoChia3() {
    var count = 0;

    for(var i = 0; i <= 1000; i++) {
        if (i % 3 == 0) {
            count++;
        }
    }
   document.getElementById("txtResult1").innerHTML = "Số chia hết cho 3 từ 0 -> 1000: " + count + " số";
}
document.getElementById("demSo").onclick = demSoChia3;

// Bài 3

function soNguyenMin() {
    var sum = 0;
    var i = 0;

    while(sum < 10000) {
        i++;
        sum += i;
    }
    document.getElementById("txtResult2").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}
document.getElementById("timSoNguyenMin").onclick = soNguyenMin;

// Bài 4

function tinhTong() {
    var x = Number(document.getElementById("soX").value);
    var n = Number(document.getElementById("soN").value);
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    document.getElementById("txtResult3").innerHTML = "Tổng: " + sum;
}
document.getElementById("tinhTong").onclick = tinhTong;

// Bài 5

function tinhGiaiThua() {
    var number = Number(document.getElementById("number").value);
    var giaiThua = 1;

    for (var i = 1; i <= number; i++) {
       giaiThua = giaiThua * i;
    }
    document.getElementById("txtResult4").innerHTML = "Giai thừa của: "+ number + " là " + giaiThua;
}
document.getElementById("tinhGiaiThua").onclick = tinhGiaiThua;

// Bài 6

function taoTheDiv() {
    var divs = document.getElementsByClassName("div");

    for(var i = 0; i < divs.length; i++) {
        if((i+1) % 2 == 0) {
            divs[i].style.background = "red";
            divs[i].innerHTML = "Div chẵn";
        } else {
            divs[i].style.background = "blue";
            divs[i].innerHTML = "Div lẻ";
        }
    }
}
document.getElementById("taoTheDiv").onclick = taoTheDiv;