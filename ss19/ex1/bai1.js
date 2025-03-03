let month =  +prompt("moi ban nhap thang");
if (month >= 1 && month <= 12 ){
    switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                console.log("Tháng " + month + " có 31 ngày");
                break;
            case 4: case 6: case 9: case 11:
                console.log("Tháng " + month + " có 30 ngày");
                break;
            case 2:
                console.log("Tháng 2 có 28 hoặc 29 ngày");
                break;
            default:
                console.log("Lỗi không xác định");
        }
}else{
    prompt("thang khong hop le");
}