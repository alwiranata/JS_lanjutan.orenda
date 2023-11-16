const angka = [1, 2, 3, 4, 5, 6];

//mencari angka >= 3

//for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     };

// }

// console.log(newAngka)

//filter

// const newAngka = angka.filter(function (e) {
//     return e >= 3;
// })

// console.log(newAngka)

//row array

// const newAngka = angka.filter(e => e >= 3);

// console.log(newAngka)

//map

// const newAngka = angka.map(e => e * 2);
// console.log(newAngka)

//reduce
// jumlahkan seluruh elemen pada array
//1+2+3+4+5+6
// const newAgka = angka.reduce((accumulator, currentValue) =>
//     accumulator + currentValue,);
// console.log(newAgka);

//method chaining
//cari angka > 5
//kalikan 3
//jumlahkan

const hasil = angka.filter(e => e > 5)
    .map(e => e * 3)
    .map(e => e - 3)
    .reduce((acc, cur) => acc + cur,);
console.log(hasil)
