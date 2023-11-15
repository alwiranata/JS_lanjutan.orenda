// function init() {
//     // let nama = 'ALdo Wiranata'

//     return function (nama) {
//         console.log(nama);
//     }


// }
// let panggilNama = init();
// panggilNama('Aldo');
// panggilNama('aldo');


// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama},selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }
// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// console.dir(selamatMalam('Aldo'));

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
