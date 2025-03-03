// 1. Cộng chuỗi với số
let numberr = "javascript" + 5; 
console.log(numberrr
); // "javascript5"
// Giải thích: Khi cộng một chuỗi với một số, JavaScript sẽ chuyển số thành chuỗi và nối lại.

// 2. Trừ chuỗi với số
let numberr = "javascript" - 1; 
console.log(numberr); // NaN
// Giải thích: Phép trừ không áp dụng được với chuỗi không phải số, nên kết quả là NaN (Not-a-Number).

// 3. Cộng hai chuỗi số
let numberr = "3" + 2; 
console.log(numberr); // "32"
// Giải thích: Phép cộng sẽ chuyển số 2 thành chuỗi, rồi nối lại thành "32".

// 4. Trừ hai chuỗi số
let numberr = "5" - "4"; 
console.log(numberr); // 1
// Giải thích: Khi sử dụng phép trừ, JavaScript tự động chuyển chuỗi thành số và thực hiện phép toán.

// 5. Kiểm tra NaN với isNaN
let numberr = isNaN("123"); 
console.log(numberr); // false
// Giải thích: "123" có thể chuyển thành số hợp lệ, nên isNaN trả về false (không phải NaN).

// 6. Kiểm tra NaN với chuỗi không phải số
let numberr = isNaN("hello"); 
console.log(numberr); // true
// Giải thích: "hello" không thể chuyển thành số, nên isNaN trả về true (là NaN).

// 7. Sử dụng Number.isNaN với số
let numberr = Number.isNaN("123"); 
console.log(numberr); // false
// Giải thích: "123" là chuỗi nhưng không phải NaN thực sự, nên Number.isNaN trả về false.

// 8. Kiểm tra giá trị NaN thực sự
let numberr = Number.isNaN(NaN); 
console.log(numberr); // true
// Giải thích: NaN là giá trị NaN thực sự, nên Number.isNaN trả về true.
