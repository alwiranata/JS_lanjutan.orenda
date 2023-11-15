// function Mahasiswa(nama, energy) {

//     this.nama = nama;
//     this.energy = energy;
// }


// Mahasiswa.prototype.makan = function (porsi) {
//     this.energy += porsi;

//     return `Halo ${this.nama}, energi kamu sekarang ${this.energy},`

// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energy -= jam;

//     return `Halo ${this.nama}, energi kamu sekarang ${this.energy},`

// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energy += jam * 2;

//     return `Halo ${this.nama}, energi kamu sekarang ${this.energy},`

// }

// const n = prompt('Input Your Name :');
// const e = parseInt(prompt('Input Your Energy :'));
// let aldo = new Mahasiswa(n, e);


//versi class
// class Mahasiswa {
//     constructor(nama, energy) {
//         this.nama = nama;
//         this.energy = energy;
//     }



//     makan(jam) {
//         this.energy -= jam;

//         return `Halo ${this.nama}, energi kamu sekarang ${this.energy},`

//     }

//     main(jam) {
//         this.energy -= jam;

//         return `Halo ${this.nama}, energi kamu sekarang ${this.energy},`;

//     }
//     tidur(jam) {
//         this.energy += jam * 2;

//         return `Halo ${this.nama}, energi kamu sekarang ${this.energy},`;

//     }

// }

// const n = prompt('Input Your Name :');
// const e = parseInt(prompt('Input Your Energy :'));
// let aldo = new Mahasiswa(n, e);

