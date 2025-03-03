let input = +prompt(`1.USD -> VND \n  2.VND -> USD`);

if (input === 1) {
    let USD = +prompt("nhap so tien la USD");
    if (USD > 0 ) {
        let VND = USD * 25000 
        console.log(` ${USD}  =  ${VND}`)
    }else {
        console.log("khong hop le")
    }
}else if (input === 2 ) {
    let VND = +prompt("nhap so tien la VND");
    if (VND > 0 ) {
        let USD = VND / 25000 
        console.log(` ${VND}  =  ${USD}`)
    }else {
        console.log("khong hop le")
    }
}


