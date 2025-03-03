let input = prompt("moi ban nhap");
let kt = 0

if (input === null || input.trim() === " ") {
    console.log("ban chua nhap chuoi");
}else if (input.length > 1) {
    console.log("ban nhap nhieu hon 1 ki tu")
}else {
   
        if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
            console.log(`${input}  la chu `)
        }else{
            console.log("khong phai la chu ")
        }
        
        
        
        
        // else if (input >= '0' && input <= '9'){
        //     console.log(`${input}  la so `)
        // } 


}









