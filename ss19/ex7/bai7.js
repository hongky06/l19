let a = +prompt ("so a ")
let b = +prompt ("so b")
let c = +prompt ("so c ")
let max 
if (a > b && a > c ) {
    max = a
}else if (b > a && b > c) {
    max = b 
}else if (c > a && c > b) {
    max = c
}
console.log(`${max} la so lon nhat`)