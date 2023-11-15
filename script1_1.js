//cara untuk membuat object pada JS
//1.object literal
//Problem tidak efektif untuk object banyak
// let mahasiswa1 = {
//     nama: 'Aldo Wiranata',
//     energy: 10,
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Farel Chandra',
//     energy: 20,
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }
// }

//  2.function declaration
// function mahasiswa(nama, energy) {
//     let mahasiswa = {}
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     mahasiswa.makan = function (porsi) {
//         this.energy -= porsi;
//         console.log(`halo  ${this.nama}. selamat makan`)
//     }
//     mahasiswa.main = function (jam) {
//         this.energy -= jam;
//         console.log(`halo ${this.nama}. energi kamu sekarang : ${this.energy}`)
//     }
//     return mahasiswa;
// }


// let aldo = mahasiswa(prompt('Input Nama'), parseInt(prompt('input energy')));
// let Wiranata = mahasiswa(prompt('Input Nama'), parseInt(prompt('input energy')));


//3.constructor function
//keyword new
function Mahasiswa(nama, energy) {

    this.nama = nama;
    this.energy = energy;
    this.makan = function (porsi) {
        this.energy += porsi;
        console.log(`halo  ${this.nama}. energi kamu sekarang : ${this.energy}`)
    }
    this.main = function (jam) {
        this.energy -= jam;
        console.log(`halo ${this.nama}. energi kamu sekarang : ${this.energy}`)

    }

}

let aldo = new Mahasiswa(prompt('Input Nama'), parseInt(prompt('input energy')));


//4.object create