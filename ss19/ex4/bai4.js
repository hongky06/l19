let input = prompt("mời bạn nhập số ");


if(input === null || input.trim() === ""){
    console.log("khong hop le")

}else{
    if (input > 0 ) {
        if (input % 5 === 0 && input % 3 === 0 ){
            console.log(` ${input} chia het cho ca 3 va 5 `)
        }else{
            console.log(` ${input} khong chia het cho ca 3 va 5 `)
        }
    }else {
        console.log("khong hop le")
    }
}


