const input = prompt("لطفا یک عدد وارد کنید:");
const n = parseInt(input);

if (isNaN(n) || n < 0) {
    console.log("ورودی نامعتبر. لطفا یک عدد مثبت وارد کنید.");
} else {
    let evenCount = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evenCount++;
        }
    }

    console.log(`تعداد اعداد زوج مثبت تا ${n}: ${evenCount}`);
}
