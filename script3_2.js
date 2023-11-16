//konsep this pada arrow function
//Constructor Function
// const Mahasiswa = function () {

//     this.nama = 'Aldo Wiranata';
//     this.jurusan = 'PPLG';
//     this.sayHello = function () {
//         console.log(`Halo my name ${this.nama}, and my study ${this.jurusan}`);
//     }

// }

// const Aldo = new Mahasiswa();

//Arrow Function
// const Mahasiswa = function () {

//     this.nama = 'Aldo Wiranata';
//     this.jurusan = 'PPLG';
//     this.sayHello = () => {
//         console.log(`Halo my name ${this.nama}, and my study ${this.jurusan}`);
//     }

// }

// const Aldo = new Mahasiswa();

// const Mahasiswa = function () {

//     this.nama = 'Aldo Wiranata';
//     this.jurusan = 'PPLG';
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Halo my name ${this.nama}, i am ${this.umur}years study ${this.jurusan}`);
//     }
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 1000)

// }

// const Aldo = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';
    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 1000);
})
